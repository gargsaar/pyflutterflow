from datetime import datetime, timezone, timedelta
from cachetools import TTLCache
from fastapi.responses import JSONResponse
from fastapi import Request, Response, Depends, HTTPException, status
import jwt
import httpx
from postgrest.exceptions import APIError
from pyflutterflow.auth import FirebaseUser, get_current_user
from pyflutterflow import PyFlutterflow
from pyflutterflow.logs import get_logger
from pyflutterflow import constants
from pyflutterflow.database.supabase.supabase_client import SupabaseClient

logger = get_logger(__name__)
token_cache = TTLCache(maxsize=100, ttl=300)
HOP_BY_HOP_HEADERS = [
    'connection',
    'keep-alive',
    'proxy-authenticate',
    'proxy-authorization',
    'te',
    'trailers',
    'transfer-encoding',
    'upgrade',
    'content-length',
    'content-encoding',
]


def generate_jwt(user_id, is_admin: bool = False) -> str:
    """
    Generates a JWT token for Supabase authentication.

    Args:
        user_id (str): The ID of the user for whom the token is generated.
        is_admin (bool, optional): Flag indicating if the user has admin privileges. Defaults to False.

    Returns:
        str: A signed JWT token for authenticating with Supabase.
    """
    logger.debug("Generating supabase JWT token for user %s. Is Admin: %s", user_id, is_admin)
    settings = PyFlutterflow().get_settings()
    payload = {
        "sub": user_id,
        "user_id": user_id,
        'user_role': 'admin' if is_admin else 'authenticated',
        "iss": "supabase",
        "role": "authenticated",
        "iat": int((datetime.now(timezone.utc)).timestamp()),
        "exp": int((datetime.now(timezone.utc) + timedelta(days=30)).timestamp()),
    }
    return jwt.encode(payload, settings.supabase_jwt_secret, algorithm='HS256')


def get_token(user_id: str, role: str = '') -> str:
    """
    Retrieves or generates a JWT token for the specified user, caching the result for efficiency.

    Args:
        user_id (str): The ID of the user for whom the token is generated or retrieved.
        role (str, optional): The role of the user, used to determine if admin privileges are required. Defaults to ''.

    Returns:
        dict: A dictionary containing the 'Authorization' header with the Bearer token.
    """
    if user_id in token_cache:
        jwt_token = token_cache[user_id]
    else:
        jwt_token = generate_jwt(user_id, is_admin=role == constants.ADMIN_ROLE)
        token_cache[user_id] = jwt_token

    return jwt_token


async def supabase_request(request: Request, path: str, current_user: FirebaseUser = Depends(get_current_user)):
    """
    Forwards an HTTP request to Supabase with appropriate authentication headers.

    Args:
        request (Request): The incoming FastAPI request.
        path (str): The Supabase endpoint path to which the request is forwarded.
        current_user (FirebaseUser, optional): The current authenticated user, injected by dependency.

    Returns:
        Response: A FastAPI Response object containing the Supabase response data.
    """
    settings = PyFlutterflow().get_settings()

    supabase_url = f"{settings.supabase_url}/{path}"
    headers = request.headers.mutablecopy()
    del headers["host"]  # Local environments can interfere with the headers

    query_params = request.query_params._dict
    if 'single' in request.query_params and request.query_params['single'] == 'true':
        headers['Prefer'] = 'return=representation'
        headers["Accept"] = "application/vnd.pgrst.object+json"
    query_params.pop('single', None)


    # mint a new supabase JWT token from the firebase token details
    minted_token = get_token(current_user.uid, current_user.role)

    headers['Accept-Encoding'] = 'identity'
    headers['Authorization'] = f'Bearer {minted_token}'
    headers['apikey'] = settings.supabase_anon_key

    # Forward the request to Supabase
    async with httpx.AsyncClient() as client:
        supabase_response = await client.request(
            method=request.method,
            url=supabase_url,
            params=query_params,
            headers=headers,
            content=await request.body(),
        )

    return Response(
        content=supabase_response.content,
        status_code=supabase_response.status_code,
        headers=supabase_response.headers,
        media_type = supabase_response.headers.get('content-type')
    )


async def proxy(request: Request, path: str, current_user: FirebaseUser = Depends(get_current_user)):
    """
    Proxy function to handle forwarding a request to Supabase.

    Args:
        request (Request): The incoming FastAPI request.
        path (str): The Supabase endpoint path to which the request is forwarded.
        current_user (FirebaseUser, optional): The current authenticated user, injected by dependency.

    Returns:
        Response: A FastAPI Response object containing the Supabase response data.
    """
    return await supabase_request(request, path, current_user)


async def proxy_with_body(request: Request, body: dict, path: str, current_user: FirebaseUser = Depends(get_current_user)):
    """
    Proxy function for forwarding a request with a body payload to Supabase.

    Args:
        request (Request): The incoming FastAPI request.
        body (dict): The request body data to forward.
        path (str): The Supabase endpoint path to which the request is forwarded.
        current_user (FirebaseUser, optional): The current authenticated user, injected by dependency.

    Returns:
        Response: A FastAPI Response object containing the Supabase response data.
    """
    if not body:
        logger.warning("No body found in request")
    return await supabase_request(request, path, current_user)


async def get_request(table: str, sql_query: str = '*', eq: tuple | None = None, order_by: str | None = None):
    client = await SupabaseClient().get_client()
    try:
        query = client.table(table).select(sql_query)
        if eq:
            query = query.eq(eq[0], eq[1])
        if order_by:
            query = query.order(order_by)
        response = await query.execute()
        return response.data
    except APIError as e:
        logger.error("Error during supabase GET request: %s", e)
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f"{e}")


async def post_request(table: str, data: dict):
    client = await SupabaseClient().get_client()
    try:
        return await client.table(table).insert(data).execute()
    except APIError as e:
        logger.error("Error creating booking request: %s", e)
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f"{e}")


async def set_admin_flag(user_id: str, is_admin: bool):
    settings = PyFlutterflow().get_settings()
    client = await SupabaseClient().get_client()
    try:
        return await client.table(settings.users_table).update({'is_admin': is_admin}).eq('id', user_id).execute()
    except APIError as e:
        logger.error("Error updating user admin flag: %s", e)
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f"{e}")

import os
from pydantic import BaseModel
from fastapi import HTTPException, Depends
from fastapi import status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from firebase_admin.auth import ExpiredIdTokenError
from firebase_admin import auth
from pyflutterflow import PyFlutterflow, constants
from pyflutterflow.database.supabase.supabase_client import SupabaseClient
from pyflutterflow.database.firestore.firestore_client import FirestoreClient
from pyflutterflow.logs import get_logger

logger = get_logger(__name__)
security = HTTPBearer()

AVATAR_PLACEHOLDER_URL = os.getenv("AVATAR_PLACEHOLDER_URL", "")
REQUIRE_VERIFIED_EMAIL = os.getenv("REQUIRE_VERIFIED_EMAIL") or False


class FirestoreUser(BaseModel):
    """
    This will be the structure of the user object stored in firestore.
    """
    uid: str
    email: str
    display_name: str = 'Unnamed'
    photo_url: str = AVATAR_PLACEHOLDER_URL
    is_admin: bool = False


class FirebaseUser(BaseModel):
    """
    When a firebase auth token is validated and decoded, this
    is the structure of the user data returned.
    """
    uid: str
    email_verified: bool
    email: str
    picture: str = AVATAR_PLACEHOLDER_URL
    name: str = ''
    auth_time: int
    iat: int
    exp: int
    role: str = "user"


class FirebaseAuthUser(BaseModel):
    """
    The user structure from the firebase auth Python SDK differs slightly from
    FirebaseUser, so this model is used to represent that user object.
    """
    uid: str
    email: str
    display_name: str | None = None
    photo_url: str | None = None
    last_login_at: str
    created_at: str
    custom_attributes: str | None = None


class FirebaseUserClaims(BaseModel):
    """
    Some tokens have custom claims, and this feature is used by pyflutterflow
    to assign and manage admin rights at the token level.
    """
    uid: str
    role: str = 'admin'


async def get_admin_user(token: HTTPAuthorizationCredentials = Depends(security)) -> FirebaseUser:
    """Verify the JWT token, check for the admin service role, and then return the user object."""
    current_user = await get_current_user(token)
    if current_user.role == constants.ADMIN_ROLE:
        return current_user
    raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="You are not an admin.")


async def get_current_user(token: HTTPAuthorizationCredentials = Depends(security)) -> FirebaseUser:
    """Verify the JWT token and return the user object."""
    try:
        decoded_token = auth.verify_id_token(token.credentials)
        if REQUIRE_VERIFIED_EMAIL and not decoded_token.get("email_verified"):
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Email not verified")
        user = FirebaseUser(**decoded_token)
        return user
    except ExpiredIdTokenError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Auth token has expired")
    except Exception as e:
        logger.error("Error encountered during JWT token verification: %s", e)
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=str(e))


async def get_users_list(_: FirebaseUser = Depends(get_admin_user)) -> list[FirebaseAuthUser]:
    """Get a list of all users in the firebase auth system."""
    try:
        users = auth.list_users(max_results=500)
        users_list = []
        for user in users.iterate_all():
            data = user._data
            users_list.append(FirebaseAuthUser(
                uid=data.get('localId'),
                email=data.get('email'),
                display_name=data.get('displayName'),
                photo_url=data.get('photoUrl'),
                last_login_at=data.get('lastLoginAt'),
                created_at=data.get('createdAt'),
                custom_attributes=data.get('customAttributes'),
            ))
        return users_list
    except Exception as e:
        logger.error("Error encountered during getting users list: %s", e)
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail='Error encountered while getting users list.')


async def get_firebase_user_by_uid(user_uid: str, _: FirebaseUser = Depends(get_admin_user)) -> FirebaseAuthUser:
    """Get a list of all users in the firebase auth system."""
    try:
        user = auth.get_user(uid=user_uid)
        data = user._data
        return FirebaseAuthUser(
            uid=data.get('localId'),
            email=data.get('email'),
            display_name=data.get('displayName'),
            photo_url=data.get('photoUrl'),
            last_login_at=data.get('lastLoginAt'),
            created_at=data.get('createdAt'),
            custom_attributes=data.get('customAttributes'),
        )
    except Exception as e:
        logger.error("Error encountered during getting users list: %s", e)
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail='Error encountered while getting users list.')


async def run_supabase_firestore_user_sync(_: FirebaseUser = Depends(get_admin_user)) -> None:
    """
    Run a sync of Firebase users with Supabase users. Note this function
    would need to be upgraded to handle large user lists (>1000 users).
    """
    sb_client = await SupabaseClient().get_client()
    settings = PyFlutterflow().get_settings()
    logger.info("Running user sync between Firebase and Supabase.")
    response = await sb_client.table(settings.users_table).select('id').execute()
    supabase_users = [user['id'] for user in response.data]
    try:
        users = auth.list_users()
        for user in users.iterate_all():
            if user.uid not in supabase_users:
                logger.info("Adding user: %s", user.uid)
                if user.display_name and user.email:
                    await sb_client.table(settings.users_table).insert({
                        'id': user.uid,
                        'email': user.email,
                        'display_name': user.display_name,
                        'photo_url': user.photo_url or ''
                    }).execute()
                else:
                    logger.warning("User %s does not have a display name or email.", user.uid)
    except Exception as e:
        logger.error("Error encountered during getting users list: %s", e)
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f'Error encountered while getting users list: {e}')


async def set_admin_flag(user_id: str, is_admin: bool):
    firestore_client = FirestoreClient().get_client()
    doc_ref = firestore_client.collection('users').document(user_id)
    await doc_ref.update({
        'is_admin': is_admin
    })


async def set_user_role(user_claim: FirebaseUserClaims, user: FirebaseUser = Depends(get_admin_user)) -> FirebaseUser:
    """Update the service role permissions on the desired firebase user account. Take care: this action can create an admin."""
    if user.role != constants.ADMIN_ROLE:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="User does not have permission to set user role.")
    try:
        logger.info("Setting user role: %s for user: %s", user_claim.role, user_claim.uid)
        auth.set_custom_user_claims(user_claim.uid, {'role': user_claim.role})
    except Exception as e:
        logger.error("Error encountered during setting user role: %s", e)
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail='Error encountered while setting user role.')
    await set_admin_flag(user_claim.uid, is_admin=user_claim.role==constants.ADMIN_ROLE)
    return user


async def generate_firebase_verify_link(email: str) -> str:
    return auth.generate_email_verification_link(email)

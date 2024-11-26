from fastapi import APIRouter, Depends, UploadFile, File, Response
from starlette.responses import FileResponse
from pyflutterflow.logs import get_logger
from pyflutterflow.auth import set_user_role, get_users_list, get_current_user, get_firebase_user_by_uid, FirebaseUser, FirebaseAuthUser, run_supabase_firestore_user_sync
from pyflutterflow.database.supabase.supabase_functions import proxy, proxy_with_body, set_admin_flag
from pyflutterflow.services.cloudinary_service import CloudinaryService
from pyflutterflow import constants
from pyflutterflow.webpages.routes import webpages_router

logger = get_logger(__name__)

router = APIRouter(
    prefix='',
    tags=['Pyflutterflow internal routes'],
)

router.include_router(webpages_router)


@router.get("/configure")
async def serve_vue_config():
    """
    This route serves configuration for the Vue.js admin dashboard.

    The dashboard consumes this configuration to connect to the Firebase and Supabase APIs,
    and to handle the correct database schema.
    """
    file_path = "admin_config.json"
    return FileResponse(file_path)


########### Firebase auth routes ##############


@router.post("/admin/auth/set-role")
async def set_role(user: FirebaseUser = Depends(set_user_role)) -> None:
    """
    Set a role (e.g. admin) for a firebase auth user. This will create a custom
    claim in the user's token, available in all requests.

    Also sets a flag called 'is_admin' in the supabase users table. If the users
    table is not called 'users', please set the USERS_TABLE environment variable.
    """
    await set_admin_flag(user.uid, is_admin=user.role==constants.ADMIN_ROLE)


@router.get("/admin/auth/users", response_model=list[FirebaseAuthUser])
async def get_users(users: list = Depends(get_users_list)):
    """
    Get a list of all Firebase users. This route is only accessible to admins.
    """
    # TODO users pagination
    return users


@router.get("/admin/auth/users/{user_uid}", response_model=FirebaseAuthUser)
async def get_user_by_id(users: list = Depends(get_firebase_user_by_uid)):
    """
    Get a Firebase user by their UID. This route is only accessible to admins.
    """
    return users


@router.get("/admin/auth/sync-users", dependencies=[Depends(run_supabase_firestore_user_sync)])
async def supabase_firestore_user_sync():
    """
    Sync Firebase users with Supabase users. This will create a new user in the
    Supabase users table for each Firebase user, if not present.
    """
    pass

###############################################




########### SUPABASE PROXY ROUTES ##############
#
# These routes are used to proxy requests to the Supabase API.
#
# You can use them just as you would use the Supabase REST API
# (i.e. the postgrest API). However, the proxy serves to overcome
# one of Flutterflow's main limitations: the inability to use
# Firebase auth tokens in the Supabase API. To achieve this, these
# routes will mint a new supabase JWT token based on the Firebase
# one, including admin privilages. Minted admin tokens will have
# an embedded 'user_role'='admin' claim, which can be used in RLS
# to authenticate admin requests.
#
@router.get("/supabase/{path:path}")
async def supabase_get_proxy(response = Depends(proxy)):
    return response


@router.post("/supabase/{path:path}")
async def supabase_post_proxy(response = Depends(proxy_with_body)):
    return response


@router.patch("/supabase/{path:path}")
async def supabase_update_proxy(response = Depends(proxy_with_body)):
    return response


@router.delete("/supabase/{path:path}")
async def supabase_delete_proxy(response = Depends(proxy)):
    return response

################################################



@router.post("/cloudinary-upload", dependencies=[Depends(get_current_user)])
async def cloudinary_upload(image: UploadFile = File(...)):
    """
    Upload an image to Cloudinary. This will return a JSON object containing
    urls for the image in common sizes, such as thumbnails and display sizes.
    """
    cloudinary_service = CloudinaryService(image.file)
    return await cloudinary_service.upload_to_cloudinary()

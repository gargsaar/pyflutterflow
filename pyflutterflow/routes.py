from fastapi import APIRouter, Depends, UploadFile, File
from starlette.responses import FileResponse
from pyflutterflow.logs import get_logger
from pyflutterflow.auth import set_user_role, get_users_list, get_current_user, get_firebase_user_by_uid, FirebaseUser, FirebaseAuthUser
from pyflutterflow.database.supabase.supabase_functions import proxy, proxy_with_body, set_admin_flag
from pyflutterflow.services.cloudinary_service import CloudinaryService
from pyflutterflow import constants

logger = get_logger(__name__)

router = APIRouter(
    prefix='',
    tags=['Pyflutterflow internal routes'],
)


@router.get("/configure")
async def serve_vue_config():
    file_path = "admin_config.json"
    return FileResponse(file_path)


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
    # TODO users pagination
    return users


@router.get("/admin/auth/users/{user_uid}", response_model=FirebaseAuthUser)
async def get_user_by_id(users: list = Depends(get_firebase_user_by_uid)):
    return users


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


@router.post("/cloudinary-upload", dependencies=[Depends(get_current_user)])
async def cloudinary_upload(image: UploadFile = File(...)):
    cloudinary_service = CloudinaryService(image.file)
    return await cloudinary_service.upload_to_cloudinary()

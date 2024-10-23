from fastapi import APIRouter, Depends
from starlette.responses import FileResponse
from pyflutterflow.logs import get_logger
from pyflutterflow.auth import set_user_role, get_users_list

logger = get_logger(__name__)

router = APIRouter(
    prefix='',
    tags=['Pyflutterflow internal routes'],
)


@router.get("/configure")
async def serve_vue_config():
    file_path = "admin_config.json"
    return FileResponse(file_path)


@router.post("/create-admin", dependencies=[Depends(set_user_role)])
async def create_admin():
    pass


@router.get("/admin/users")
async def get_users(users: list = Depends(get_users_list)):
    # TODO users pagination
    return users

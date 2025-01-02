from fastapi import APIRouter
from pyflutterflow.logs import get_logger

logger = get_logger(__name__)

notifications_router = APIRouter(
    prefix='/notifications',
    tags=['Notifications'],
)

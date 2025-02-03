from fastapi import APIRouter, Depends, status
from pyflutterflow.services.notifications.notification_service import ping_notification_status, send_notification_to_users, mark_notification_as_read
from pyflutterflow.logs import get_logger

logger = get_logger(__name__)

notifications_router = APIRouter(
    prefix='/notifications',
)


@notifications_router.get('/status', status_code=status.HTTP_200_OK, response_model=dict)
async def notification_status(status = Depends(ping_notification_status)):
    """Get the notification status. Returns a json object showing the count of unread notifications"""
    return status


@notifications_router.post('/{pk}/mark-as-read', status_code=status.HTTP_200_OK, dependencies=[Depends(mark_notification_as_read)])
async def mark_as_read() -> None:
    """Mark a notification as read"""
    pass


@notifications_router.post('/send', status_code=status.HTTP_201_CREATED, dependencies=[Depends(send_notification_to_users)])
async def send_notification() -> None:
    """Send a notification to users. Admins may pass 'all' for the field 'recipient_ids' to send to all users."""
    pass

from fastapi import Depends, BackgroundTasks, HTTPException, status
from pyflutterflow.auth import get_current_user, FirebaseUser
from pyflutterflow.database.supabase.supabase_client import SupabaseClient
from pyflutterflow.services.notifications.models import UserNotificationsRequest, DeepLink, Notification
from pyflutterflow.services.notifications.fcm import PushNotificationService
from pyflutterflow.logs import get_logger
from pyflutterflow import constants

logger = get_logger(__name__)
NOTIFICATION_TABLE = 'notifications'


async def ping_notification_status(current_user: FirebaseUser = Depends(get_current_user)) -> dict:
    client = await SupabaseClient().get_client()
    response = await client.table(NOTIFICATION_TABLE).select('count', count='exact').eq('user_id', current_user.uid).eq("is_read", False).execute()
    count = 0 if not response.data else response.data[0].get('count', 0)
    return {
        'unread_notifications_count': count,
    }


async def mark_notification_as_read(pk: int, current_user: FirebaseUser = Depends(get_current_user)) -> None:
    client = await SupabaseClient().get_client()
    return await client.table(NOTIFICATION_TABLE).update({"is_read", True}).eq("id", pk).eq("user_id", current_user.uid).execute()


def get_deeplink(unr: UserNotificationsRequest,) -> DeepLink | None:
    return DeepLink(
        ff_page=unr.deeplink_page_name,
        deep_link_parameter_name=unr.deep_link_parameter_name,
        destination_id=unr.destination_id
    )


async def send_notification_to_users(unr: UserNotificationsRequest, background_tasks: BackgroundTasks,  current_user: FirebaseUser = Depends(get_current_user)) -> None:
    client = await SupabaseClient().get_client()
    pns = PushNotificationService()
    deeplink = get_deeplink(unr)

    if unr.recipient_ids == 'all':
        if current_user.role != constants.ADMIN_ROLE:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Tried to send a push to all users but invoker is not an admin.")
        unr.recipient_ids = pns.get_all_users()

    logger.debug("Sending notification to users. Deep link: %s", str(deeplink) if deeplink else None)
    notification = Notification(title=unr.title, body=unr.body, deep_link=deeplink)
    background_tasks.add_task(pns.send_notification_to_users, unr.recipient_ids, notification)
    notifications = [{
        "user_id": target_user_id,
        "notification": notification.model_dump(),
    } for target_user_id in unr.recipient_ids]
    if not notifications:
        logger.warning("No users found to send notification")
        return
    await client.table(NOTIFICATION_TABLE).insert(notifications).execute()

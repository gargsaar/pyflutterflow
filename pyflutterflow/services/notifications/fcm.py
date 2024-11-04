from firebase_admin import firestore, messaging
from pyflutterflow.services.notifications.models import Notification
from pyflutterflow.logs import get_logger

logger = get_logger(__name__)


class PushNotificationService:

    def __init__(self):
        """Initialize the PushNotificationService with a Firestore client instance."""
        self.firestore_db = firestore.client()

    def get_user_fcm_tokens(self, user_id: str) -> list[str]:
        """
        Retrieve the FCM tokens associated with a specific user.

        Args:
            user_id (str): The ID of the user whose FCM tokens are to be fetched.

        Returns:
            list[str]: A list of FCM token strings for the user.
        """
        user_ref = self.firestore_db.collection('users').document(user_id)
        fcm_tokens = user_ref.collection('fcm_tokens').order_by('created_at', direction='DESCENDING').get()
        return [fcm_token.to_dict().get('fcm_token') for fcm_token in fcm_tokens]

    def get_all_users(self) -> list[str]:
        """
        Retrieve all user IDs from the Firestore database.

        Returns:
            list[str]: A list of user IDs.
        """
        users = self.firestore_db.collection('users').get()
        return [user.id for user in users]

    def send_notification_to_users(self, user_ids: list[str], notification: Notification, badge: int = 1) -> None:
        """
        Send a notification to multiple users by their user IDs.

        Args:
            user_ids (list[str]): A list of user IDs to whom the notification will be sent.
            notification (Notification): The notification content to be sent.
            badge (int, optional): The badge count for the notification on iOS devices. Defaults to 1.
        """
        logger.debug("Preparing to send notification to users: %s", user_ids)
        user_tokens = [self.get_user_fcm_tokens(fs_user) for fs_user in user_ids]
        user_tokens = [item for sublist in user_tokens for item in sublist]
        self.send_notification_to_devices(user_tokens, notification, badge)

    def send_notification_to_devices(self, user_tokens: list[str], notification: Notification, badge: int = 1) -> None:
        """
        Create a notification message and send it to multiple devices based on their FCM tokens.

        Args:
            user_tokens (list[str]): A list of FCM tokens representing target devices.
            notification (Notification): The notification content to be sent.
            badge (int, optional): The badge count for the notification on iOS devices. Defaults to 1.
        """
        apns = messaging.APNSConfig(
            payload=messaging.APNSPayload(
                aps=messaging.Aps(
                    sound='default',
                    badge=badge
                )
            )
        )
        pending_notification = messaging.Notification(title=notification.title, body=notification.body, image=notification.image_url)
        multicast_message = messaging.MulticastMessage(
            notification=pending_notification,
            tokens=user_tokens,
            apns=apns,
            data=notification.deep_link.ff_route if notification.deep_link else None
        )

        try:
            logger.info("Sending batch notification with title '%s'", notification.title)
            messaging.send_each_for_multicast(multicast_message)
            logger.info("The notification was sent to %s devices: [%s]", len(user_tokens), user_tokens[:5])
        except Exception as exp:
            logger.error("Error while sending notification to devices: %s", exp)

    def add_user_to_topic(self, user_id, topic):
        """
        Subscribe a user to a specific topic for future notifications.

        Args:
            user_id (str): The ID of the user to subscribe.
            topic (str): The topic to which the user will be subscribed.
        """
        fs_user = self.firestore_db.collection('users').document(user_id)
        fcm_tokens = self.get_user_fcm_tokens(fs_user)
        logger.info("Adding user '%s' to topic '%s'", user_id, topic)
        if not fcm_tokens:
            logger.warning("No FCM tokens found for user %s", user_id)
            return
        response = messaging.subscribe_to_topic(fcm_tokens, topic)
        if response.errors:
            logger.error("Errors were encountered during FCM subscription: %s", response.errors[0].__dict__)

    def remove_user_from_topic(self, user_id: str, topic: str) -> None:
        """
        Unsubscribe a user from a specific topic.

        Args:
            user_id (str): The ID of the user to unsubscribe.
            topic (str): The topic from which the user will be unsubscribed.
        """
        fs_user = self.firestore_db.collection('users').document(user_id)
        fcm_tokens = self.get_user_fcm_tokens(fs_user)
        logger.info("Removing user '%s' from topic '%s'", user_id, topic)
        if not fcm_tokens:
            logger.warning("No FCM tokens found for user %s", user_id)
            return
        response = messaging.unsubscribe_from_topic(fcm_tokens, topic)
        if response.errors:
            logger.error("Errors were encountered during FCM unsubscription: %s", response.errors[0].__dict__)

    def send_notification_to_topic(self, topic, notification, routing_data) -> None:
        """
        Send a notification message to all devices subscribed to a specific topic.

        Args:
            topic (str): The topic to which the notification will be sent.
            notification (Notification): The notification content to be sent.
            routing_data (dict): Additional data for routing or handling the notification.
        """
        logger.info("Sending notification with title '%s' to topic '%s'", notification.title, topic)
        notification = messaging.Notification(title=notification.title, body=notification.body, image=notification.image_url)

        # iOS-specific payload
        apns = messaging.APNSConfig(
            payload=messaging.APNSPayload(
                aps=messaging.Aps(
                    sound='default',
                )
            )
        )

        message = messaging.Message(
            notification=notification,
            topic=topic,
            apns=apns,
            data=routing_data
        )

        try:
            messaging.send(message)
            logger.info("The notification was sent to topic %s", topic)
        except Exception as exp:
            logger.error("Error while sending notification to topic %s: %s", topic, exp)

from beanie import init_beanie
from motor.motor_asyncio import AsyncIOMotorClient
from app.models.Entity import Entity
from app.models.Notification import UserNotification, UserNotificationPreferences
from app.models.Legal import TermsAndConditions, PrivacyPolicy
from app.settings import get_settings
from app.logs import get_logger

logger = get_logger(__name__)
settings = get_settings()

document_models = [
    Entity,
    TermsAndConditions,
    PrivacyPolicy,
    UserNotification,
    UserNotificationPreferences
]


async def initialize_mongodb():
    """
    Initialize the MongoDB connection and Beanie ODM with defined document models.

    Connects to the MongoDB database using credentials from settings and initializes
    Beanie with the specified document models for ORM functionality.
    """
    try:
        client = AsyncIOMotorClient(f"mongodb://{settings.db_user}:{settings.db_password}@{settings.db_host}/{settings.db_name}?authSource=admin")
        logger.info("Initializing MongoDB Client...")
        await init_beanie(database=client[settings.db_name], document_models=document_models)
    except Exception as e:
        logger.error(f"Failed to initialize MongoDB: {e}")
        raise e

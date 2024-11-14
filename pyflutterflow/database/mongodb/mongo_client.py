import re
from beanie import init_beanie
from motor.motor_asyncio import AsyncIOMotorClient
from pyflutterflow import PyFlutterflow
from ...logs import get_logger

logger = get_logger(__name__)

PORT_PATTERN = r".*:\d+"


async def initialize_mongodb(document_models):
    """
    Initialize the MongoDB connection and Beanie ODM with defined document models.

    Connects to the MongoDB database using credentials from settings and initializes
    Beanie with the specified document models for ORM functionality.
    """
    settings = PyFlutterflow().get_settings()
    try:
        logger.info("Initializing MongoDB Client...")
        prefix = "mongodb" if re.match(PORT_PATTERN, settings.db_host) else "mongodb+srv"
        suffix = "?authSource=admin" if re.match(PORT_PATTERN, settings.db_host) else ""
        client = AsyncIOMotorClient(f"{prefix}://{settings.db_user}:{settings.db_password}@{settings.db_host}/{settings.db_name}{suffix}")
        await init_beanie(database=client[settings.db_name], document_models=document_models)
    except Exception as e:
        logger.error(f"Failed to initialize MongoDB: {e}")
        raise e

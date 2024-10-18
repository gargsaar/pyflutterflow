from beanie import init_beanie
from motor.motor_asyncio import AsyncIOMotorClient
from pyflutterflow import get_environment
from ...logs import get_logger

logger = get_logger(__name__)



async def initialize_mongodb(document_models):
    """
    Initialize the MongoDB connection and Beanie ODM with defined document models.

    Connects to the MongoDB database using credentials from settings and initializes
    Beanie with the specified document models for ORM functionality.
    """
    settings = get_environment()
    try:
        client = AsyncIOMotorClient(f"mongodb://{settings.db_user}:{settings.db_password}@{settings.db_host}/{settings.db_name}?authSource=admin")
        logger.info("Initializing MongoDB Client...")
        await init_beanie(database=client[settings.db_name], document_models=document_models)
    except Exception as e:
        logger.error(f"Failed to initialize MongoDB: {e}")
        raise e

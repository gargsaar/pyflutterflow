import os
from beanie import init_beanie
from motor.motor_asyncio import AsyncIOMotorClient
from ...logs import get_logger

logger = get_logger(__name__)


DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_HOST = os.getenv("DB_HOST")
DB_NAME = os.getenv("DB_NAME")


async def initialize_mongodb(document_models):
    """
    Initialize the MongoDB connection and Beanie ODM with defined document models.

    Connects to the MongoDB database using credentials from settings and initializes
    Beanie with the specified document models for ORM functionality.
    """
    try:
        client = AsyncIOMotorClient(f"mongodb://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}?authSource=admin")
        logger.info("Initializing MongoDB Client...")
        await init_beanie(database=client[DB_NAME], document_models=document_models)
    except Exception as e:
        logger.error(f"Failed to initialize MongoDB: {e}")
        raise e

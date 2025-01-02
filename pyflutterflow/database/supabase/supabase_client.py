from supabase._async.client import AsyncClient, create_client
from pyflutterflow.logs import get_logger
from pyflutterflow import PyFlutterflow

logger = get_logger(__name__)


class SupabaseClient:
    """
    Singleton class to manage a single instance of the Supabase Client.

    This class ensures that only one instance of the Supabase client exists throughout
    the application's lifecycle. It provides methods to initialize, retrieve, and close
    the Supabase client, facilitating centralized management of Supabase interactions.
    """

    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(SupabaseClient, cls).__new__(cls)
        return cls._instance

    def __init__(self):
        """Initialize environment settings and placeholders for Supabase client."""
        if not hasattr(self, '_initialized'):  # Prevent reinitialization on multiple calls
            settings = PyFlutterflow().get_settings()
            self.supabase_url = settings.supabase_url
            self.supabase_secret_key = settings.supabase_secret_key
            self.supabase_jwt_secret = settings.supabase_jwt_secret
            self._client: AsyncClient | None = None
            self._initialized = True  # Flag to indicate instance has been initialized

    async def initialize_client(self) -> None:
        """
        Initializes the Supabase Client instance asynchronously.
        """
        if self._client is None:
            self._client = await create_client(self.supabase_url, self.supabase_secret_key)
            logger.info("Supabase Client initialized.")

    async def get_client(self) -> AsyncClient:
        """
        Retrieves the Supabase Client instance.

        Returns:
            AsyncClient: The initialized Supabase Client instance.

        Raises:
            ValueError: If the Supabase client has not been initialized.
        """
        if self._client is None:
            await self.initialize_client()
        return self._client

    async def close_client(self) -> None:
        """
        Closes the Supabase Client instance.

        This method gracefully resets the Supabase client, allowing for re-initialization if necessary.
        """
        if self._client is None:
            raise ValueError("Supabase client has not been initialized.")
        self._client = None
        logger.info("Supabase Client closed.")

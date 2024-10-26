from supabase._async.client import AsyncClient, create_client
from pyflutterflow.logs import get_logger
from pyflutterflow import PyFlutterflow

logger = get_logger(__name__)


class SupabaseClient:
    """
    Singleton class to manage a single instance of the Supabase Client.

    This class ensures that only one instance of the Supabase client exists throughout
    the application's lifecycle. It provides class methods to set, retrieve, and close
    the Supabase client, facilitating centralized management of Supabase interactions.

    Attributes:
        _client (Optional[AsyncClient]): The singleton instance of the Supabase Client.
    """

    _client: AsyncClient | None = None

    @classmethod
    async def init(cls) -> None:
        settings = PyFlutterflow().get_environment()
        supabase_url = settings.supabase_url
        supabase_key = settings.supabase_key
        supabase_client = await create_client(supabase_url, supabase_key)
        await cls.set_client(supabase_client)

    @classmethod
    async def set_client(cls, client: AsyncClient) -> None:
        """
        Sets the singleton Supabase Client instance.

        Args:
            client (Client): An instance of Supabase Client to be used as the singleton.

        Raises:
            ValueError: If an attempt is made to set the client when it's already initialized.
        """
        cls._client = client

    @classmethod
    async def get_client(cls) -> AsyncClient:
        """
        Retrieves the singleton Supabase Client instance.

        Returns:
            Client: The initialized Supabase Client instance.

        Raises:
            ValueError: If the Supabase client has not been initialized.
        """
        if cls._client is None:
            cls.init()
            logger.info("Initializing Supabase Client...")
        return cls._client

    @classmethod
    async def close_client(cls) -> None:
        """
        Closes the singleton Supabase Client instance.

        This method gracefully closes the Supabase client, ensuring that all pending
        operations are completed and resources are released. After closing, the client
        instance is set to `None`, allowing for re-initialization if necessary.

        Raises:
            ValueError: If the Supabase client has not been initialized.
            Exception: Propagates any exceptions raised during the closing of the client.
        """
        if cls._client is None:
            raise ValueError("Supabase client has not been initialized.")
        # Supabase client does not require a close operation; reset the client to None
        cls._client = None

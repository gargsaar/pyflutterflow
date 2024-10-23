from google.oauth2 import service_account
from google.cloud.firestore_v1 import AsyncClient
from pyflutterflow.logs import get_logger
from pyflutterflow import PyFlutterflow

logger = get_logger(__name__)


class FirestoreClient:
    """
    Singleton class to manage a single instance of the Firestore AsyncClient.

    This class ensures that only one instance of the Firestore client exists throughout
    the application's lifecycle. It provides class methods to set, retrieve, and close
    the Firestore client, facilitating centralized management of Firestore interactions.

    Attributes:
        _client (Optional[AsyncClient]): The singleton instance of the Firestore AsyncClient.
    """

    _client: AsyncClient | None = None

    @classmethod
    def init(cls) -> None:
        settings = PyFlutterflow().get_environment()
        credentials = service_account.Credentials.from_service_account_info(settings.firebase_config)
        firestore_client = AsyncClient(credentials=credentials)
        cls.set_client(firestore_client)

    @classmethod
    def set_client(cls, client: AsyncClient) -> None:
        """
        Sets the singleton Firestore AsyncClient instance.

        Args:
            client (AsyncClient): An instance of Firestore AsyncClient to be used as the singleton.

        Raises:
            ValueError: If an attempt is made to set the client when it's already initialized.
        """
        # if cls._client is not None:
        #     raise ValueError("Firestore client is already set.")
        cls._client = client

    @classmethod
    def get_client(cls) -> AsyncClient:
        """
        Retrieves the singleton Firestore AsyncClient instance.

        Returns:
            AsyncClient: The initialized Firestore AsyncClient instance.

        Raises:
            ValueError: If the Firestore client has not been initialized.
        """
        if cls._client is None:
            cls.init()
            logger.info("Initializing Firestore Client...")
        return cls._client

    @classmethod
    async def close_client(cls) -> None:
        """
        Closes the singleton Firestore AsyncClient instance.

        This method gracefully closes the Firestore client, ensuring that all pending
        operations are completed and resources are released. After closing, the client
        instance is set to `None`, allowing for re-initialization if necessary.

        Raises:
            ValueError: If the Firestore client has not been initialized.
            Exception: Propagates any exceptions raised during the closing of the client.
        """
        if cls._client is None:
            raise ValueError("Firestore client has not been initialized.")
        await cls._client.close()
        cls._client = None

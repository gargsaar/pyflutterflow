from datetime import datetime, timezone
from pydantic import Field
from pyflutterflow.BaseModels import AppBaseModel
from pyflutterflow.database.firestore.firestore_client import FirestoreClient


class FirestoreModel(AppBaseModel):
    created_at_utc: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    modified_at_utc: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

    class Settings:
        name = ""

    @classmethod
    def get_collection(cls):
        client = FirestoreClient.get_client()
        return client.collection(cls.Settings.name)

    async def fs_create(self) -> 'FirestoreModel':
        collection = self.get_collection()
        doc_ref = collection.document(self.id)
        await doc_ref.set(self.to_dict())
        return self

    async def fs_delete(self) -> None:
        collection = self.get_collection()
        doc_ref = collection.document(self.id)
        await doc_ref.delete()

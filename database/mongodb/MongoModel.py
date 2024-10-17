from datetime import datetime, timezone
from pydantic import Field, ConfigDict
from beanie import Document, PydanticObjectId


class MongoModel(Document):
    id: str = Field(default_factory=lambda: str(PydanticObjectId()), alias="_id")
    created_at_utc: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    modified_at_utc: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

    model_config = ConfigDict(from_attributes=True, populate_by_name=True)

    async def save(self, *args, **kwargs):
        self.modified_at_utc = datetime.now(timezone.utc)
        return await super().save(*args, **kwargs)

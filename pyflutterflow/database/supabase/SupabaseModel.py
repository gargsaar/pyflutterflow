from datetime import datetime, timezone
from pydantic import Field
from pyflutterflow.BaseModels import AppBaseModel


class SupabaseModel(AppBaseModel):
    id: int
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    # modified_at_utc: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

    class Settings:
        name = ""

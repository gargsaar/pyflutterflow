from pydantic import BaseModel


class AppBaseModel(BaseModel):

    def to_dict(self):
        """Use this in place of pydantic's .model_dump() to avoid issues with PydanticObjectId."""
        return {key: value for key, value in self.__dict__.items() if value is not None}

from typing import Generic
from fastapi import HTTPException, status
from fastapi_pagination import Params, Page
from fastapi_pagination.ext.beanie import paginate
import constants
from ...database.interface import BaseRepositoryInterface
from ...database import ModelType, CreateSchemaType, UpdateSchemaType
from ...auth import FirebaseUser
from ...logs import get_logger


logger = get_logger(__name__)


class MongoRepository(BaseRepositoryInterface[ModelType, CreateSchemaType, UpdateSchemaType], Generic[ModelType, CreateSchemaType, UpdateSchemaType]):
    """
    This is a base service class that provides CRUD operations for whatever model inherits from it.
    It interacts with the model layer and raises http exceptions where necessary. Some methods,
    such as get_by_id() and delete(), can be used directly. Others will need to be called from a
    more specific service class that inherits from this one, since input data types will need to be
    specified.
    """
    def __init__(self, model: type[ModelType]):
        self.model = model

    async def list(self, params: Params, current_user: FirebaseUser) -> Page[ModelType]:
        return await paginate(self.model.find({"user_id": current_user.uid}), params, sort=["-created_at_utc" ])

    async def list_all(self, params: Params, current_user: FirebaseUser) -> Page[ModelType]:
        if current_user.role != constants.ADMIN_ROLE:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Only admins can retrieve all records.")
        return await paginate(self.model, params, sort=["-created_at_utc" ])

    async def get(self, id: str, current_user: FirebaseUser) -> ModelType:
        document = await self.model.get(id)
        if not document:
            raise ValueError("Cannot retrieve MongoDB document: Not found")
        if document.user_id != current_user.uid and current_user.role != constants.ADMIN_ROLE:
            logger.warning(f"An attempt was made to retrieve a record not owned by the current user. User: {current_user.uid}, Record: {document.id}")
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="You are not allowed to access this record.")
        return document

    async def create(self, data: CreateSchemaType, current_user: FirebaseUser, **kwargs) -> ModelType:
        data = data.to_dict()
        data['user_id'] = current_user.uid
        if kwargs.get('id'):
            data['id'] =  kwargs.get('id')
        document = self.model(**data)
        return await document.create()

    async def update(self, id: str, data: UpdateSchemaType, current_user: FirebaseUser) -> ModelType:
        document = await self.model.get(id)
        if not document:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Cannot update: Not found")
        if document.user_id != current_user.uid and current_user.role != constants.ADMIN_ROLE:
            logger.warning(f"An attempt was made to modify a record not owned by the current user. User: {current_user.uid}, Record: {document.id}")
            raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="An attempt was made to modify a record not owned by the current user.")
        return await document.update({"$set": data.to_dict()})

    async def delete(self, id: str, current_user: FirebaseUser) -> None:
        document = await self.model.get(id)
        if not document:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Cannot delete: Not found")
        if document.user_id != current_user.uid and current_user.role != constants.ADMIN_ROLE:
            logger.warning(f"An attempt was made to delete a record not owned by the current user. User: {current_user.uid}, Record: {document.id}")
            raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="An attempt was made to delete a record not owned by the current user.")
        await document.delete()

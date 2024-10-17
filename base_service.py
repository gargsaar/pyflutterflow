from typing import Generic
from fastapi import Depends, HTTPException, status
from fastapi_pagination import Page, Params
from .database.interface import BaseRepositoryInterface
from .database import ModelType, CreateSchemaType, UpdateSchemaType
from .auth import get_current_user, FirebaseUser, get_admin_user
from .logs import get_logger

logger = get_logger(__name__)


class BaseService(Generic[ModelType, CreateSchemaType, UpdateSchemaType]):

    def __init__(self, repository: BaseRepositoryInterface[ModelType, CreateSchemaType, UpdateSchemaType]):
        self.repository = repository

    async def list(self, params: Params = Depends(), current_user: FirebaseUser = Depends(get_current_user)) -> Page[ModelType]:
        return await self.repository.list(params, current_user)

    async def list_all(self, params: Params = Depends(), current_user: FirebaseUser = Depends(get_admin_user)) -> Page[ModelType]:
        return await self.repository.list_all(params, current_user)

    async def get(self, id: str, current_user: FirebaseUser = Depends(get_current_user)) -> ModelType:
        try:
            return await self.repository.get(id, current_user)
        except ValueError:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Record not found")

    async def create(self, data: CreateSchemaType, current_user: FirebaseUser = Depends(get_current_user)) -> ModelType:
        try:
            return await self.repository.create(data, current_user)
        except Exception as e:
            logger.error(f"Error creating record: {e}")
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to create record")

    async def update(self, id: str, data: UpdateSchemaType, current_user: FirebaseUser = Depends(get_current_user)) -> ModelType:
        try:
            return await self.repository.update(id, data, current_user)
        except Exception as e:
            logger.error(f"Error updating record: {e}")
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to update record")

    async def delete(self, id: str, current_user: FirebaseUser = Depends(get_current_user)) -> None:
        try:
            return await self.repository.delete(id, current_user)
        except Exception as e:
            logger.error(f"Error deleting record: {e}")
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to delete record")

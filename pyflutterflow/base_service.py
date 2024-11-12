from typing import Generic
from fastapi import Depends, HTTPException, status
from pyflutterflow.paginator import Page, Params
from pyflutterflow.database.interface import BaseRepositoryInterface
from pyflutterflow.database import ModelType, CreateSchemaType, UpdateSchemaType
from pyflutterflow.auth import get_current_user, FirebaseUser, get_admin_user
from pyflutterflow.logs import get_logger

logger = get_logger(__name__)


class BaseService(Generic[ModelType, CreateSchemaType, UpdateSchemaType]):

    def __init__(self, repository: BaseRepositoryInterface[ModelType, CreateSchemaType, UpdateSchemaType]):
        self.repository = repository

    async def list_all(self, params: Params = Depends(), current_user: FirebaseUser = Depends(get_current_user), **kwargs):
        try:
            return await self.repository.list_all(params, current_user, **kwargs)
        except Exception as e:
            logger.error(f"Error listing records: {e}")
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Failed to list records: {e}")

    async def get(self, pk: str, current_user: FirebaseUser = Depends(get_current_user), **kwargs) -> ModelType:
        try:
            return await self.repository.get(pk, current_user, **kwargs)
        except ValueError as e:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Failed to get record: {e}")

    async def create(self, data: CreateSchemaType, current_user: FirebaseUser = Depends(get_current_user)) -> ModelType:
        try:
            return await self.repository.create(data, current_user)
        except Exception as e:
            logger.error(f"Error creating record: {e}")
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Failed to create record: {e}")

    async def update(self, pk: int | str, data: UpdateSchemaType, current_user: FirebaseUser = Depends(get_current_user)) -> ModelType:
        try:
            return await self.repository.update(pk, data, current_user)
        except Exception as e:
            logger.error(f"Error updating record: {e}")
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Failed to update record: {e}")

    async def delete(self, pk: int | str, current_user: FirebaseUser = Depends(get_current_user)) -> None:
        try:
            response = await self.repository.delete(pk, current_user)
        except Exception as e:
            logger.error(f"Error deleting record: {e}")
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Failed to delete record: {e}")
        if len(response.data) == 0:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST , detail=f"No rows were deleted")
        return response

    async def restricted_delete(self, pk: int | str, current_user: FirebaseUser = Depends(get_current_user)) -> None:
        try:
            response = await self.repository.restricted_delete(pk, current_user)
        except Exception as e:
            logger.error(f"Error deleting record: {e}")
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Failed to delete record: {e}")
        if len(response.data) == 0:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST , detail=f"No rows were deleted")
        return response



class BaseAdminService(Generic[ModelType, CreateSchemaType, UpdateSchemaType]):

    def __init__(self, repository: BaseRepositoryInterface[ModelType, CreateSchemaType, UpdateSchemaType]):
        self.repository = repository

    async def list_all(self, params: Params = Depends(), current_user: FirebaseUser = Depends(get_admin_user), **kwargs) -> Page[ModelType]:
        try:
            return await self.repository.list_all(params, current_user, **kwargs)
        except Exception as e:
            logger.error(f"Error listing records: {e}")
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Failed to list records: {e}")

    async def get(self, pk: int | str, current_user: FirebaseUser = Depends(get_admin_user), **kwargs) -> ModelType:
        try:
            return await self.repository.get(pk, current_user, **kwargs)
        except Exception as e:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Record not found: {e}")

    async def create(self, data: CreateSchemaType, current_user: FirebaseUser = Depends(get_admin_user)) -> ModelType:
        try:
            return await self.repository.create(data, current_user)
        except Exception as e:
            logger.error("Error creating record: %s", e)
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f"Failed to create record: {e}")

    async def update(self, pk: int | str, data: UpdateSchemaType, current_user: FirebaseUser = Depends(get_admin_user)) -> ModelType:
        try:
            return await self.repository.update(pk, data, current_user)
        except Exception as e:
            logger.error(f"Error updating record: {e}")
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Failed to update record: {e}")

    async def delete(self, pk: int | str, current_user: FirebaseUser = Depends(get_admin_user)) -> None:
        try:
            return await self.repository.delete(pk, current_user)
        except Exception as e:
            logger.error(f"Error deleting record: {e}")
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Failed to delete record: {e}")

    async def restricted_delete(self, pk: int | str, current_user: FirebaseUser = Depends(get_admin_user)) -> None:
        try:
            return await self.repository.restricted_delete(pk, current_user)
        except Exception as e:
            logger.error(f"Error deleting record: {e}")
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Failed to delete record: {e}")

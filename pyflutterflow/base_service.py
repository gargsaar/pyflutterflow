from typing import Generic
# from functools import lru_cache
from fastapi import Depends, HTTPException, status
from fastapi_pagination import Page, Params
# from pyflutterflow.database.dual_repository import get_dual_repository
# from pyflutterflow.database.mongodb.mongo_repository import MongoRepository
# from pyflutterflow.database.firestore.firestore_repository import FirestoreRepository
# from pyflutterflow.BaseModels import DBTarget
# from pyflutterflow.database.interface import get_targets
from pyflutterflow.database.interface import BaseRepositoryInterface
from pyflutterflow.database import ModelType, CreateSchemaType, UpdateSchemaType
from pyflutterflow.auth import get_current_user, FirebaseUser, get_admin_user
from pyflutterflow.logs import get_logger

logger = get_logger(__name__)


class BaseService(Generic[ModelType, CreateSchemaType, UpdateSchemaType]):

    def __init__(self, repository: BaseRepositoryInterface[ModelType, CreateSchemaType, UpdateSchemaType]):
        self.repository = repository

    async def list(self, params: Params = Depends(), current_user: FirebaseUser = Depends(get_current_user)) -> Page[ModelType]:
        return await self.repository.list(params, current_user)

    async def list_all(self, params: Params = Depends(), current_user: FirebaseUser = Depends(get_admin_user), **kwargs) -> Page[ModelType]:
        return await self.repository.list_all(params, current_user, **kwargs)

    async def get(self, pk: str, current_user: FirebaseUser = Depends(get_current_user), **kwargs) -> ModelType:
        try:
            return await self.repository.get(pk, current_user, **kwargs)
        except ValueError as e:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"{e}")

    async def create(self, data: CreateSchemaType, current_user: FirebaseUser = Depends(get_current_user)) -> ModelType:
        try:
            return await self.repository.create(data, current_user)
        except Exception as e:
            logger.error(f"Error creating record: {e}")
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to create record")

    async def update(self, pk: int, data: UpdateSchemaType, current_user: FirebaseUser = Depends(get_current_user)) -> ModelType:
        try:
            return await self.repository.update(pk, data, current_user)
        except Exception as e:
            logger.error(f"Error updating record: {e}")
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to update record")

    async def delete(self, pk: int, current_user: FirebaseUser = Depends(get_current_user)) -> None:
        try:
            response = await self.repository.delete(pk, current_user)
        except Exception as e:
            logger.error(f"Error deleting record: {e}")
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to delete record")
        if len(response.data) == 0:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST , detail="No rows were deleted")
        return response

    async def restricted_delete(self, pk: int, current_user: FirebaseUser = Depends(get_current_user)) -> None:
        try:
            response = await self.repository.restricted_delete(pk, current_user)
        except Exception as e:
            logger.error(f"Error deleting record: {e}")
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Failed to delete record: {e}")
        if len(response.data) == 0:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST , detail="No rows were deleted")
        return response



class BaseAdminService(Generic[ModelType, CreateSchemaType, UpdateSchemaType]):

    def __init__(self, repository: BaseRepositoryInterface[ModelType, CreateSchemaType, UpdateSchemaType]):
        self.repository = repository

    async def list(self, params: Params = Depends(), current_user: FirebaseUser = Depends(get_current_user)) -> Page[ModelType]:
        return await self.repository.list(params, current_user)

    async def list_all(self, params: Params = Depends(), current_user: FirebaseUser = Depends(get_admin_user), **kwargs) -> Page[ModelType]:
        return await self.repository.list_all(params, current_user, **kwargs)

    async def get(self, pk: str, current_user: FirebaseUser = Depends(get_current_user), **kwargs) -> ModelType:
        try:
            return await self.repository.get(pk, current_user, **kwargs)
        except ValueError:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Record not found")

    async def create(self, data: CreateSchemaType, current_user: FirebaseUser = Depends(get_current_user)) -> ModelType:
        try:
            return await self.repository.create(data, current_user)
        except Exception as e:
            logger.error("Error creating record: %s", e)
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f"Failed to create record: {e}")

    async def update(self, pk: int, data: UpdateSchemaType, current_user: FirebaseUser = Depends(get_current_user)) -> ModelType:
        try:
            return await self.repository.update(pk, data, current_user)
        except Exception as e:
            logger.error(f"Error updating record: {e}")
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to update record")

    async def delete(self, pk: int, current_user: FirebaseUser = Depends(get_current_user)) -> None:
        try:
            return await self.repository.delete(pk, current_user)
        except Exception as e:
            logger.error(f"Error deleting record: {e}")
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to delete record")




# @lru_cache()
# def get_repository(Entity) -> MongoRepository | FirestoreRepository:
#     read_from, write_to = get_targets('entities')
#     if read_from == DBTarget.MONGO and write_to == DBTarget.MONGO:
#         repository = MongoRepository(model=Entity)
#     elif read_from == DBTarget.FIRESTORE and write_to == DBTarget.FIRESTORE:
#         repository = FirestoreRepository(model=Entity)
#     else:
#         repository = get_dual_repository(Entity, read_from, write_to)
#     return repository

from typing import Generic
from beanie import PydanticObjectId
from fastapi_pagination import Page, Params
from pyflutterflow.database.firestore.firestore_repository import FirestoreRepository
from .mongodb.mongo_repository import MongoRepository
from .interface import BaseRepositoryInterface
from . import ModelType, CreateSchemaType, UpdateSchemaType
from ..BaseModels import DBTarget
from ..auth import FirebaseUser
from ..logs import get_logger

logger = get_logger(__name__)


class DualRepository(BaseRepositoryInterface[ModelType, CreateSchemaType, UpdateSchemaType], Generic[ModelType, CreateSchemaType, UpdateSchemaType]):

    def __init__(self, firestore_repo: BaseRepositoryInterface[ModelType, CreateSchemaType, UpdateSchemaType],
                       mongo_repo: BaseRepositoryInterface[ModelType, CreateSchemaType, UpdateSchemaType],
                       read_from: DBTarget, write_to: DBTarget):
        self.firestore = firestore_repo
        self.mongo = mongo_repo
        self.read_from = read_from
        self.write_to = write_to

    async def list(self, params: Params, current_user: FirebaseUser) -> Page[ModelType]:
        if self.read_from == DBTarget.FIRESTORE:
            return await self.firestore.list(params, current_user)
        return await self.mongo.list(params, current_user)

    async def list_all(self, params: Params, current_user: FirebaseUser, **kwargs) -> Page[ModelType]:
        if self.read_from == DBTarget.FIRESTORE:
            return await self.firestore.list(params, current_user)
        return await self.mongo.list(params, current_user)

    async def get(self, id: str, current_user: FirebaseUser) -> ModelType:
        if self.read_from == DBTarget.FIRESTORE:
            return await self.firestore.get(id, current_user)
        return await self.mongo.get(id, current_user)

    async def create(self, data: CreateSchemaType, current_user: FirebaseUser, **kwargs) -> ModelType:
        document_id = str(PydanticObjectId())
        entity = None
        if self.write_to == DBTarget.BOTH or self.write_to == DBTarget.FIRESTORE:
            try:
                entity = await self.firestore.create(data, current_user, id=document_id)
                document_id = entity.id
            except Exception as e:
                logger.error(f"Error creating record in MongoDB: {e}")
        if self.write_to == DBTarget.BOTH or self.write_to == DBTarget.MONGO:
            try:
                entity = await self.mongo.create(data, current_user, id=document_id)
            except Exception as e:
                logger.error(f"Error creating record in Firestore: {e}")
        if entity is None:
            raise ValueError("Could not create record in either database.")
        return entity

    async def update(self, id: str, data: UpdateSchemaType, current_user: FirebaseUser) -> ModelType:
        entity = None
        if self.write_to == DBTarget.BOTH or self.write_to == DBTarget.FIRESTORE:
            try:
                entity = await self.firestore.update(id, data, current_user)
            except Exception as e:
                logger.error(f"Error creating record in Firestore: {e}")
        if self.write_to == DBTarget.BOTH or self.write_to == DBTarget.MONGO:
            try:
                entity = await self.mongo.update(id, data, current_user)
            except Exception as e:
                logger.error(f"Error creating record in MongoDB: {e}")
        if entity is None:
            raise ValueError("Could not update this record in either database.")
        return entity

    async def delete(self, id: str, current_user: FirebaseUser) -> None:
        if self.write_to == DBTarget.BOTH or self.write_to == DBTarget.FIRESTORE:
            try:
                await self.firestore.delete(id, current_user)
            except Exception as e:
                logger.error(f"Error deleting the record in Firestore: {e}")
        if self.write_to == DBTarget.BOTH or self.write_to == DBTarget.MONGO:
            try:
                await self.mongo.delete(id, current_user)
            except Exception as e:
                logger.error(f"Error deleting the record in MongoDB: {e}")


def get_dual_repository(model: type[ModelType], read_from: DBTarget, write_to: DBTarget) -> DualRepository[ModelType, CreateSchemaType, UpdateSchemaType]:
    firestore_repo = FirestoreRepository(model=model)
    mongo_repo = MongoRepository(model=model)
    return DualRepository(firestore_repo=firestore_repo, mongo_repo=mongo_repo, read_from=read_from, write_to=write_to)

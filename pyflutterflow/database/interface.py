from typing import Generic
from abc import ABC, abstractmethod
from fastapi_pagination import Page, Params
from pyflutterflow.database import ModelType, CreateSchemaType, UpdateSchemaType
from pyflutterflow.BaseModels import DBTarget
from pyflutterflow.auth import FirebaseUser
from pyflutterflow.logs import get_logger
from pyflutterflow import PyFlutterflow


logger = get_logger(__name__)


class BaseRepositoryInterface(ABC, Generic[ModelType, CreateSchemaType, UpdateSchemaType]):

    @abstractmethod
    async def list(self, params: Params, current_user: FirebaseUser) -> Page[ModelType]:
        pass

    async def list_all(self, params: Params, current_user: FirebaseUser, **kwargs) -> Page[ModelType]:
        pass

    @abstractmethod
    async def get(self, id: str, current_user: FirebaseUser) -> ModelType:
        pass

    @abstractmethod
    async def create(self, data: CreateSchemaType, current_user: FirebaseUser, **kwargs) -> ModelType:
        pass

    @abstractmethod
    async def update(self, id: str, data: UpdateSchemaType, current_user: FirebaseUser) -> ModelType:
        pass

    @abstractmethod
    async def delete(self, id: str, current_user: FirebaseUser) -> None:
        pass



def get_targets(collection_name):
    settings = PyFlutterflow().get_environment()
    target = settings.db_targets.get(collection_name)
    if target is None:
        target = {'read_from': 'firestore', 'write_to': 'firestore'}

    try:
        read_from = DBTarget(target.get('read_from', 'firestore'))
        if read_from not in [DBTarget.FIRESTORE, DBTarget.MONGO]:
            raise ValueError
    except ValueError:
        raise ValueError(f"The 'read_from' database target must be either '{DBTarget.FIRESTORE.value}' or '{DBTarget.MONGO.value}'")

    try:
        write_to = DBTarget(target.get('write_to', 'firestore'))
        if write_to not in [DBTarget.FIRESTORE, DBTarget.MONGO, DBTarget.BOTH]:
            raise ValueError(f"The 'write_to' database target must be one of '{DBTarget.FIRESTORE.value}', '{DBTarget.MONGO.value}', or '{DBTarget.BOTH.value}'")
    except ValueError:
        raise ValueError(f"The 'write_to' database target must be one of '{DBTarget.FIRESTORE.value}', '{DBTarget.MONGO.value}', or '{DBTarget.BOTH.value}'")

    return read_from, write_to

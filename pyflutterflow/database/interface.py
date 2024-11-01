from typing import Generic
from abc import ABC, abstractmethod
from fastapi_pagination import Page, Params
from pyflutterflow.database import ModelType, CreateSchemaType, UpdateSchemaType
from pyflutterflow.auth import FirebaseUser
from pyflutterflow.logs import get_logger
"""
DEPRECATED. This module is on hold and not in use. It references an interface between
Mongo and Firebase, which may be useful later but I have no time to keep
updated right now. It may be removed or renovated in the future.
"""



logger = get_logger(__name__)


class BaseRepositoryInterface(ABC, Generic[ModelType, CreateSchemaType, UpdateSchemaType]):

    @abstractmethod
    async def list_all(self, params: Params, current_user: FirebaseUser, **kwargs) -> Page[ModelType]:
        pass

    @abstractmethod
    async def get(self, pk: int | str, current_user: FirebaseUser, **kwargs) -> ModelType:
        pass

    @abstractmethod
    async def create(self, data: CreateSchemaType, current_user: FirebaseUser, **kwargs) -> ModelType:
        pass

    @abstractmethod
    async def update(self, pk: int | str, data: UpdateSchemaType, current_user: FirebaseUser) -> ModelType:
        pass

    @abstractmethod
    async def delete(self, pk: int | str, current_user: FirebaseUser) -> None:
        pass

    @abstractmethod
    async def restricted_delete(self, pk: int | str, current_user: FirebaseUser) -> None:
        pass

from typing import TypeVar
from ..BaseModels import AppBaseModel

ModelType = TypeVar('ModelType')
CreateSchemaType = TypeVar('CreateSchemaType', bound=AppBaseModel)
UpdateSchemaType = TypeVar('UpdateSchemaType', bound=AppBaseModel)

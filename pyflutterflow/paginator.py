from typing import Generic, Sequence, TypeVar, Optional
from math import ceil
from pydantic import BaseModel

T = TypeVar("T")

class Params(BaseModel):
    page: int = 0
    size: int = 40

class Page(BaseModel, Generic[T]):  # Inherit from BaseModel
    total: int
    items: Sequence[T]
    page: Optional[int] = None  # Set as optional with a default value
    size: Optional[int] = None  # Set as optional with a default value
    pages: Optional[int] = None  # Set as optional with a default value

    @classmethod
    def create(cls, items: Sequence[T], params: Params, total: Optional[int] = None):
        page = params.page
        size = params.size
        pages = ceil(total / size) if total else None
        return cls(total=total, items=items, page=page, size=size, pages=pages)

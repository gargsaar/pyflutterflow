from typing import Generic
from beanie import PydanticObjectId
from fastapi_pagination import Params, Page
from pyflutterflow.database.supabase.supabase_client import SupabaseClient
from pyflutterflow.database.interface import BaseRepositoryInterface
from pyflutterflow.database import ModelType, CreateSchemaType, UpdateSchemaType
from pyflutterflow.auth import FirebaseUser
from pyflutterflow.logs import get_logger
from pyflutterflow import constants

logger = get_logger(__name__)

class SupabaseRepository(
    BaseRepositoryInterface[ModelType, CreateSchemaType, UpdateSchemaType],
    Generic[ModelType, CreateSchemaType, UpdateSchemaType],
):
    def __init__(self, model: type[ModelType]):
        self.model = model
        if not hasattr(model, "Settings") or not getattr(model.Settings, "name", None):
            raise ValueError(
                "Model does not have a Settings class. Tables must be named within a Settings class in the model."
            )
        self.table_name = model.Settings.name

    async def list(self, params: Params, current_user: FirebaseUser) -> Page[ModelType]:
        """
        Retrieves a paginated list of records for the current user.

        Args:
            params (Params): Pagination parameters.
            current_user (FirebaseUser): The current authenticated user.

        Returns:
            Page[ModelType]: A paginated list of records.
        """
        db = await SupabaseClient.get_client()
        start = (params.page - 1) * params.size
        end = start + params.size - 1
        response = (
            await db.from_(self.table_name)
            .select("*")
            .eq("user_id", current_user.uid)
            .range(start, end)
            .execute()
        )
        if response.error:
            raise ValueError(response.error.message)
        total_response = (
            await db.from_(self.table_name)
            .select("id", count="exact")
            .eq("user_id", current_user.uid)
            .execute()
        )
        total = total_response.count or 0
        items = [self.model(**item) for item in response.data]
        return Page.create(items=items, total=total, params=params)

    async def list_all(
        self, params: Params, sort: str, current_user: FirebaseUser
    ) -> Page[ModelType]:
        """
        Retrieves a paginated and sorted list of all records for the current user.

        Args:
            params (Params): Pagination parameters.
            sort (str): Sorting parameter.
            current_user (FirebaseUser): The current authenticated user.

        Returns:
            Page[ModelType]: A paginated and sorted list of records.
        """
        db = await SupabaseClient.get_client()
        start = (params.page - 1) * params.size
        end = start + params.size - 1
        query = (
            db.from_(self.table_name)
            .select("*")
            .eq("user_id", current_user.uid)
            .range(start, end)
        )
        if sort:
            query = query.order(sort)
        response = await query.execute()
        if response.error:
            raise ValueError(response.error.message)
        total_response = (
            await db.from_(self.table_name)
            .select("id", count="exact")
            .eq("user_id", current_user.uid)
            .execute()
        )
        total = total_response.count or 0
        items = [self.model(**item) for item in response.data]
        return Page.create(items=items, total=total, params=params)

    async def get(self, id: str, current_user: FirebaseUser) -> ModelType:
        """
        Retrieves a single record by ID, ensuring it belongs to the current user.

        Args:
            id (str): The ID of the record.
            current_user (FirebaseUser): The current authenticated user.

        Returns:
            ModelType: The retrieved record.

        Raises:
            ValueError: If the record does not exist or the user lacks privileges.
        """
        db = await SupabaseClient.get_client()
        response = (
            await db.from_(self.table_name).select("*").eq("id", id).execute()
        )
        if response.error:
            raise ValueError(response.error.message)
        data = response.data
        if not data:
            raise ValueError("Record not found")
        record = data[0]
        if not record.get("user_id"):
            raise ValueError("Supabase record does not have a user_id field")
        if (record.get("user_id") != current_user.uid  and current_user.role != constants.ADMIN_ROLE):
            logger.warning(
                "An attempt was made to retrieve a Supabase record not owned by the current user. User: %s, Record ID: %s", current_user.uid, id
            )
            raise ValueError("Attempted to access a record without privileges.")
        return self.model(**record)

    async def create(
        self, data: CreateSchemaType, current_user: FirebaseUser, **kwargs
    ) -> ModelType:
        """
        Creates a new record with the current user's ID.

        Args:
            data (CreateSchemaType): The data to create the record.
            current_user (FirebaseUser): The current authenticated user.

        Returns:
            ModelType: The created record.
        """
        db = await SupabaseClient.get_client()
        data_dict = data.dict()
        data_dict["user_id"] = current_user.uid
        data_dict["id"] = kwargs.get("id", str(PydanticObjectId()))
        serialized_data = data.model_dump(mode='json')
        response = await db.from_(self.table_name).insert(serialized_data).execute()
        return self.model(**response.data[0])

    async def update(
        self, id: str, data: UpdateSchemaType, current_user: FirebaseUser
    ) -> ModelType:
        """
        Updates an existing record by ID.

        Args:
            id (str): The ID of the record to update.
            data (UpdateSchemaType): The updated data.
            current_user (FirebaseUser): The current authenticated user.

        Returns:
            ModelType: The updated record.
        """
        db = await SupabaseClient.get_client()
        data_dict = data.dict(exclude_unset=True)
        response = (
            await db.from_(self.table_name)
            .update(data_dict)
            .eq("id", id)
            .execute()
        )
        if response.error:
            raise ValueError(response.error.message)
        return self.model(**response.data[0])

    async def delete(self, id: str, current_user: FirebaseUser) -> None:
        """
        Deletes a record by ID.

        Args:
            id (str): The ID of the record to delete.
            current_user (FirebaseUser): The current authenticated user.
        """
        db = await SupabaseClient.get_client()
        response = (
            await db.from_(self.table_name).delete().eq("id", id).execute()
        )
        if response.error:
            raise ValueError(response.error.message)

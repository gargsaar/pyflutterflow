from typing import Generic
from cachetools import TTLCache
from fastapi_pagination import Params, Page
from pyflutterflow.database.supabase.supabase_client import SupabaseClient
from pyflutterflow.database.interface import BaseRepositoryInterface
from pyflutterflow.database import ModelType, CreateSchemaType, UpdateSchemaType
from pyflutterflow.auth import FirebaseUser

from pyflutterflow.logs import get_logger

logger = get_logger(__name__)

token_cache = TTLCache(maxsize=100, ttl=300)


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
        self.supabase = SupabaseClient()

    def paginator(self, params: Params):
        """Create pagination parameters for the query."""
        start = (params.page - 1) * params.size
        end = start + params.size - 1
        return start, end

    def get_token(self, user_id: str) -> dict:
        """Mint a JWT token for the user."""
        if user_id in token_cache:
            jwt_token = token_cache[user_id]
        else:
            jwt_token = self.supabase.generate_jwt(user_id)
            token_cache[user_id] = jwt_token

        return {
            'Authorization': f'Bearer {jwt_token}',
        }

    async def list(self, params: Params, current_user: FirebaseUser) -> Page[ModelType]:
        """
        Retrieves a paginated list of records for the current user.

        Args:
            params (Params): Pagination parameters.
            current_user (FirebaseUser): The current authenticated user.

        Returns:
            Page[ModelType]: A paginated list of records.
        """
        client = await self.supabase.get_client()
        pager = self.paginator(params)

        response = (
            await client.table(self.table_name)
            .select("*")
            .eq("user_id", current_user.uid)
            .range(*pager)
            .execute()
        )
        total_response = (
            await client.table(self.table_name)
            .select("id", count="exact")
            .eq("user_id", current_user.uid)
            .execute()
        )
        total = total_response.count or 0
        items = [self.model(**item) for item in response.data]
        return Page.create(items=items, total=total, params=params)

    async def build_paginated_query(self, params: Params, current_user: FirebaseUser, sql_query: str, auth: bool) -> Page[ModelType]:
        """Builds a query for the current user."""
        client = await self.supabase.get_client()

        # Build the query
        pager = self.paginator(params)
        query = (
            client.table(self.table_name)
            .select(sql_query, count="exact")
            .range(*pager)
        )

        # Set the auth header
        if auth:
            headers = self.get_token(current_user.uid)
            query.headers.update(headers)

        return query

    async def build_query(self, current_user: FirebaseUser, sql_query: str = '*', auth: bool = True, table=None) -> Page[ModelType]:
        """Builds a query for the current user."""
        client = await self.supabase.get_client()
        if not table:
            table = self.table_name
        query = client.table(table).select(sql_query)

        if auth:
            headers = self.get_token(current_user.uid)
            query.headers.update(headers)

        return query

    async def list_all(self, params: Params, current_user: FirebaseUser, **kwargs) -> Page[ModelType]:
        """
        Retrieves a paginated and sorted list of all records for the current user.

        Args:
            params (Params): Pagination parameters.
            sort (str): Sorting parameter.
            current_user (FirebaseUser): The current authenticated user.

        Returns:
            Page[ModelType]: A paginated and sorted list of records.
        """

        sql_query = kwargs.get('sql_query', '*')
        auth = kwargs.get('auth', True)
        query = await self.build_paginated_query(params, current_user, sql_query, auth)

        if kwargs.get("sort_by"):
            query = query.order(kwargs.get("sort_by"))

        response = await query.execute()

        items = [self.model(**item) for item in response.data]
        return Page.create(items=items, total=response.count, params=params)

    async def get(self, pk: int, current_user: FirebaseUser, auth=True) -> ModelType:
        """
        Retrieves a single record by ID, ensuring it belongs to the current user.

        Args:
            id (int): The ID of the record.
            current_user (FirebaseUser): The current authenticated user.

        Returns:
            ModelType: The retrieved record.

        Raises:
            ValueError: If the record does not exist or the user lacks privileges.
        """
        # Create the query
        client = await self.supabase.get_client()
        query = client.table(self.table_name).select("*").eq("id", pk)

        # Set the auth header
        if auth:
            headers = self.get_token(current_user.uid)
            query.headers.update(headers)

        response = await query.execute()
        record = response.data[0]
        return self.model(**record)

    async def create(self, data: CreateSchemaType, current_user: FirebaseUser, **kwargs) -> ModelType:
        """
        Creates a new record with the current user's ID.

        Args:
            data (CreateSchemaType): The data to create the record.
            current_user (FirebaseUser): The current authenticated user.

        Returns:
            ModelType: The created record.
        """
        client = await self.supabase.get_client()
        serialized_data = data.model_dump(mode='json')
        query = client.table(self.table_name).insert(serialized_data)

        response = await query.execute()
        if response.data and len(response.data) > 0:
            return self.model(**response.data[0])
        else:
            raise ValueError("Insert operation failed, no data returned.")

    async def update(self, pk: int, data: UpdateSchemaType, current_user: FirebaseUser) -> ModelType:
        """
        Updates an existing record by ID.

        Args:
            pk (int): The ID of the record to update.
            data (UpdateSchemaType): The updated data.
            current_user (FirebaseUser): The current authenticated user.

        Returns:
            ModelType: The updated record.
        """
        client = await self.supabase.get_client()
        serialized_data = data.model_dump(mode='json', exclude_none=True)
        query = client.table(self.table_name).update(serialized_data).eq("id", pk)
        await query.execute()

    async def delete(self, pk: int, current_user: FirebaseUser) -> None:
        """
        Deletes a record by ID.

        Args:
            pk (int): The ID of the record to delete.
            current_user (FirebaseUser): The current authenticated user.
        """
        client = await self.supabase.get_client()
        await client.table(self.table_name).delete().eq("id", pk).execute()

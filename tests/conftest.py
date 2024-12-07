import pytest
import pytest_asyncio
import asyncio
from functools import lru_cache
from fastapi import FastAPI
from httpx import AsyncClient
from pyflutterflow.auth import get_current_user, get_admin_user
from pyflutterflow.database.supabase.supabase_client import SupabaseClient
from pyflutterflow.logs import get_logger
from pyflutterflow.routes import router as pyff_router
from pyflutterflow import PyFlutterflow
from pydantic_settings import BaseSettings
from tests.fixtures.sample_users import admin, quill, rocket


class Settings(BaseSettings):
    environment: str = 'development'
    app_title: str = 'Pyflutterflow test suite'
    app_description: str = 'A test suite for the pyflutterflow package'
    log_level: str = 'INFO'
    slack_webhook_url: str | None = None
    cors_origin: str = 'http://localhost:3000'
    require_verified_email: bool = False
    server_location: str = 'Paris, France'
    supabase_url: str = "http://localhost:8000"
    supabase_anon_key: str = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE"
    supabase_secret_key: str = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJzZXJ2aWNlX3JvbGUiLAogICAgImlzcyI6ICJzdXBhYmFzZS1kZW1vIiwKICAgICJpYXQiOiAxNjQxNzY5MjAwLAogICAgImV4cCI6IDE3OTk1MzU2MDAKfQ.DaYlNEoUrrEn2Ig7tqibS-PHK5vgusbcbo7X36XVt4Q"
    supabase_jwt_secret: str = "your-super-secret-jwt-token-with-at-least-32-characters-long"

@lru_cache()
def get_settings():
    return Settings()

settings = get_settings()
logger = get_logger(__name__)
app = FastAPI()
app.include_router(pyff_router)
pyflutterflow = PyFlutterflow(settings)


@pytest.fixture(scope="session")
def event_loop():
    loop = asyncio.get_event_loop_policy().new_event_loop()
    yield loop
    loop.close()


@pytest_asyncio.fixture(loop_scope="function")
async def reset_db():
    supabase = SupabaseClient()
    if 'localhost' not in settings.supabase_url:
        pytest.exit("Refusing to reset the database for localhost. Are you connected to the right database?")
    client = await supabase.get_client()
    await client.table('users').delete().gt("id", 0).execute()
    await client.table('admin_items').delete().gt("id", 0).execute()
    await client.table('items').delete().gt("id", 0).execute()
    await createuser(quill)
    await createuser(rocket)
    await createuser(admin)


@pytest_asyncio.fixture(loop_scope="function")
async def async_client(reset_db):
    async with AsyncClient(app=app, base_url="http://localhost:8000") as async_client:
        yield async_client


async def createuser(user):
    supabase_client = await SupabaseClient().get_client()
    try:
        response =  await supabase_client.table('users').insert({
            "id": user.uid,
            "display_name": user.name,
            "email": user.email,
        }).execute()
        logger.info(f"Created user: {response.data}")
    except Exception as e:
        logger.warning(f"Exception while creating user: {e}")


@pytest_asyncio.fixture(scope="function")
async def login_as_quill():
    app.dependency_overrides[get_current_user] = lambda: quill
    yield
    app.dependency_overrides.clear()


@pytest_asyncio.fixture(scope="function")
async def login_as_rocket():
    app.dependency_overrides[get_current_user] = lambda: rocket
    yield
    app.dependency_overrides.clear()


@pytest_asyncio.fixture(scope="function")
async def login_as_admin():
    app.dependency_overrides[get_current_user] = lambda: admin
    app.dependency_overrides[get_admin_user] = lambda: admin
    yield
    app.dependency_overrides.clear()

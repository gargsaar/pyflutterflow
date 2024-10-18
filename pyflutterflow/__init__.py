import importlib.resources as resources
from pydantic_settings import BaseSettings
from fastapi.staticfiles import StaticFiles

env_vars = None


def get_environment(settings_data: BaseSettings | None = None):
    global env_vars
    if settings_data:
        env_vars = settings_data
    return env_vars


def init_pyflutterflow(settings):
    get_environment(settings)
    with resources.path("pyflutterflow.dashboard", "dist") as static_path:
        return "/dashboard", StaticFiles(directory=str(static_path), html=True), "vue_app"

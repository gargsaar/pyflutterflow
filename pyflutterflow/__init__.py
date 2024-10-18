import importlib.resources as resources
from pydantic_settings import BaseSettings
from fastapi.staticfiles import StaticFiles


def init_pyflutterflow():
    with resources.path("pyflutterflow.dashboard", "dist") as static_path:
        return "/dashboard", StaticFiles(directory=str(static_path), html=True), "vue_app"


settingsff = None

def get_settingsff(settings_data: BaseSettings | None = None):
    global settingsff
    if settings_data:
        settingsff = settings_data
    return settingsff

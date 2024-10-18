from pydantic_settings import BaseSettings
from fastapi.staticfiles import StaticFiles
from pyflutterflow.logs import get_logger


def init_pyflutterflow():
    return "/static", StaticFiles(directory="/home/jokea/KealyStudio/pyflutterflow/pyflutterflow/dashboard/dist", html=True), "vue_app"


settingsff = None

def get_settingsff(settings_data: BaseSettings | None = None):
    global settingsff
    if settings_data:
        settingsff = settings_data
    return settingsff

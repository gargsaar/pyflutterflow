import importlib.resources as resources
from pydantic_settings import BaseSettings
from fastapi.staticfiles import StaticFiles


class PyFlutterFlow:

    _instance = None

    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super(PyFlutterFlow, cls).__new__(cls)
        return cls._instance

    def __init__(self, settings: BaseSettings | None = None):
        if settings:
            self.settings = settings

    def get_environment(self):
        if not hasattr(self, 'settings'):
            raise ValueError("The Pyflutterflow environment was not initialized. Be sure to initialize Pyflutterflow(settings) in each service.")
        return self.settings

    def init_dashboard(self):
        with resources.path("pyflutterflow.dashboard", "dist") as static_path:
            return "/dashboard", StaticFiles(directory=str(static_path), html=True), "vue_app"

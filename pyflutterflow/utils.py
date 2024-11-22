import requests
from pyflutterflow.logs import get_logger
from pyflutterflow import PyFlutterflow

logger = get_logger(__name__)


def trigger_slack_webhook(message: str):
    settings = PyFlutterflow().get_settings()
    if settings.slack_webhook_url:
        text = f"[{settings.app_title}] Uncaught Exception: {message}"
        requests.post(settings.slack_webhook_url, json={"text": text}, timeout=5, headers={'Content-Type': 'application/json'})

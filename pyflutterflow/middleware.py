from fastapi import Request, status
from fastapi.exceptions import RequestValidationError
from starlette.responses import JSONResponse
from pyflutterflow.logs import get_logger
from pyflutterflow.utils import trigger_slack_webhook

logger = get_logger(__name__)


async def handle_uncaught_exceptions(request: Request, call_next: callable):
    """Send a message to Slack when an uncaught exception occurs"""
    try:
        response = await call_next(request)
    except Exception as e:
        logger.exception(str(e))
        trigger_slack_webhook(e)
        response = JSONResponse(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, content={"detail": str(e)})
    return response


async def handle_validation_error(request: Request, exc: RequestValidationError):
    """Exception handler to get more information about 422 errors. Not technically invoked as middleware, but acts as such."""
    exc_str = f'{exc}'.replace('\n', ' ').replace('   ', ' ')
    logger.error(f"{request}: {exc_str}")
    content = {'status_code': 422, 'message': exc_str, 'data': None}
    return JSONResponse(content=content, status_code=422)

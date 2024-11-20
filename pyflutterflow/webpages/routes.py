import importlib.resources as resources
from fastapi import APIRouter, Request, status
from fastapi.templating import Jinja2Templates
from pyflutterflow.logs import get_logger
from pyflutterflow.database.supabase.supabase_functions import get_request
from pyflutterflow.constants import TERMS_AND_CONDITIONS_ROW_ID, PRIVACY_POLICY_ROW_ID, COMPLIANCE_TABLE

templates_dir = resources.files("pyflutterflow") / "webpages/templates"
templates = Jinja2Templates(directory=str(templates_dir))

logger = get_logger(__name__)

webpages_router = APIRouter(
    prefix='/webpages',
    tags=['Webpages'],
)

@webpages_router.get('/terms-and-conditions', status_code=status.HTTP_200_OK)
async def get_terms_and_conditions(request: Request):
    data = await get_request(COMPLIANCE_TABLE, eq=('id', TERMS_AND_CONDITIONS_ROW_ID))
    if len(data) != 1:
        raise ValueError("Terms and conditions not found or wrong number of rows returned")
    return templates.TemplateResponse(
        request=request,
        name="layout.html",
        context={"html_content": data[0].get('html')},
    )

@webpages_router.get('/privacy-policy', status_code=status.HTTP_200_OK)
async def get_privacy_policy(request: Request):
    data = await get_request(COMPLIANCE_TABLE, eq=('id', PRIVACY_POLICY_ROW_ID))
    if len(data) != 1:
        raise ValueError("Privacy policy not found or wrong number of rows returned")
    return templates.TemplateResponse(
        request=request,
        name="layout.html",
        context={"html_content": data[0].get('html')},
    )


@webpages_router.get('/data-removal-request', status_code=status.HTTP_200_OK)
async def get_data_deletion_request_form(request: Request):
    return templates.TemplateResponse(
        request=request,
        name="data_deletion_request_form.html",
    )


@webpages_router.post('/data-removal-request', status_code=status.HTTP_200_OK)
async def get_data_deletion_request_submit(request: Request):

    # TODO do something with this. We'll want a database entry and an email send to the admin

    form_data = await request.form()
    html = f"""
        <p>Dear Admin,</p>
        <p>A user has requested to delete their data. Please take the necessary steps to delete their data.</p>
        <p>Details:</p>
        <p>Name: {form_data.get('name')}</p>
        <p>Email: {form_data.get('email')}</p>
        <br>
        <p>This is an automated email.</p>
    """
    logger.warning("Data deletion request submitted, but email are deactivated.")
    # await ResendService().send_email(settings.admin_emails, 'Data deletion request', html)
    return templates.TemplateResponse(
        request=request, name="data_deletion_request_submitted.html"
    )

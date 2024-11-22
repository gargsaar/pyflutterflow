import importlib.resources as resources
from fastapi import APIRouter, Request, status
from fastapi.templating import Jinja2Templates
from pyflutterflow.logs import get_logger
from pyflutterflow.database.supabase.supabase_functions import get_request
from pyflutterflow.constants import TERMS_AND_CONDITIONS_ROW_ID, PRIVACY_POLICY_ROW_ID, COMPLIANCE_TABLE
from pyflutterflow.services.email_service import ResendService

templates_dir = resources.files("pyflutterflow") / "webpages/templates"
templates = Jinja2Templates(directory=str(templates_dir))

logger = get_logger(__name__)

webpages_router = APIRouter(
    prefix='/webpages',
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

    # TODO this will send an email if resend is set up, but we still need to add a database entry.

    form_data = await request.form()
    html = f"""
        <p>Dear Admin,</p>
        <p>A user has requested to delete their data. Please take the necessary steps to delete their data.</p>
        <p>Details:</p>
        <p>Name: {form_data.get('name')}</p>
        <p>Email: {form_data.get('email')}</p>
        <br>
        <p>Message:</p>
        <p>{form_data.get('message')}</p>
        <br>

        <p>This is an automated email.</p>
    """
    logger.warning("Data deletion request submitted, but email are deactivated.")
    resend_service = ResendService()
    await resend_service.send_email_to_admins(
        subject='Data deletion request',
        html=html
    )
    return templates.TemplateResponse(
        request=request, name="data_deletion_request_submitted.html"
    )

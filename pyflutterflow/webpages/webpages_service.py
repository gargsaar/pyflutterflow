from fastapi import Request
from fastapi.templating import Jinja2Templates
from pyflutterflow.database.supabase.supabase_functions import get_request
from pyflutterflow.constants import TERMS_AND_CONDITIONS_ROW_ID, PRIVACY_POLICY_ROW_ID

templates = Jinja2Templates(directory="pyflutterflow/webpages/templates")


async def data_deletion_request_form(request: Request):
    return templates.TemplateResponse(
        request=request,
        name="data_deletion_request_form.html",
    )

async def data_deletion_request_submit(request: Request):
    form_data = request.form()
    html = f"""
        <p>Dear Admin,</p>
        <p>A user has requested to delete their data. Please take the necessary steps to delete their data.</p>
        <p>Details:</p>
        <p>Name: {form_data.get('name')}</p>
        <p>Email: {form_data.get('email')}</p>
        <br>
        <p>This is an automated email.</p>
    """
    # await ResendService().send_email(settings.admin_emails, 'Data deletion request', html)
    return templates.TemplateResponse(
        request=request, name="data_deletion_request_submitted.html"
    )

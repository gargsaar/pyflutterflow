import resend
from pyflutterflow.logs import get_logger
from pyflutterflow.database.supabase.supabase_functions import get_request
from pyflutterflow import PyFlutterflow

logger = get_logger(__name__)


class ResendService:

    def __init__(self):
        self.settings = PyFlutterflow().get_settings()
        resend.api_key = self.settings.resend_api_key
        self.params = resend.Emails.SendParams()

    def can_send_email(self, user: dict) -> bool:
        if self.settings.disable_email:
            return False
        if getattr(user, 'emails_enabled') and user.emails_enabled is False:
            logger.info("Email notifications are off for %s. Not sending booking email.", user.id)
            return False
        return True

    async def send_email_to_recipients(self) -> dict:
        member = await get_request(self.settings.users_table, eq=('is_admin', True))
        if not self.can_send_email(member):
            return
        logger.info("Sending booking request email to admins")
        if self.params.to and self.params['from'] and self.params.subject and self.params.html:
            response = resend.Emails.send(self.params)
            logger.info("Email sent: %s", response)
            return response
        logger.error("Email not sent. Missing parameters: %s", self.params)

    async def send_email_to_admins(self, subject: str, html: str) -> dict:
        admins = await get_request(self.settings.users_table, eq=('is_admin', True))
        admin_emails = [admin.get('email') for admin in admins]
        logger.info("Sending email to admins...")
        self.params['to'] = admin_emails
        self.params['from'] =  f"{self.settings.from_name } <{self.settings.from_email}>"
        self.params['subject'] = subject
        self.params['html'] = html
        if not self.params['to']:
            raise ValueError("No admins found")
        if self.params['to'] and self.params['from'] and self.params['subject']  and self.params['html']:
            response = resend.Emails.send(self.params)
            logger.info("Email sent: %s", response)
            return response
        logger.error("Email not sent to admins. Missing parameters: %s", self.params)

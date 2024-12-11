import resend
from pyflutterflow.logs import get_logger
from pyflutterflow.database.firestore.firestore_functions import get_admins
from pyflutterflow import PyFlutterflow
from pyflutterflow.utils import trigger_slack_webhook
from pyflutterflow.services.email.email_templates import welcome_email_template

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
        raise NotImplementedError

    async def send_welcome_email(self, recipient: dict) -> dict:
        logger.info("Sending welcome recipient_email to %s...",  recipient.get('email'))
        self.params['to'] = recipient.get('email')
        self.params['from'] = f"{self.settings.from_name } <{self.settings.from_email}>"
        self.params['subject'] = f'Welcome to {self.settings.app_title}'
        self.params['html'] = welcome_email_template(recipient, self.settings)
        if self.params['to'] and self.params['from'] and self.params['subject'] and self.params['html']:
            response = resend.Emails.send(self.params)
            logger.info("The welcome email has been sent to: %s",  recipient.get('email'))
            return response
        logger.error("Email not sent. Missing parameters: %s", self.params)

    async def send_email_to_admins(self, subject: str, html: str) -> dict:
        admins = await get_admins()
        admin_emails = [admin.email for admin in admins]
        logger.info("Sending email to admins...")
        self.params['to'] = admin_emails
        self.params['from'] =  f"{self.settings.from_name } <{self.settings.from_email}>"
        self.params['subject'] = subject
        self.params['html'] = html
        if not self.params['to']:
            trigger_slack_webhook("in send_email_to_admins: No admins found")
            raise ValueError("No admins found")
        if self.params['to'] and self.params['from'] and self.params['subject']  and self.params['html']:
            response = resend.Emails.send(self.params)
            logger.info("An email was sent to the admins: %s", admin_emails)
            return response
        logger.error("Email not sent to admins. Missing parameters: %s", self.params)

from datetime import date
from pydantic_settings import BaseSettings

def welcome_email_template(recipient, settings: BaseSettings, verification_link) -> str:

    verify_button = f"""
    <a href="{verification_link}" target="_blank">
        <div class="button">
            <p>Verify your email address</p>
        </div>
    </a>
    """

    return f"""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Our App</title>
    <style>
        body {{
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }}
        .container {{
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
        }}
        .header {{
            background-color: #3498db;
            color: #ffffff;
            padding: 20px;
            text-align: center;
        }}
        .content {{
            padding: 20px;
            background-color: #ffffff;
        }}
        .footer {{
            background-color: #34495e;
            color: #ffffff;
            padding: 10px 20px;
            text-align: center;
            font-size: 12px;
        }}
        .button {{
            display: inline-block;
            padding: 10px 20px;
            background-color: #2ecc71;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
        }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Welcome to {settings.app_title}!</h1>
        </div>
        <div class="content">
            <p>Hi {recipient.name},</p>
            <p>Thank you for registering with {settings.app_title}. We're excited to have you on board!</p>
                {verify_button if not recipient.email_verified else ''}
            <p>If you have any questions or need assistance, please don't hesitate to reach out to our support team.</p>
        </div>
        <div class="footer">
            <p>&copy; {date.today().year} {settings.app_title}. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
    """

import requests
from pyflutterflow.logs import get_logger
from pyflutterflow import PyFlutterflow

logger = get_logger(__name__)


def trigger_slack_webhook(message: str):
    settings = PyFlutterflow().get_settings()
    if settings.slack_webhook_url:
        text = f"[{settings.app_title}] Uncaught Exception: {message}"
        requests.post(settings.slack_webhook_url, json={"text": text}, timeout=5, headers={'Content-Type': 'application/json'})


def init_pyflutterflow():
    message = """

    Pyflutterflow requires some tables to be set up in Supabase to function correctly.
    Below is some SQL code that you can run in the Supabase SQL editor to create the
    necessary tables for the Privacy Policy and Terms & Conditions pages.
    Once created, you can edit these from the dashboard at http://<YOUR API URL>:<PORT>/dashboard


    Simply copy and paste the code below into the Supabase SQL editor and run it.

    #####################  COPY EVERYTHING BELOW THIS LINE ###########################


    -- Create the table if it doesn't exist
    CREATE TABLE IF NOT EXISTS app_compliance (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        html TEXT NOT NULL
        CONSTRAINT app_compliance_pkey primary key (id)
    );

    -- Enable RLS
    ALTER TABLE app_compliance ENABLE ROW LEVEL SECURITY;

    -- Create a policy to allow users to see compliance pages
    CREATE POLICY "users can see compliance"
    ON "public"."app_compliance"
    FOR SELECT
    TO public
    using (
        true
    );

    -- Insert the terms and conditions
    INSERT INTO app_compliance (id, name, html)
    VALUES ('terms-and-conditions', 'Terms and Conditions', '<p>This is the terms and conditions page.</p>');

    -- Insert the privacy policy
    INSERT INTO app_compliance (id, name, html)
    VALUES ('privacy-policy', 'Privacy Policy', '<p>This is the privacy policy page.</p>');


    -- Create the users table
    CREATE TABLE IF NOT EXISTS public.users (
        id TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
        email TEXT NULL,
        display_name TEXT NULL,
        photo_url TEXT NULL,
        is_admin BOOLEAN not NULL DEFAULT false,
        CONSTRAINT users_pkey PRIMARY KEY (id)
    );

    -- Enable RLS for users
    ALTER TABLE users ENABLE ROW LEVEL SECURITY;






    """
    print(message)

from fastapi import Depends
from pyflutterflow.auth import get_current_user, FirebaseUser
from pyflutterflow.database.supabase.supabase_functions import get_request

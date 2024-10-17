import os
from pydantic import BaseModel
from fastapi import HTTPException, Depends
from fastapi import status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from firebase_admin.auth import ExpiredIdTokenError
from firebase_admin import auth
import constants
from .logs import get_logger

logger = get_logger(__name__)
security = HTTPBearer()

DEFAULT_USER_AVATAR_URL = os.getenv("LOG_LEVEL", "INFO").upper()
REQUIRE_VERIFIED_EMAIL = os.getenv("REQUIRE_VERIFIED_EMAIL") or False


class FirebaseUser(BaseModel):
    uid: str
    role: str
    email_verified: bool
    email: str
    picture: str = os.getenv("DEFAULT_USER_AVATAR_URL", "")
    name: str = ''
    auth_time: int
    iat: int
    exp: int
    role: str = "user"


class FirebaseUserClaims(BaseModel):
    uid: str
    role: str


async def get_admin_user(token: HTTPAuthorizationCredentials = Depends(security)) -> FirebaseUser:
    """Verify the JWT token, check for the admin service role, and then return the user object."""
    current_user = await get_current_user(token)
    if current_user.role == constants.ADMIN_ROLE:
        return current_user
    raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="You are not an admin.")


async def get_current_user(token: HTTPAuthorizationCredentials = Depends(security)) -> FirebaseUser:
    """Verify the JWT token and return the user object."""
    try:
        decoded_token = auth.verify_id_token(token.credentials)
        if REQUIRE_VERIFIED_EMAIL and not decoded_token.get("email_verified"):
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Email not verified")
        user = FirebaseUser(**decoded_token)
        return user
    except ExpiredIdTokenError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Auth token has expired")
    except Exception as e:
        logger.error("Error encountered during JWT token verification: %s", e)
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=str(e))


async def set_user_role(user_claim: FirebaseUserClaims, user: FirebaseUser = Depends(get_admin_user)) -> None:
    """Update the service role permissions on the desired firebase user account. Take care: this action can create an admin."""
    if user.role != constants.ADMIN_ROLE:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="User does not have permission to set user role.")

    try:
        logger.info("Setting user role: %s for user: %s", user_claim.role, user_claim.uid)
        auth.set_custom_user_claims(user_claim.uid, {'role': user_claim.role})
    except Exception as e:
        logger.error("Error encountered during setting user role: %s", e)
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail='Error encountered while setting user role.')


async def generate_firebase_verify_link(email: str) -> str:
    return auth.generate_email_verification_link(email)

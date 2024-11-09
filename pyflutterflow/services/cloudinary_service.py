from pathlib import Path
from pydantic import BaseModel
import cloudinary
import cloudinary.api
from cloudinary.exceptions import Error
from cloudinary.uploader import upload as cloudinary_upload
from cloudinary.utils import cloudinary_url
from fastapi import HTTPException, status
from pyflutterflow.logs import get_logger
from pyflutterflow import PyFlutterflow

logger = get_logger(__name__)



class Media(BaseModel):
    public_url: str
    public_id: str | None = None
    thumbnail_url: str | None = None


class Image(Media):
    public_id: str | None = None
    display_url: str | None = None
    media_type: str = 'image'


class Video(Media):
    public_id: str
    hls_playback_url: str
    thumbnail_url: str
    created_at: str
    media_type: str = 'video'


class CloudinaryService:

    def __init__(self, file):
        self.file = file
        self.settings = PyFlutterflow().get_environment()
        cloudinary.config(
            cloud_name = self.settings.cloudinary_cloud_name,
            api_key = self.settings.cloudinary_api_key,
            api_secret = self.settings.cloudinary_api_secret,
            secure = True
        )

    async def upload_to_cloudinary(self) -> None:
        try:
            return self._upload_image()
        except Error:
            try:
                return self._upload_video()
            except Exception as e:
                logger.error("Unable to upload media: %s", e)
                raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f"There was a problem uploading the media: {e}")
        except Exception as e:
            logger.error("Unable to upload media: %s", e)
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="There was a problem uploading the media: {e}")

    def _upload_image(self) -> None:
        response = cloudinary_upload(self.file, folder=self.settings.cloudinary_folder)
        if not response.get('public_id'):
            logger.error("Unable to upload user image: %s", str(response))
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Unable to upload image (no public id)")
        public_id = response.get('public_id')
        url, _ = cloudinary_url(public_id)
        return Image(
            media_type='image',
            public_id=public_id,
            public_url=url,
            display_url=self._get_display_url(public_id),
            thumbnail_url=self._get_thumbnail_url(public_id)
        )

    def _upload_video(self) -> None:
        if hasattr(self.file, 'seek'):
            self.file.seek(0)
        response = cloudinary_upload(self.file, resource_type='video', folder=self.settings.cloudinary_folder)
        if not response.get('public_id'):
            logger.error("Unable to upload user image: %s", str(response))
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Unable to upload video (no public id)")
        url = response.get('secure_url')
        return Video(
            media_type='video',
            public_id=response.get('public_id'),
            public_url=url.replace('/video/upload/', '/video/upload/e_volume:mute/'),
            hls_playback_url=response.get('playback_url').replace('/video/upload/', '/video/upload/e_volume:mute/'),
            created_at=response.get('created_at'),
            thumbnail_url=self._get_video_thumbnail(url)
        )

    def _get_video_thumbnail(self, url) -> str:
        path = Path(url)
        return str(path.with_suffix('.jpg'))

    def _get_display_url(self, public_id) -> str:
        url, _ = cloudinary_url(public_id, gravity="center", width=900, crop="scale")
        return url

    def _get_thumbnail_url(self, public_id) -> str:
        url, _ = cloudinary_url(public_id, gravity="center", height=350, width=350, crop="thumb")
        return url

import json
from pydantic import BaseModel


class DeepLink(BaseModel):
    ff_page: str
    deep_link_parameter_name: str | None = None
    destination_id: str | int | None = None

    @property
    def ff_route(self) -> dict | None:
        if self.ff_page and self.deep_link_parameter_name and self.destination_id:
            return {
                "initialPageName": self.ff_page,
                "parameterData": json.dumps({
                    self.deep_link_parameter_name: self.destination_id
                })
             }
        elif self.ff_page:
            return {
                "initialPageName": self.ff_page
            }


class UserNotificationsRequest(BaseModel):
    recipient_ids: list[str] | str
    title: str
    body: str
    deeplink_page_name: str | None = None
    deep_link_parameter_name: str | None = None
    destination_id: str | int | None = None


class Notification(BaseModel):
    title: str
    body: str
    image_url: str | None = None
    deep_link: DeepLink | None = None

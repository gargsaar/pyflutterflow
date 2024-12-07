from tests.fixtures.sample_users import rocket, quill
from pyflutterflow.services.cloudinary_service import Image


async def test_any_user_can_see_all_users(async_client, login_as_rocket):
    response = await async_client.get(f"/supabase/rest/v1/users?order=display_name.desc")
    assert response.status_code == 200
    assert len(response.json()) == 3
    assert response.json()[0]['display_name'] == rocket.name


async def test_any_user_can_get_user_by_id(async_client, login_as_rocket):
    response = await async_client.get(f"/supabase/rest/v1/users?id=eq.{rocket.uid}", headers={"Accept": "application/vnd.pgrst.object+json"})
    assert response.status_code == 200
    assert response.json()['display_name'] == rocket.name

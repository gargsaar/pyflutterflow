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


async def test_user_can_update_their_own_data(async_client, login_as_rocket):
    response = await async_client.patch(
        f"/supabase/rest/v1/users?id=eq.{rocket.uid}",
        json={"display_name": "Rikky"},
        headers={"Prefer": "return=representation", "Accept": "application/vnd.pgrst.object+json"}
    )
    assert response.status_code == 200
    assert response.json()['display_name'] == "Rikky"


async def test_user_can_delete_themself(async_client, login_as_rocket):
    response = await async_client.delete(f"/supabase/rest/v1/users?id=eq.{rocket.uid}")
    assert response.status_code == 204
    response = await async_client.get(f"/supabase/rest/v1/users?id=eq.{rocket.uid}")
    assert response.status_code == 200
    assert len(response.json()) == 0


async def test_user_cannot_update_another_user(async_client, login_as_rocket):
    response = await async_client.patch(
        f"/supabase/rest/v1/users?id=eq.{quill.uid}",
        json={"display_name": "Quillicaky"}
    )
    assert response.status_code == 204
    response = await async_client.get(f"/supabase/rest/v1/users?id=eq.{quill.uid}", headers = {"Accept": "application/vnd.pgrst.object+json"})
    assert response.json()['display_name'] == quill.name


async def test_user_cannot_delete_another_user(async_client, login_as_rocket):
    response = await async_client.delete(f"/supabase/rest/v1/users?id=eq.{quill.uid}")
    assert response.status_code == 204
    response = await async_client.get(f"/supabase/rest/v1/users?id=eq.{quill.uid}")
    assert response.status_code == 200
    assert len(response.json()) == 1

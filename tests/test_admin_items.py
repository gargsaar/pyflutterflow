import pytest
from tests.fixtures.sample_users import rocket, admin


@pytest.fixture(scope="function")
async def create_admin_item(async_client, login_as_admin):
    response = await async_client.post(f"/supabase/rest/v1/admin_items", json={
        "name": "test_admin_item",
    }, headers={"Prefer": "return=representation", "Accept": "application/vnd.pgrst.object+json"})
    assert response.status_code == 201
    assert response.json()['name'] == "test_admin_item"
    return response


async def test_admin_can_see_all_adminitems(async_client, create_admin_item):
    response = await async_client.get(f"/supabase/rest/v1/admin_items?order=name.desc")
    assert response.status_code == 200
    assert response.json()[0]['name'] == 'test_admin_item'


async def test_admin_can_get_adminitem_by_id(async_client, create_admin_item):
    response = await async_client.get(
        f"/supabase/rest/v1/admin_items?id=eq.{create_admin_item.json()['id']}",
        headers={"Accept": "application/vnd.pgrst.object+json"}
    )
    assert response.status_code == 200
    assert response.json()['name'] == 'test_admin_item'


async def test_admin_can_update_adminitem(async_client, create_admin_item):
    response = await async_client.patch(
        f"/supabase/rest/v1/admin_items?id=eq.{create_admin_item.json()['id']}",
        json={"name": "test_admin_item_updated"},
        headers={"Prefer": "return=representation", "Accept": "application/vnd.pgrst.object+json"}
    )
    assert response.status_code == 200
    assert response.json()['name'] == 'test_admin_item_updated'


async def test_admin_can_delete_adminitem(async_client, create_admin_item):
    response = await async_client.delete(
        f"/supabase/rest/v1/admin_items?id=eq.{create_admin_item.json()['id']}"
    )
    assert response.status_code == 204
    response = await async_client.get(
        f"/supabase/rest/v1/admin_items?id=eq.{create_admin_item.json()['id']}"
    )
    assert response.status_code == 200


async def test_user_can_view_admin_items(async_client, create_admin_item, login_as_rocket):
    response = await async_client.get(f"/supabase/rest/v1/admin_items")
    assert response.status_code == 200
    assert len(response.json()) == 1


async def test_user_cannot_update_admin_items(async_client, create_admin_item, login_as_rocket):
    response = await async_client.patch(
        f"/supabase/rest/v1/admin_items?id=eq.{create_admin_item.json()['id']}",
        json={"name": "test_admin_item_updated"},
    )
    assert response.status_code == 204
    response = await async_client.get(
        f"/supabase/rest/v1/admin_items?id=eq.{create_admin_item.json()['id']}",
        headers={"Accept": "application/vnd.pgrst.object+json"}
    )
    assert response.json()['name'] == 'test_admin_item'


async def test_user_cannot_delete_admin_items(async_client, create_admin_item, login_as_rocket):
    response = await async_client.delete(
        f"/supabase/rest/v1/admin_items?id=eq.{create_admin_item.json()['id']}"
    )
    assert response.status_code == 204
    response = await async_client.get(
        f"/supabase/rest/v1/admin_items?id=eq.{create_admin_item.json()['id']}"
    )
    assert response.status_code == 200
    assert len(response.json()) == 1

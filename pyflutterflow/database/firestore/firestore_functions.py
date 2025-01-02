from pyflutterflow.database.firestore.firestore_client import FirestoreClient


async def get_admins():
    from pyflutterflow.auth import FirestoreUser
    firestore_client = FirestoreClient.get_client()
    users = firestore_client.collection('users')
    admins_query = users.where('is_admin', '==', True)
    return [FirestoreUser(**admin.to_dict()) async for admin in admins_query.stream()]

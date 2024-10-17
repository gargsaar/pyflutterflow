from fastapi.staticfiles import StaticFiles


def init_admin():
    return "/", StaticFiles(directory="pyflutterflow/dashboard/dist", html=True), "vue_app"

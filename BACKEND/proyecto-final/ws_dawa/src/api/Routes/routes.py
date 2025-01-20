from ..Services.login_service import LoginService
from ..Services.posts_service import PostsService
from ..Services.user_service import UserService
from ..Services.comment_service import CommentService
from ..Services.message_service import MessageService
from ..Services.notification_service import NotificationService
from ..Services.register_service import RegisterService

def load_routes(api):
    #metodo para el login
    api.add_resource(LoginService, '/security/login')
    #metodo para listar los usuarios
    api.add_resource(UserService, '/user/list')
    #metodo para listar los posts
    api.add_resource(PostsService, '/posts/list')
    # metodo para listar los comentarios
    api.add_resource(CommentService, '/comment/list')
    # metodo para listar los mensajes
    api.add_resource(MessageService, '/message/list')
    # metodo para listar notificaciones
    api.add_resource(NotificationService, '/notification/list')
    # metodo para registrar usuarios
    api.add_resource(RegisterService, '/register/user')



from flask_restful import Resource

from ..Components.user_component import UserComponent
from ...utils.general.logs import HandleLogs
from ...utils.general.response import response_error, response_success, response_not_found
from ..Components.jwt_component import JwtComponent
from flask import request
class UserService(Resource):
    @staticmethod
    def get():
        try:
            HandleLogs.write_log("Ejecutando servicio de Listar Usuario")
            #Validar el Tokend de seguridad
            token = request.headers['tokenapp']
            if not JwtComponent.TokenValidate(token):
                return response_error("Token de autenticación NO válido")

            resultado = UserComponent.getAllUsers()
            if resultado['result']:
                if resultado['data'].__len__() > 0:
                    return response_success(resultado['data'])
                else:
                    return response_not_found()
            else:
                return response_error(resultado['message'])

        except Exception as err:
            HandleLogs.write_error(err)
            return response_error("Error en el método: " + err.__str__())

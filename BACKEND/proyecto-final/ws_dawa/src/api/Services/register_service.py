from flask_restful import Resource
from flask import request

from ..Components.register_component import RegisterComponent
from ..Model.Request.register_request import RegisterRequest
from ...utils.general.logs import HandleLogs
from ...utils.general.response import response_error, response_success

class RegisterService(Resource):
    @staticmethod
    def post():
        try:
            HandleLogs.write_log("Ejecutando servicio de Registro")
            # Obtener el request
            rq_json = request.get_json()
            # Validar ese request sea compatible con el modelo
            new_request = RegisterRequest()
            error_en_validacion = new_request.validate(rq_json)
            if error_en_validacion:
                HandleLogs.write_error("Error al validar el request -> " + str(error_en_validacion))
                return response_error("Error al validar el request -> " + str(error_en_validacion))

            resultado = RegisterComponent.Register(rq_json['register_user'], rq_json['register_mail'], rq_json['register_password'])
            if resultado['result']:
                return response_success(resultado['message'])
            else:
                return response_error(resultado['message'])

        except Exception as err:
            HandleLogs.write_error(err)
            return response_error("Error en el método: " + err.__str__())
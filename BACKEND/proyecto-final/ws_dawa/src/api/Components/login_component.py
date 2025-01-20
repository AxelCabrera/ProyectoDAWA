from ...utils.database.connection_db import DataBaseHandle
from ...utils.general.logs import HandleLogs
from ...utils.general.response import internal_response
from ..Components.jwt_component import JwtComponent


class LoginComponent:

    @staticmethod
    def Login(p_user, p_clave):
        try:
            result = False
            data = None
            message = None
            sql = "SELECT count(*) as valor FROM dawa.users WHERE email = %s AND password = %s"
            record = (p_user, p_clave)

            resul_login = DataBaseHandle.getRecords(sql,1, record)
            if resul_login['result']:
                if resul_login['data']['valor'] > 0:
                    token = JwtComponent.TokenGenerate(p_user)
                    if token is not None:
                        result = True
                        message = 'Login exitoso'
                        data = token
                    else:
                        message = 'Error al generar token de seguridad'
                else:
                    message = 'Login inválido'
            else:
                message = resul_login['message']

        except Exception as err:
            HandleLogs.write_error(err)
            message = 'Error en el login ' + err.__str__()
        finally:
            return internal_response(result, data, message)

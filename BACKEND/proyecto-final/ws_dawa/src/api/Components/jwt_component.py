from ...utils.general.config import Parametros
from ...utils.general.logs import HandleLogs
from datetime import datetime, timedelta
import pytz
import jwt

class JwtComponent:
    @staticmethod
    def TokenGenerate(p_user):
        try:
            respuesta = None
            timezone = pytz.timezone('America/Guayaquil')
            payload = {
                'iat': datetime.now(tz=timezone),
                'exp': datetime.now(tz=timezone) + timedelta(minutes=15),
                'username': p_user
            }
            respuesta = jwt.encode(payload, Parametros.secret_jwt, 'HS256')
        except Exception as err:
            HandleLogs.write_log("Error al general el token")
            HandleLogs.write_error(err.__str__())
        finally:
            return respuesta

    @staticmethod
    def TokenValidate(token):
        try:
            respuesta = False
            resp_jtw = jwt.decode(token, Parametros.secret_jwt, algorithms=['HS256'])
            print(resp_jtw)
            if resp_jtw is not None:
                respuesta = True

        except Exception as err:
            HandleLogs.write_log("Error al validar el token")
            HandleLogs.write_error(err.__str__())
        finally:
            return respuesta


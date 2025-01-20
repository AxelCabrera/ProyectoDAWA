from ...utils.database.connection_db import DataBaseHandle
from ...utils.general.logs import HandleLogs
from ...utils.general.response import internal_response

class RegisterComponent:

    @staticmethod
    def Register(username, email, password):
        try:
            result = False
            data = None
            message = None
            sql = "INSERT INTO dawa.users (username, email, password, is_admin) VALUES (%s, %s, %s, FALSE);"
            record = (username, email, password)

            rs_register = DataBaseHandle.RegisterUser(sql, record)
            if rs_register['result']:
                result = True
                message = 'Registro exitoso'
            else:
                message = rs_register['message']
        except Exception as err:
            HandleLogs.write_error(err)
            message = 'Error en el registro ' + err.__str__()
        finally:
            return internal_response(result, data, message)
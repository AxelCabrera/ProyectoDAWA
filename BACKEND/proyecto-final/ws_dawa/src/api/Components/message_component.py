from ...utils.database.connection_db import DataBaseHandle
from ...utils.general.logs import HandleLogs
from ...utils.general.response import internal_response


class MessageComponent:



    @staticmethod
    def getAllMessages():
        try:
            result = False
            data = None
            message = None
            sql = "SELECT message_id, sender_id, receiver_id, content, TO_CHAR(sent_at, 'DD/MM/YYYY hh mi ss') FROM dawa.messages"

            result_user = DataBaseHandle.getRecords(sql,0)
            if result_user['result']:
                result = True
                data = result_user['data']
            else:
                message = 'Error al Obtener datos de mensajes -> ' + result_user['message']
        except Exception as err:
            HandleLogs.write_error(err)
            message = err.__str__()
        finally:
            return internal_response(result, data, message)
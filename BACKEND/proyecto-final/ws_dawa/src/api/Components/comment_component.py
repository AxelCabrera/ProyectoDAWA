from ...utils.database.connection_db import DataBaseHandle
from ...utils.general.logs import HandleLogs
from ...utils.general.response import internal_response
import datetime
import json


class CommentComponent:



    @staticmethod
    def getAllComments():
        try:
            result = False
            data = None
            message = None
            sql = "SELECT comment_id, post_id, user_id, content, TO_CHAR(created_at, 'DD/MM/YYYY hh mi ss') FROM dawa.comments"

            result_user = DataBaseHandle.getRecords(sql,0)
            if result_user['result']:
                result = True
                data = result_user['data']
            else:
                message = 'Error al Obtener datos de comentarios -> ' + result_user['message']
        except Exception as err:
            HandleLogs.write_error(err)
            message = err.__str__()
        finally:
            return internal_response(result, data, message)
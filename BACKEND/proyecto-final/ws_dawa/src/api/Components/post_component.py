from ...utils.database.connection_db import DataBaseHandle
from ...utils.general.logs import HandleLogs
from ...utils.general.response import internal_response


class PostsComponent:

    @staticmethod
    def getAllPosts():
        try:
            result = False
            data = None
            message = None
            sql = "SELECT post_id, user_id, content, TO_CHAR(updated_at, 'DD/MM/YYYY hh mi ss') FROM dawa.posts"

            result_posts = DataBaseHandle.getRecords(sql,0)
            if result_posts['result']:
                result = True
                data = result_posts['data']

            else:
                message = 'Error al Obtener datos de posts -> ' + result_posts['message']
        except Exception as err:
            HandleLogs.write_error(err)
            message = err.__str__()
        finally:
            return internal_response(result, data, message)


import psycopg2
import psycopg2.extras
from psycopg2.extras import RealDictCursor
from ..general.config import Parametros
from ..general.logs import HandleLogs
from ..general.response import internal_response

def conn_db():
    return psycopg2.connect(host=Parametros.db_host,
                            port=int(Parametros.db_port),
                            user=Parametros.db_user,
                            password=Parametros.db_pass,
                            database=Parametros.db_name,
                            cursor_factory=RealDictCursor)

class DataBaseHandle:
    @staticmethod
    def getRecords(query, tamanio, record=()):
        conn = None
        cursor = None
        try:
            result = False
            message = None
            data = None

            conn = conn_db()
            cursor = conn.cursor()
            if len(record) == 0:
                cursor.execute(query)
            else:
                cursor.execute(query, record)

            if tamanio == 0:
                res = cursor.fetchall()
            elif tamanio == 1:
                res = cursor.fetchone()
            else:
                res = cursor.fetchmany(tamanio)

            data = res
            result = True
        except Exception as ex:
            HandleLogs.write_error(ex)
            message = str(ex)
        finally:
            if cursor:
                cursor.close()
            if conn:
                conn.close()
            return internal_response(result, data, message)

    @staticmethod
    def getAllRecords(query, tamanio, record=()):
        conn = None
        cursor = None
        try:
            result = False
            message = None
            data = None

            conn = conn_db()
            cursor = conn.cursor()
            if len(record) == 0:
                cursor.execute(query)
            else:
                cursor.execute(query, record)

            if tamanio == 0:
                res = cursor.fetchall()
            elif tamanio == 1:
                res = cursor.fetchone()
            else:
                res = cursor.fetchmany(tamanio)

            data = str(res)
            result = True
        except Exception as ex:
            HandleLogs.write_error(ex)
            message = str(ex)
        finally:
            if cursor:
                cursor.close()
            if conn:
                conn.close()
            return internal_response(result, data, message)

    @staticmethod
    def RegisterUser(query, record=()):
        conn = None
        cursor = None
        try:
            result = False
            data = None
            message = None

            conn = conn_db()
            cursor = conn.cursor()
            cursor.execute(query, record)
            conn.commit()
            result = True
        except Exception as ex:
            HandleLogs.write_error(ex)
            message = str(ex)
        finally:
            if cursor:
                cursor.close()
            if conn:
                conn.close()
            return internal_response(result, data, message)


    @staticmethod
    def ExecuteNonQuery(query, record):
        conn = None
        cursor = None
        try:
            result = False
            message = None
            data = None

            conn = conn_db()
            cursor = conn.cursor()
            if len(record) == 0:
                cursor.execute(query)
            else:
                cursor.execute(query, record)

            if 'INSERT' in query:
                cursor.execute('SELECT LASTVAL()')
                ult_id = cursor.fetchone()['lastval']
                conn.commit()
                data = ult_id
            else:
                data = 0
            result = True
        except Exception as ex:
            HandleLogs.write_error(ex)
            message = str(ex)
        finally:
            if cursor:
                cursor.close()
            if conn:
                conn.close()
            return internal_response(result, data, message)

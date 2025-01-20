from marshmallow import Schema, fields


class RegisterRequest(Schema):
    register_user = fields.String(required=True)
    register_mail = fields.String(requiered=True)
    register_password = fields.String(required=True)
const mongodb = require('mongoose');

let schema = mongodb.Schema;

let businessLocal_schema = schema({
    _user_local: String,
    _password: String,
    _email: String,
    _phone_number: String,
    _name_local: String,
    _address_local: String,
    _type_local: String,
    _products: Array
});

const businessLocal = mongodb.model('bd_localOnline_negocios_local', businessLocal_schema);

module.exports = businessLocal;

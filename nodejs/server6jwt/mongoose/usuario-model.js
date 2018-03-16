var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
    userName: { type: String },
    password: { type: String },
    status: { type: String }
}
);

var UsuarioModel = mongoose.model('Usuario', UsuarioSchema, 'Usuario');

module.exports = UsuarioModel;
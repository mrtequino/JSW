var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var seguUsuario = new Schema({
  usuaCodigo:    { type: String },
  usuaUsuario:     { type: String },
  usuaClave:  { type: String },
  usuaEstado:   { type: String }
}, {collection: 'SeguUsuario'});

module.exports = mongoose.model('SeguUsuario', seguUsuario);

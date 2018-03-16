var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send(JSON.parse('{"codigo": "01", "nombre": "Diego", "numero": 1, "perfiles": [{"perfil": "administrador"},{"perfil": "facturación"}]}'));
});

module.exports = router;
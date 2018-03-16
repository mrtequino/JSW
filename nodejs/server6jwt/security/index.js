//acceso a base de datos mongo con mongoose
let UsuarioModel = require('../mongoose/usuario-model');
//express y router
let express = require('express');
let router = express.Router();

//generación de token de acceso a rutas
let jsonWebToken = require('jsonwebtoken');

let claveSecreta = 'clave-secreta';

//******************************************************** */
//protección de recursos
//******************************************************** */
router.all('/api/**', function (req, res, next) {
    // verificar simetría del token
    if (req.headers.authorization) {
        jsonWebToken.verify(req.headers.authorization, claveSecreta, function (err, decoded) {
            if (err) {
                //res.status(401);
                let error = { "status": 401, "message": err.message, "stack": "Usted no posee permisos para acceder al recurso solicitado." }
                return next(error);
            } else {
                res.append("user", JSON.stringify(decoded));
                next();
            }
        });
    } else {
        let err = { "status": 401, "message": "unauthorized", "stack": "Usted no posee permisos para acceder al recurso solicitado." }
        return next(err);
    }
});

//******************************************************** */
//permitir acceso
//******************************************************** */
router.post('/', function (req, res) {
    if (req.body) {

        UsuarioModel.findOne({ "userName": req.body.login, "password": req.body.password }, function (err, usuario) {
            if (err) {
                return res.sendStatus(401);
            } else if (!usuario) {
                return res.sendStatus(401);
            }
            else {
                let tokenRetorno = JSON.parse(JSON.stringify(usuario));
                let tokenNuevo = jsonWebToken.sign(tokenRetorno, claveSecreta, { expiresIn: 60 });
                let tokenAsJSON = { "authorization": tokenNuevo };
                res.append("authorization", tokenNuevo);
                res.append("usuario", JSON.stringify(tokenRetorno));
                return res.status(200).send(tokenAsJSON);
            }
        });
    } else {
        return res.sendStatus(401);
    }
});
//******************************************************** */

//exportaciones de variables y funciones
module.exports.router = router;
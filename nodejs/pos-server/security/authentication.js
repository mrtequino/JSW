var jwt = require("jsonwebtoken");
var express = require("express");
var router = express.Router();
var conf = require("../conf");
var seguridadDao = require("../dao/seguridadDao");
/*
router.post("/", async function(req, res, next) {
  let username = req.body.username;
  let password = req.body.password;

  try {
    usuarioBase = await seguridadDao.getUsuario(username, password);

    //confirmo si los datos de logeo son válidos para generar el token
    if (usuarioBase) {
      //armo el contenido del token
      let payLoad = {
        data: {
          mensaje: "login correcto"
        }
      };

      //genero el token
      let token = jwt.sign(payLoad, conf.CLAVE_SECRETA, { expiresIn: 10 * 60 });

      //agrego el token en la cabecera de respuesta
      res.set("authorization", token);
      //next("route");
      //next();
      res.send("Autenticación satisfactoria");
    }
    next(new Error("Usuario o clave errados"));
  } catch (ex) {
    next(new Error(ex.message));
  }
});**/

router.post("/", function(req, res, next) {
  let username = req.body.username;
  let password = req.body.password;

  seguridadDao
    .getUsuario(username, password)
    .then(
      data => {
        //confirmo si los datos de logeo son válidos para generar el token
        let usuarioBase = data;
        if (usuarioBase) {
          //armo el contenido del token
          let payLoad = {
            data: {
              iat: new Date(),
              mensaje: "login correcto"
            }
          };

          //genero el token
          let token = jwt.sign(payLoad, conf.CLAVE_SECRETA, {
            expiresIn: 60 * 60
          });

          //agrego el token en la cabecera de respuesta
          res.set("authorization", token);
          //next("route");
          //next();
          res.send("Autenticación satisfactoria");
        }
        next(new Error("Usuario o clave errados"));
      },
      err => {
        next(err);
      }
    )
    .catch(err => {
      next(err);
    });
});

module.exports = router;

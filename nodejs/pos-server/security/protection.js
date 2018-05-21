var jwt = require("jsonwebtoken");
var conf = require("../conf");

function protegerRutas(req, res, next) {
  if (req.headers.authorization) {
    let token = req.headers.authorization;
    jwt.verify(token, conf.CLAVE_SECRETA, function(err, decoded) {
      if (err) {
        error = new Error();
        error.status = 401;
        error.message = "Acceso no permitido a este sitio web: " + err.message;
        next(error);
        return;
      }
      next();
    });
    return;
  }
  next(
    new Error("proporcione un token válido para el acceso a este sitio web.")
  );
}

module.exports = protegerRutas;

var jwt = require("jsonwebtoken");

const login = (username, password) => {
  if (username !== "dpeniafiel" || password !== "123") {
    throw "usuario o clave incorrectas";
  }
  let token = jwt.sign({ username: username }, "CLAVE_SECRETA", {
    expiresIn: "1h"
  });
  return token;
};

module.exports = {
  login
};

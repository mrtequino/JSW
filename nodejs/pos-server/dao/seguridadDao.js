const { Client } = require("pg");
var conf = require("../conf");

async function getUsuario(username, password) {
  const client = new Client(conf.datosConexionPostgres);
  await client.connect();
  const res = await client.query(
    "select * from segu_usuario aa where aa.usua_username=$1 and aa.usua_password=$2",
    [username, password]
  );
  return res.rows[0];
  await client.end();
}

function getUsuarioPromise(username, password) {
  return new Promise((resolve, reject) => {
    const client = new Client(conf.datosConexionPostgres);
    client.connect();
    return client.query(
      "select * from segu_usuario aa where aa.usua_username=$1 and aa.usua_password=$2",
      [username, password],
      (err, res) => {
        if (err) {
          reject(err);
        }
        client.end();
        resolve(res.rows[0]);
      }
    );
  });
}

function getAllUsersPromise() {
  return new Promise((resolve, reject) => {
    const client = new Client(conf.datosConexionPostgres);
    client.connect();
    return client.query(
      "select * from segu_usuario aa order by usua_username",
      (err, res) => {
        if (err) {
          reject(err);
        }
        client.end();
        resolve(res.rows);
      }
    );
  });
}

module.exports.getUsuario = getUsuario;
module.exports.getUsuarioPromise = getUsuarioPromise;
module.exports.getAllUsersPromise = getAllUsersPromise;

const {
  Client
} = require("pg");
var conf = require("../conf");

const {
  from,
  of ,
  throwError
} = require("rxjs");
const {
  map,
  flatMap,
  concat,
  tap,
  catchError,
  finalize
} = require("rxjs/operators");

async function getUsuario(username, password) {
  const client = new Client(conf.datosConexionPostgres);
  await client.connect();
  const res = await client.query(
    "select * from segu_usuario aa where aa.usua_username=$1 and aa.usua_password=$2", [username, password]
  );
  return res.rows[0];
  await client.end();
}

function getUsuarioPromise(username, password) {
  return new Promise((resolve, reject) => {
    const client = new Client(conf.datosConexionPostgres);
    client.connect();
    return client.query(
      "select * from segu_usuario aa where aa.usua_username=$1 and aa.usua_password=$2", [username, password],
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

function getAllUsersRxjs() {
  var client = of (new Client(conf.datosConexionPostgres));
  const consulta = client.pipe(flatMap(x => {
    x.connect();
    query = from(x.query("select * from segu_usuario aa order by aa.usua_username"));
    query = query.pipe(catchError(e => throwError(new Error("error: " + e.message))));
    query = query.pipe(finalize(_ => x.end()));
    return query;
  }));
  const retorno = consulta.pipe(map(x => x.rows));
  return retorno;
}

module.exports.getUsuario = getUsuario;
module.exports.getUsuarioPromise = getUsuarioPromise;
module.exports.getAllUsersPromise = getAllUsersPromise;
module.exports.getAllUsersRxjs = getAllUsersRxjs;
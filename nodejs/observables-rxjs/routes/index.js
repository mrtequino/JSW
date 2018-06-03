var express = require("express");
var router = express.Router();
var oracledb = require("oracledb");

const { of, range, timer } = require("rxjs");
const {
  flatMap,
  mapTo,
  delay,
  zip,
  tap,
  combineAll,
  concatAll,
  map
} = require("rxjs/operators");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.append("Content-type", "text/event-stream;charset=UTF-8");
  res.append("transfer-encoding", "chunked");
  const source = range(1, 10).pipe(
    map(val => {
      return of({
        valor: val
      }).pipe(delay(1000));
    }),
    concatAll()
  );
  source.subscribe(
    val => {
      console.log("" + val + "\n");

      res.write("data:" + val.valor);
    },
    err => err,
    _ => res.end()
  );
});

router.get("/datos", function(req, res, next) {
  setTimeout(() => {
    res.json({
      valor: 1
    });
  });
});

router.get("/oracle", (req, res, next) => {
  oracledb.outFormat = oracledb.OBJECT;
  oracledb
    .getConnection({
      user: "ltgpruebas",
      password: "ltgpruebas",
      connectString: "192.168.1.9/LTGBDD"
    })
    .then(function(conn) {
      return conn
        .execute(
          `SELECT *
         FROM sg_usuario`
        )
        .then(
          result => {
            res.json(result.rows);
            return conn.close();
          },
          err => {
            console.error(err);
            return conn.close();
          }
        );
    })
    .catch(function(err) {
      console.error(err);
    });
});

module.exports = router;

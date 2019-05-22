var express = require("express");
var router = express.Router();
var oracledb = require("oracledb");
var oracleDS = require('../ds/oracle-ds');

const { of , range, timer, from, forkJoin, throwError
} = require("rxjs");
const {
  merge,
  mergeAll,
  fromPromise,
  flatMap,
  mergeMap,
  mapTo,
  delay,
  zip,
  tap,
  combineAll,
  concatAll,
  map,
  catchError,
  concat,
  scan
} = require("rxjs/operators");

/* GET home page. */
router.get("/", function (req, res, next) {
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

router.get("/datos", function (req, res, next) {
  setTimeout(() => {
    res.json({
      valor: 1
    });
  });
});

//ok
router.get("/oracle", (req, res, next) => {
  oracleDS.getConnection()
    .then(function (conn) {
      return conn.execute(`SELECT * FROM sg_usuario`).then(
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
    .catch(function (err) {
      console.error(err);
    });
});

//mal
router.get("/oracle1", (req, res, next) => {
  oracleDS.getConnection()
    .then(function (conn) {
      return conn.execute(`SELECT * FROM sg_tipouser`).then(
        result => [conn, result.rows],
        err => {
          console.error(err);
          return conn.close();
        }
      ).then(
        x => {
          retorno = [];
          x[1].results.map(tipos => {
            tipos.usuarios = x[0].execute(`SELECT * FROM sg_usuario where tus_codigo=:t`, [tipos.TUS_CODIGO]).then(
              usuarios => tipos.push(usuarios)
            )
            retorno.push(tipos)
          })
          return retorno;
        }
      );
    })
    .catch(function (err) {
      console.error(err);
    });
});

//ok
router.get("/oracleasync", async (req, res, next) => {
  const con = null;
  try {
    const con = await oracleDS.getConnection();
    const result = await con.execute(`SELECT * FROM sg_usuario`);
    res.json(result.rows);
  } catch (ex) {
    next(ex);
  } finally {
    if (con != null) {
      con.close();
    }
  }
});

//ok
router.get("/oracleasync1", async (req, res, next) => {
  const con = null;
  try {
    const con = await oracleDS.getConnection();
    const result = await con.execute(`SELECT * FROM sg_tipouser`);
    let retorno = [];
    for (let i = 0; i < result.rows.length; i++) {
      let tipo = result.rows[i];
      let result1 = await con.execute(`SELECT * FROM sg_usuario where tus_codigo=:t1`, [tipo.TUS_CODIGO]);
      tipo.usuarios = result1.rows;
      retorno.push(tipo);
    }
    res.json(retorno);
  } catch (ex) {
    next(ex);
  } finally {
    if (con != null) {
      con.close();
    }
  }
});



//ok
router.get("/oraclerxjs", (req, res, next) => {
  //let source$ = from(oracledb.getConnection());
  let con = null;
  let source$ = from(oracleDS.getConnection());
  source$ = source$.pipe(mergeMap(x => {
    con = x;
    return from(x.execute("select * from sg_niveldacceso"));
  }));
  source$ = source$.pipe(map(x => x.rows));
  source$.subscribe(x => res.send(x), e => res.send(e.message), _ => {
    if (con != null) {
      con.close();
    }
  });
});

//ok
router.get("/oraclerxjs1", (req, res, next) => {
  //let source$ = from(oracledb.getConnection());
  let source$ = from(oracleDS.getConnection());
  source$ = source$.pipe(mergeMap(x => forkJoin(from(x.execute("select * from sg_usuario")), of (x))));
  source$ = source$.pipe(map(x => {
    x[1].close();
    return x[0].rows;
  }));
  source$.subscribe(x => res.send(x), e => res.send(e.message))
});

//mal
router.get("/oraclerxjs2", (req, res, next) => {
  let source$ = from(oracledb.getConnection());
  //let source$ = from(oracleDS.getConnection());
  source$ = source$.pipe(mergeMap(x => forkJoin(from(x.execute("select * from sg_tipouser")), of (x))));
  source$ = source$.pipe(map(x => {
    con = x[1];
    datos$ = from(x[0].rows);
    datos$ = datos$.pipe(mergeMap(x1 => from(con.execute("select * from sg_usuario where tus_codigo=", [x1.TUS_CODIGO]))));
    datos$ = datos$.pipe(map(x1 => x.usuarios = x1));
    con.close();
    return datos$;
  }));
  source$ = source$.pipe(mergeMap(x => x));
  source$.subscribe(x => res.send(x), e => res.send(e.message))
});

//en proceso
router.get("/oraclerxjs3", (req, res, next) => {
  //let source$ = from(oracledb.getConnection());
  let con = null;
  let source$ = from(oracleDS.getConnection());
  source$ = source$.pipe(mergeMap(x => {
    con = x;
    return from(x.execute("select * from sg_tipouser"));
  }));
  source$ = source$.pipe(mergeMap(x => from(x.rows)));
  source$ = source$.pipe(map(x => {
    //console.log(x);
    return from(con.execute("select * from sg_usuario where tus_codigo=:t", [x.TUS_CODIGO])).pipe(map(x1 => {
      x.usuarios = x1.rows;
      return x;
    }));
  }));
  //source$ = source$.toArray();
  source$ = source$.pipe(combineAll());
  //source$ = source$.pipe(map(x => of (x)));

  source$.subscribe(x => res.send(x), e => res.send(e.message), _ => {
    if (con != null) {
      con.close();
    }
  });
});

module.exports = router;
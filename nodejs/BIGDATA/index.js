const { rxjs, from, of } = require("rxjs");
const { map, mergeMap, tap } = require("rxjs/operators");
const oracledb = require("oracledb");
const dbconfig = {
  user: "ltgdesarrollo",
  password: "ltgdesarrollo",
  connectString: "192.168.1.9/LTGBDD"
};

oracledb.autoCommit = true;

function doRelease(connection) {
  connection.close(function(err) {
    if (err) console.error(err.message);
  });
}

const getConnection = () => oracledb.getConnection(dbconfig);

const ejecutarConsulta = async () => {
  let con = undefined;
  try {
    oracledb.outFormat = oracledb.OBJECT;
    con = await getConnection();
    res = await con.execute("select * from sg_niveldacceso");
    return res.rows;
  } catch (ex) {
    throw ex;
  } finally {
    if (!con) {
      con.close();
    }
  }
};

ejecutarConsulta()
  .then(data => {
    //data.forEach(val => console.log(val.USU_CODIGO));
    let source1$ = from(data).pipe(
      mergeMap(data2 => {
        return of(data2);
      })
    );
    source1$.subscribe(data3 => console.log(data3));
  })
  .catch(err => {
    console.log(err);
  });

// myscript.js

var oracledb = require('oracledb');


function openConnection(req, res, next, callback) {
    //return new Promise((resolve, reject) => {
    retorno = null;
    oracledb.getConnection({
        user: "ltgdesarrollo",
        password: "ltgdesarrollo",
        connectString: "192.168.1.9/LTGBDD"
    }, (err, connection) => {
        if (err) next(err);
        callback(connection);
        //resolve(connection);
    });
    //});
    //return retorno;
}

function ejecutarQuery(req, res, next, connection, query) {
    return new Promise(resolve => {
        connection.execute(
            query, // bind value for :id
            function (err, result) {
                if (err) next(err);
                resolve(result);
                doRelease(connection);
            })
    });
}

async function probar(req, res, next) {
    openConnection(req, res, next, con => connection = con);
    let datos = await ejecutarQuery(req, res, next, connection, `select * from sg_usuario`);
    //console.log(datos);
    res.json(datos);
}

function doRelease(connection) {
    connection.close(
        function (err) {
            if (err)
                console.error(err.message);
        });
}


exports.probar = probar;



//proabr funcionamiento
//probar();
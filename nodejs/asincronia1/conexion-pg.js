const {
    from,
    of ,
    throwError
} = require('rxjs');
const {
    map,
    mergeMap,
    catchError,
    finalize
} = require('rxjs/operators');
const {
    Client
} = require("pg");

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123',
    database: "prueba"
});

var conexionAsyncAwait = async () => {
    try {
        await client.connect();
        await client.query("BEGIN");
        await client.query("insert into autor(id, nombre) values($1,$2)", [1, "Diego"]);
        await client.query("COMMIT");
        return "CORRECTO";
    } catch (error) {
        //await client.query("ROLLBACK");
        throw error;
    } finally {
        client.end();
    }
}


var conexionPromises = () => {
    client.connect();
    var promesa = client.query("BEGIN")
        .then(data => client.query("insert into autor(id, nombre) values($1,$2)", [1, "Diego"]))
        .then(data => client.query("COMMIT"))
        .then(data => "CORRECTO")
        .catch(error => {
            throw error;
        }).finally(() => client.end());
    return promesa;
}


var conexionRXJS = () => {

    client.connect().catch(error=>{console.log(error.message)});
    
    return from(client.query("BEGIN")).pipe(
        mergeMap(data => client.query("insert into autor(id, nombre) values($1,$2)", [2, "Diego"])),
        mergeMap(data => client.query("COMMIT")),
        mergeMap(data => of ("CORRECTO")),
        catchError(error => throwError(error)),
        finalize(() => client.end())
    )
}

//conexionPromises().then(data => console.log(data)).catch(error => console.error(error));
conexionRXJS().subscribe(data => console.log(data), error => console.log(error.message));
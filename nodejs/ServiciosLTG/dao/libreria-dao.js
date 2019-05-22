const {
    Client
} = require('pg');

var conexion = require('../ds/ds')

async function autorFindAllPool() {
    try {
        client = conexion.getPoolPG;
        //await client.connect()
        const res = await client.query('SELECT * from autor');
        return res.rows;
    } catch (ex) {
        throw ex;
    } finally {
        //await client.end();
    }
}

async function autorFindAllClient() {
    client = await conexion.getClientPG();
    try {
        const res = await client.query('SELECT * from autor');
        return res.rows;
    } catch (ex) {
        throw ex;
    } finally {
        await client.end();
    }
}

module.exports.autorFindAllClient = autorFindAllClient;
module.exports.autorFindAllPool = autorFindAllPool;
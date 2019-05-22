"use strict";
const {
    Client,
    Pool
} = require('pg');

const getClientPG = async () => {
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'prueba',
        password: '123',
        port: 5432,
    });
    client.connect();
    return client;
}


const getPoolPG =
    new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'prueba',
        password: '123',
        port: 5432,
    });

module.exports.getClientPG = getClientPG;
module.exports.getPoolPG = getPoolPG;
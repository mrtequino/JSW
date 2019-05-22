var oracledb = require('oracledb');
var config = require("../config");

function iniciarPool() {
    oracledb.createPool(config.oracleConfig);
    oracledb.outFormat = oracledb.OBJECT;
}

function getConnection() {
    oracledb.outFormat = oracledb.OBJECT;
    return oracledb.getConnection(config.oracleConfig);
}

module.exports.iniciarPool = iniciarPool;
module.exports.getConnection = getConnection;
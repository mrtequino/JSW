var oracledb = require('oracledb');
var conf = require('../config')



const getConnection = async () => {
    try {
        con = await oracledb.getConnection(conf.oracleConfig)
        return con
    } catch (ex) {
        throw ex;
    }
}

const getUsuarios = async () => {
    try {
        con = await getConnection()
        retorno = await con.execute("SELECT * from af_activos")
        return retorno
    } catch (ex) {
        throw ex;
    }
}

module.exports.getUsuarios = getUsuarios;
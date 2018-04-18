// importar
var express = require('express');
var cluster = require('cluster');
var http = require('http');

// instanciar
var app = express();

var port = 3000;

// ruteo
app.get('/', function (req, res) {
    process.nextTick(() => {
        console.log("Iniciado a las: ", new Date());
        for (let i = 0; i < 10000000000; i++) {
            console.log(i);
        }
        console.log("terminado a las: ", new Date());
    });
    res.send("procesar: " + new Date());
});

app.get('/otra', function (req, res) {
    process.nextTick(() => {

    });
    res.send("otro proceso: " + new Date());
});

// escuchar
//app.listen(9000);

//console.log("Servidor Express escuchando en modo %s", app.settings.env);

var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {

    console.log("Soy master");

    //Crear tantos procesos como cpus tenga el equipo
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on('exit', function (worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    });
} else {

    console.log("Soy worker");

    /**
     * Create HTTP server.
     */

    var server = http.createServer(app);

    /**
     * Listen on provided port, on all network interfaces.
     */

    server.listen(port);
    //server.on('error', onError);
    //server.on('listening', onListening);

}
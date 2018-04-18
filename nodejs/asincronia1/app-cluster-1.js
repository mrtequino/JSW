const cluster = require('cluster');
const http = require('http');
var express = require('express');

var app = express();

process.env.UV_THREADPOOL_SIZE = 1000;


function funcionDeLLamada(callback) {
    process.nextTick(() => {
        console.log("Iniciado a las: " + new Date());
        for (let i = 0; i < 10000000000; i++) {
            //console.log(i);
        }
        console.log("terminado a las: " + new Date());
        callback();
    });
}

function funcionSincrona() {
    for (let i = 0; i < 10000000000; i++) {
        //console.log(i);
    }
}

// ruteo
app.get('/', function (req, res) {
    funcionSincrona();
    funcionDeLLamada(() => {
        res.send("terminado: " + new Date());
    });
});

app.get('/otra', function (req, res) {
    process.nextTick(() => {
        res.send("otro proceso: " + new Date());
    });
});

const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    // Fork workers.
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    http.createServer(app).listen(3000);
}
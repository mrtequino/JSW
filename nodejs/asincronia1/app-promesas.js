// importar
var express = require('express');
var cluster = require('cluster');
var http = require('http');
var codb = require('./conexion_oracledb');

// instanciar
var app = express();

var port = 3000;

process.env.UV_THREADPOOL_SIZE = 100;

app.get("/", async (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  codb.probar(req, res, next);
});

app.use(function(err, req, res, next) {
  console.log(err);
  res.status(500).send(err + "");
});

// escuchar
app.listen(3000);

//console.log(process.env.UV_THREADPOOL_SIZE);

console.log("Servidor Express escuchando en modo %s", app.settings.env);

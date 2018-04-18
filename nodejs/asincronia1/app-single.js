// importar
var express = require('express');
var cluster = require('cluster');
var http = require('http');

// instanciar
var app = express();

var port = 3000;

process.env.UV_THREADPOOL_SIZE = 100;
//console.log(process.env);

var arreglo = [];
for (i = 0; i < 10; i++) {
    arreglo.push(i);
}

console.log(arreglo.length);

function delay() {
    return new Promise((resolve) => {
        setTimeout((resolve), 5000);
    });
}

async function delayedLog(item) {
    await delay();
    console.log(item);
}

async function processArray(array) {
    for (const item of array) {
        await delayedLog(item);
    }
    console.log('Done');
}

async function processArrayNumeros(res) {
    for (let i = 0; i < 5; i++) {
        await delayedLog(i);
    }
    console.log('Done');
    res.send("terminado: " + new Date());
}

function processArrayNumerosPromesa() {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < 10; i++) {
            hacerFor(i).then(() => {
                console.log(i);
            });
        }
        resolve();
    });
}

function hacerFor(item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {}, 3000);
        resolve();
    });
    console.log(i);
}

// ruteo
app.get('/', function (req, res) {
    //processArray(arreglo);
    //processArrayNumeros(res);
    process.nextTick(() => {
        processArrayNumerosPromesa().then(() => {
            res.send("terminado: " + new Date());
        });
    });
});

async function forConPromesaLlamada(res) {
    await forConPromesa();
    res.send("terminado: " + new Date());
}

app.get('/otra', async function (req, res) {
    try {
        await funcionConECMA7();
        res.send("proceso de copia: " + new Date());
    } catch (e) {
        console.log(e);
    }
});

async function funcionConECMA7() {
    for (let i = 0; i < 5; i++) {
        await new Promise(resolve => setTimeout(resolve, 10 * 1000));
        console.log(i);
    }
}


function forConPromesa1() {
    process.nextTick(() => {
        for (let i = 0, p = Promise.resolve(); i < 10; i++) {
            p = p.then(_ => new Promise(resolve =>
                setTimeout(function () {
                    console.log(i);
                    resolve();
                }, Math.random() * 1000)
            ));
        }
    });
}

function forConPromesa() {
    for (let i = 0, p = Promise.resolve(); i < 100000; i++) {
        p = p.then(() => {
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log(i);
                    resolve();
                }, 0);
            })
        });
    }
}


function timesPromise(n) {
    p = Promise.resolve();
    while (n++ < 10) {
        p = p.then(() => {
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log(n);
                    resolve();
                }, 1000);
            })
        });
    }
}

async function times(n, f) {
    while (n++ < 1000000)
        await f(n);
}

app.get("/while", async (req, res) => {
    /*await times(0, (n) => {
        console.log(n);
    });
    */
    timesPromise(0);
    res.send("while: " + new Date());
});

// escuchar
app.listen(3000);



//console.log(process.env.UV_THREADPOOL_SIZE);

console.log("Servidor Express escuchando en modo %s", app.settings.env);
var exec = require("child_process").exec;

function iniciar(response) {

    console.log("Manipulador de petición 'iniciar' fue llamado.");

    exec('dir "C:\\RESPALDOS DISCO ANTIGUO\\OTROS C\\perfiles\\dpeniafiel\\Desktop\\tmp"', function (error, stdout, stderr) {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(stdout);
        response.end();
    });
}

function subir(response) {
    console.log("Manipulador de petición 'subir' fue llamado.");
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("Hola Subir");
    response.end();
}

exports.iniciar = iniciar;
exports.subir = subir;
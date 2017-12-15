var printer = require("node-thermal-printer");

printer.init({
    type: 'epson',
    interface: '//192.168.1.54/facturas',
    characterSet: 'LATIN AMERICA',                         // Printer character set
    removeSpecialCharacters: false,                   // Removes special characters - default: false
    replaceSpecialCharacters: true,                   // Replaces special characters listed in config files - default: true
    extraSpecialCharacters: { '£': 163 }
});

printer.raw(new Buffer(`
Esta es una prueba de impresión\n 
desde javascript línea a línea
\n\n\n\n\n`), function (err) {
        if (err) {
            console.log(JSON.stringify(err));
        }else{
            console.log("Impresión realizada sin novedad.");
        }
    });
printer.cut();

//console.log(printer);
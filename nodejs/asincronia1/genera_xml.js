var js2xmlparser = require('js2xmlparser');

var objeto = {
    "@": {
        "version": "1.1.0"
    },
    infoFactura: {
        "codigo": 1,
        "nombre": "Diego",
    }
}

console.log(js2xmlparser.parse("factura", objeto));
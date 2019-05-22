/**
function procesarFor(tamanio) {
    for (let i = 0, p = Promise.resolve(); i < tamanio; i++) {
        p = p.then(resolve => new Promise(resolve => {
            setTimeout(() => {
                console.log(i);
                resolve(i);
            });
        }));
    }
}

procesarFor(100);
procesarFor(100);
*/

function procesarFor(tamanio) {
    p = Promise.resolve();
    for (let i = 0; i < tamanio; i++) {
        p = p.then(resolve => new Promise(resolve => {
            setTimeout(() => {
                console.log(i);
                resolve(i);
            });
        }));
    }
}

procesarFor(1000);
procesarFor(1000);
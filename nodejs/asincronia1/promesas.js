function procesarFor(tamanio) {
    for (let i = 0, p = Promise.resolve(); i < tamanio; i++) {
        p = p.then(resolve => new Promise(resolve => {
            setTimeout(() => {
                console.log(i);
                resolve(i);
            }, 1000 * 1);
        }));
    }
}

procesarFor(10);
procesarFor(10);
var Rx = require('rxjs/Rx');

function retornarObservable() {
    return Rx.Observable.create(observer => {
        setTimeout(() => {
            observer.next({
                'nombre': 'Diego',
                'apellido': 'Peñafiel'
            });
            observer.error({
                'message': "algo malo pasó"
            });
            observer.next('retorno1');
            observer.complete();
        }, 1000);
    });
}

retornarObservable().subscribe({
    next: x => console.log(x.nombre),
    error: e => console.log(e.message),
    complete: () => console.log('completo')
});
retornarObservable().subscribe({
    next: x => console.log(x.nombre),
    error: e => console.log(e.message),
    complete: () => console.log('completo')
});
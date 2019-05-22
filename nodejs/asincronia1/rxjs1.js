var {
    Observable,
    from,
    of ,
    takeWhile
} = require('rxjs');
var {
    map,
    concat
} = require('rxjs/operators');


miArray = [];
for (i = 0; i < 10; i++) {
    miArray[i] = i;
}


var miObservable1 = Observable.create((miObservador) => {
    miArray.forEach(element => {
        miObservador.next(element);
    });
});

var miObservable2 = of("a");

miObservable1 = miObservable1.pipe(concat(miObservable2));

miObservable1.subscribe(data => console.log(data));


//miObservable$.subscribe(data => console.log("2: " + data));
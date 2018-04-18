var Rx = require('rxjs/Rx');

var obs = Rx.Observable.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).map(x => x);
obs.subscribe(x => {
    setTimeout(() => {
        console.log("primero" + x);
    }, 1000 * 10);
});
obs.subscribe(x => {
    setTimeout(() => {
        console.log("segundo" + x);
    }, 0);
});
const {
  Observable,
  Subject,
  ReplaySubject,
  from,
  of,
  range,
  interval,
  combineLatest,
  timer
} = require("rxjs");

const {
  concat,
  filter,
  switchMap,
  take,
  map,
  combineAll,
  merge,
  last,
  tap,
  scan,
  flatMap,
  mergeMap,
  mergeAll
} = require("rxjs/operators");

let array = [];
for (let i = 0; i < 100000; i++) {
  array.push(i);
}

const arrayObservable = from(array).pipe(
  tap(data =>
    setTimeout(_ => {
      //if (data == 99999) {
      console.log(data);
      //}
    }, 1000)
  )
);

arrayObservable.subscribe(
  data => data,
  error => error,
  () => console.log("1 completo")
);
setTimeout(() => {
  console.log("tiempo de espera completado");
}, 1000 * 1);

setTimeout(() => {
    console.log("tiempo de espera completado");
  }, 1000 * 1.5);

arrayObservable.subscribe(
  data => data,
  error => error,
  () => console.log("2 completo")
);
arrayObservable.subscribe(
  data => data,
  error => error,
  () => console.log("3 completo")
);
arrayObservable.subscribe(
  data => data,
  error => error,
  () => console.log("4 completo")
);

/*console.log(Object.getOwnPropertyNames(process).filter(function (p) {
    return typeof process[p] === 'function';
}));*/

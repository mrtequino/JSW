const {
  Observable,
  Subject,
  ReplaySubject,
  from,
  of ,
  range,
  interval,
  combineLatest,
  timer
} = require("rxjs");
const {
  fromArray,
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
  concatAll,
  delay
} = require("rxjs/operators");

var delayedStream =
  range(1, 10)
  .pipe(
    map(function (value) {
      return of(value).pipe(delay(2000));
    }));
delayedStream.subscribe(val => console.log(val));
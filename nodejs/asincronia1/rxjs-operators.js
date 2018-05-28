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
  flatMap
} = require("rxjs/operators");

const source = range(1, 100000);
// basic scan example, sum over time starting with zero
const example = source.pipe(map(data => data));
// log accumulated values
// output: 1,3,6
console.log("iniciado directo");
setTimeout(_ => console.log("iniciado setTimeout"));

example.subscribe(
  value => setTimeout(_ => console.log(value)),
  error => console.log(error),
  () => setTimeout(_ => console.log("completo interno"))
);

console.log('terminado directo')
setTimeout(_ => console.log('terminado con setTimeout'));
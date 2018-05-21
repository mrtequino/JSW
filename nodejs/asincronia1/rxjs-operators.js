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
} = require('rxjs');
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
} = require('rxjs/operators');

const source = of (1, 2, 3);
// basic scan example, sum over time starting with zero
const example = source.pipe(flatMap(data => of(data)));
// log accumulated values
// output: 1,3,6
const subscribe = example.subscribe(val => console.log(val));
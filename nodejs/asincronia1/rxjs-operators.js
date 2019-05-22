const {
  Observable,
  Subject,
  ReplaySubject,
  from,
  of,
  range,
  interval,
  combineLatest,
  timer,
  forkJoin
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
  delay,
  mergeMap,
  mergeAll
} = require("rxjs/operators");

var callstack = require("callstack");

var array = [1, 2, 3];

var colocarValorCallback = (val, arr, callback) => {
  setTimeout(_ => {
    arr.push(val);
    callback(arr);
  }, 1000 * 1);
};

var colocarValorPromise1 = (val, arr) => {
  return new Promise((resolve, reject) => {
    setTimeout(_ => {
      arr.push(val);
      resolve(arr);
    }, 1000 * 2);
  });
};

var colocarValorPromise2 = (val, arr) => {
  return new Promise((resolve, reject) => {
    setTimeout(_ => {
      arr.push(val);
      resolve(arr);
    }, 1000 * 3);
  });
};

var colocarValorPromise3 = (val, arr) => {
  return new Promise((resolve, reject) => {
    setTimeout(_ => {
      arr.push(val);
      resolve(arr);
    }, 1000 * 3);
  });
};



colocarValorCallback(4, array, val => console.log(val));

colocarValorPromise1(5, array)
  .then(a => a, err => console.log(err))
  .then(b => b)
  .then(c => console.log(c));

var llamarAync = async () => {
  await colocarValorPromise2(6, array);
  console.log(array);
};
llamarAync();

from(colocarValorPromise3(7, array)).subscribe(a => console.log(a));

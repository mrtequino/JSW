const {
  Observable,
  Subject,
  ReplaySubject,
  from,
  of ,
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
  mergeAll,
  reduce
} = require("rxjs/operators");

var axios = require("axios");

/**
let numero;
let arrayRetorno;
axios
  .get("https://api.github.com/users")
  .then(response => {
    numero = 0;
    arrayRetorno = [];
    return response.data;
  })
  .then(x => {
    x.map(fila => {
      numero = numero + 1;
      retorno = numero + ".- " + fila.login;
      arrayRetorno.push(retorno);
    });
    return arrayRetorno;
  })
  .then(x => console.log(x))
  .catch(function(error) {
    console.log(error);
  });
  **/

/**
let linea;
let usuarios$ = from(axios.get("https://api.github.com/users")).pipe(
  tap(x => (linea = 0)),
  mergeMap(x => from(x.data)),
  map(x => x.login),
  map(x => {
    linea = linea + 1;
    x = { nuevoValor: linea + ".- " + x };
    return of(x);
  }),
  combineAll()
);
usuarios$.subscribe(x => console.log(x));
usuarios$.subscribe(x => console.log(x));
usuarios$.subscribe(x => console.log(x));
 */

var funcionAsincrona = async () => {
  let numero = 0;
  let arrayRetorno = [];

  let datos = await axios.get("https://api.github.com/users");

  let logins = await datos.data;
  logins.map(x => {
    numero = numero + 1;
    retorno = numero + ".- " + x.login;
    arrayRetorno.push(retorno);
  });
  return arrayRetorno;
};

funcionAsincrona().then(x => console.log(x));

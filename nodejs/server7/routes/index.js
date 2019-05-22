var express = require("express");
var router = express.Router();
var dao = require('../dao/oracle-dao')

var { of , from
} = require("rxjs");
var {
  map,
  mergeMap,
  concatAll,
  combineAll
} = require("rxjs/operators");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express"
  });
});

router.get("/persona", (req, res, next) => {
  let i = 0;
  var source = of ([{
    nombre: "Item1"
  }, {
    nombre: "Item2"
  }]);
  source = source.pipe(mergeMap(x1 => from(x1)));
  source = source.pipe(
    map(x1 => {
      x1.fecha = new Date();
      x1.id = i++;
      return of(x1);
    })
  );
  source = source.pipe(combineAll());
  source.subscribe(x => res.json(x));
});

router.get("/oracle", async (req, res, next) => {
  try {
    res.json(await dao.getUsuarios())
  } catch (ex) {
    next(ex)
  }
})

module.exports = router;
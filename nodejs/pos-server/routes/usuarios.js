var express = require("express");
var router = express.Router();
var usuarioDao = require("../dao/seguridadDao");
var Rx = require("rxjs/Rx");

/* GET users listing. */
router.get("/usuario", function(req, res, next) {
  usuarioDao
    .getAllUsersPromise()
    .then(
      data => {
        res.send(data);
      },
      err => {
        next(err);
      }
    )
    .catch(err => {
      next(err);
    });
});

router.get("/usuario-rxjs", (req, res, next) => {
  Rx.Observable.from(
    Rx.Observable.fromPromise(usuarioDao.getAllUsersPromise())
  ).subscribe(arrayDatos => res.send(arrayDatos), err => next(err));
});

module.exports = router;

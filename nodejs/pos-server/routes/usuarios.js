var express = require("express");
var router = express.Router();
var usuarioDao = require("../dao/seguridadDao");
const {
  from
} = require("rxjs");
const {
  map
} = require("rxjs/operators");

/* GET users listing. */
router.get("/usuario", function (req, res, next) {
  usuarioDao.getAllUsersPromise().then(val => res.send(val), err => next(err))
});


router.get("/usuario-async", async (req, res, next) => {
  try {
    val = await usuarioDao.getAllUsersPromise();
    res.send(val);
  } catch (err) {
    next(err);
  }
});

router.get("/usuario-rxjs", (req, res, next) => {
  usuarioDao.getAllUsersRxjs().subscribe(val => res.send(val), err => next(err));
});

module.exports = router;
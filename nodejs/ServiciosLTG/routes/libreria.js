var express = require('express');
var router = express.Router();
var libreria = require('../dao/libreria-dao');

/* GET users listing. */
router.get('/autor/findAllClient', function (req, res, next) {
    libreria.autorFindAllClient().then(data => res.json(data)).catch(error => next(error));
});

router.get('/autor/findAllPool', function (req, res, next) {
    libreria.autorFindAllPool().then(data => res.json(data)).catch(error => next(error));
});

module.exports = router;
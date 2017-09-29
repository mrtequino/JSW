module.exports = function (app) {

	var SeguUsuario = require('../models/usuario.js');

	usuarioFindAll = function (req, res) {
		SeguUsuario.find(function (err, usuarios) {
			if (err) res.send(500, err.message);

			console.log('GET /usuarios: ' + usuarios);
			res.status(200).jsonp(usuarios);
		});
	}

	usuarioCreate = function (req, res) {
		console.log('POST');
		console.log(req.body);

		var usuario = new SeguUsuario({
			usuaCodigo: req.body.usuaCodigo,
			usuaUsuario: req.body.usuaUsuario,
			usuaClave: req.body.usuaClave,
			usuaEstado: req.body.usuaEstado
		});
		usuario.save(function (err, usuario) {
			if (err) return res.status(500).send(err.message);
			res.status(200).jsonp(usuario);
		});

	};

	app.get('/usuario/findAll', usuarioFindAll);
	app.post('/usuario/create', usuarioCreate);
}

var express = require("express"),
  app = express(),
  http = require("http"),
  server = http.createServer(app),
  mongoose = require('mongoose');

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

routes = require('./routes/usuario')(app);

mongoose.connect('mongodb://localhost/RestApi', function (err, res) {
  if (err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  console.log('Connected to Database');
});

app.listen(3000, function () {
  console.log("Node server running on http://localhost:3000");
});

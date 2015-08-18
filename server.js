var express    = require('express');
var bodyParser = require('body-parser');
var logger     = require('morgan');
var hbs        = require('hbs');
var path       = require('path');
var mongoose   = require('mongoose');
var fs         = require('fs');

var app = express();


var c = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/kevin';
mongoose.connect(c);
var db = mongoose.connection;
db.on('error', function (err) {
  console.log('mongodb connection error: %s', err);
  process.exit();
});
db.once('open', function () {
  console.log('!*~Successfully connected to mongodb~*!');
  app.emit('dbopen');
});


// middleware
app.use(express.static(path.join(__dirname + '/public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(logger('dev'));
app.use(bodyParser.json());

// Handle known route paths
require('./routes')(app);

// Handle unrecognized requests
require('./404_handler')(app);


module.exports = app;
var express    = require('express');
var bodyParser = require('body-parser');
var hbs        = require('hbs');
var path       = require('path');

var app = express();


// server
var mongoose = require('mongoose'), dbName = 'kevin';
mongoose.connect('mongodb://localhost/'+dbName);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() { console.log('~~ connected to mongodb://'+dbName+' ~~') });


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(bodyParser.json());

// Handle known route paths
require('./routes')(app);

// Handle unrecognized requests
require('./404_handler')(app);


app.listen(3000, function() { console.log('listening'); });
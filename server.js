var express = require('express');
var hbs     = require('hbs');
var path    = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Handle known route paths
require('./routes')(app);

// Handle not recognized requests
require('./404_handler')(app);


app.listen(3000, function() { console.log('listening'); });
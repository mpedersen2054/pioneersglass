var path    = require('path');
var express = require('express');

var app = express();

var staticPath = path.resolve(__dirname, '/public');
app.use(express.static(staticPath));

app.get('/', function(req, res, next) {
  res.send('hello index page!')
})

app.get('*', function(req, res, next) {
  var err = new Error();
  err.status = 404;
  next(err);
});

// handling 404 errors
app.use(function(err, req, res, next) {
  if(err.status !== 404) { return next(); }

  res.send(err.message || '** no unicorns here **');
});


app.listen(3000, function() { console.log('listening'); });
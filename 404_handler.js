module.exports = function(app) {

  app.get('*', function(req, res, next) {
    var err = new Error();
    err.status = 404;
    next(err);
  });

  app.use(function(err, req, res, next) {
    if(err.status !== 404) { return next(); }

    res.send(err.message || '** no unicorns here **');
  });

};
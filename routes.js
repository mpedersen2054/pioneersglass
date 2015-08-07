var db = require('./schema');

module.exports = function(app) {

  app.get('/', function(req, res) {
    db.artworks.find({}, function(err, artworks) {
      res.render('artworks', { artworks: artworks });
    });
  });

  app.get('/artworks/:_id', function(req, res) {
    res.render('artwork', { 'hello': 'single artwork' })
  });

  app.get('/search', function(req, res) {
    // only accept ?term and decode uri
    var term = ('term' in req.query) ? decodeURIComponent(req.query.term) : '';
    db.artworks.find({ name: term }, function(err, artworks) {
      if(err) console.log(err);
      res.render('search', { artworks: artworks, term: term });
    });
  });

};
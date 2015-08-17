var Artwork = require('./schema').artworks;
var RegExp  = require('regex');

module.exports = function(app) {

  app.get('/', function(req, res) {
    Artwork.find({}, function(err, artworks) {
      res.render('artworks', { artworks: artworks });
    });
  });

  app.get('/artworks/:id', function(req, res) {
    Artwork.findOne({ id: req.params.id }, function(err, artwork) {
      if(err) console.log(err);
      if(!artwork) console.log(err);
      res.render('show_artwork', { artwork: artwork });
    });
  });

  app.post('/artworks', function(req, res) {
    var data = req.body;
    var artwork = new Artwork(data);
    artwork.save(function(err, artwork) {
      if(err) console.log(err);
      res.send(artwork + ' saved!');
    });
  });

  app.get('/search', function(req, res) {
    // only accept ?term and decode uri
    var term = ('term' in req.query) ? decodeURIComponent(req.query.term) : '';
    Artwork.find({ name: new RegExp(term, 'i') }, function(err, artworks) {
      if(err) console.log(err);
      res.render('search', { artworks: artworks, term: term });
    });
  });

};
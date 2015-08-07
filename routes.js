module.exports = function(app) {

  // Artworks

  app.get('/', function(req, res) {
    res.render('artworks', { 'hello': 'goodbye' });
  });

  app.get('/artworks/:_id', function(req, res) {
    res.render('artwork', { 'hello': 'single artwork' })
  })

  app.get('/search', function(req, res) {
    console.log('called server /search')
    var term = ('term' in req.query) ? req.query.term : ''; // can only query ?term
    res.render('search', { term: term })

  })

};
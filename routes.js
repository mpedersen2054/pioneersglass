module.exports = function(app) {

  // Artworks

  app.get('/', function(req, res) {
    res.render('artworks', { 'hello': 'goodbye' });
  });

  app.get('/artworks/:_id', function(req, res) {
    res.render('artwork', { 'hello': 'single artwork' })
  })

};
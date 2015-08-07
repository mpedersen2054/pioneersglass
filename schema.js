var mongoose = require('mongoose');

var ArtworkSchema = new mongoose.Schema({
  name: String,
  pid: Number
});

module.exports = {
  artworks: mongoose.model('Artwork', ArtworkSchema)
}
var mongoose = require('mongoose');

var ChildrenSchema = new mongoose.Schema({ ori: Number, url: String });

var ArtworkSchema = new mongoose.Schema({
  id: Number,
  name: String,
  createdAt: { type: Date, default: Date.now },
  addedAt: { type: Date, default: Date.now },
  fcreatedAt: String,
  faddedAt: String,
  uid: String,
  authors: [ String ],
  children: [ChildrenSchema]
});

ArtworkSchema.pre('save', function(next) {
  var artwork = this;
  var cd = artwork.createdAt.toDateString();
  var ad = artwork.addedAt.toDateString();
  artwork.fcreatedAt = cd;
  artwork.faddedAt = ad;
  next();
});

module.exports = {
  artworks: mongoose.model('Artwork', ArtworkSchema)
}
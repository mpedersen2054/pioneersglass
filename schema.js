var mongoose = require('mongoose');

var ChildrenSchema = new mongoose.Schema({ ori: Number, url: String });

var ArtworkSchema = new mongoose.Schema({
  id: Number,
  uid: String,
  name: String,
  createdAt: { type: Date, default: Date.now },
  addedAt: { type: Date, default: Date.now },
  fcreatedAt: String,
  faddedAt: String,
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

ArtworkSchema.statics.findByName = function(name, cb) {
  return this.find({ name: new RegExp(name, 'i') }, cb);
}

module.exports = {
  artworks: mongoose.model('Artwork', ArtworkSchema)
}
// models/galerie_media.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const galerieMediaSchema = new Schema({
  ID_Media: { type: Schema.Types.ObjectId, ref: 'Galerie_Media' },
  Tip_Media: String,
  Descriere: String,
  URL: String
});

const GalerieMedia = mongoose.model('Galerie_Media', galerieMediaSchema);



module.exports = GalerieMedia;

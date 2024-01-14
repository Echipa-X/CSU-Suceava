// models/bilet.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const biletSchema = new Schema({
  ID_Bilet: { type: Schema.Types.ObjectId, ref: 'Bilet' },
  Tip: String,
  Pret: Number,
  ID_Meci: { type: Schema.Types.ObjectId, ref: 'Meci' }
});

const Bilet = mongoose.model('Bilet', biletSchema);


module.exports = Bilet;

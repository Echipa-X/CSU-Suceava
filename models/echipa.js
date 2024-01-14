// models/echipa.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const echipaSchema = new Schema({
  ID_Echipa: { type: Schema.Types.ObjectId, auto: true },
  Nume_Echipa: String,
  An_Infiintare: Number,
  Tip_Echipa: String
});

const Echipa = mongoose.model('Echipa', echipaSchema);


module.exports = Echipa;

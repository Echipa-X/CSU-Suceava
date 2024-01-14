// models/clasament.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clasamentSchema = new Schema({
  ID_Clasament: { type: Schema.Types.ObjectId, ref: 'Clasament' },
  ID_Echipa: { type: Schema.Types.ObjectId, ref: 'Echipa' },
  Meciuri_Jucate: Number,
  Victorii: Number,
  Infrangeri: Number,
  Egaluri: Number,
  Punctaj_Total: Number,
  Pozitie_Clasament: Number
});

const Clasament = mongoose.model('Clasament', clasamentSchema);


module.exports = Clasament;

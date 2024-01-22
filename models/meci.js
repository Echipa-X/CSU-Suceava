// models/meci.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const meciSchema = new Schema({
  ID_Meci: { type: Schema.Types.ObjectId, ref: 'Meci' },
  ID_Echipa: { type: Schema.Types.ObjectId, ref: 'Echipa' },
  Nume_Echipa_Oponenta: String,
  Scor_Gazda: Number,
  Scor_Echipa_Oponenta: Number,
  Ora_Start: Date,
  Ora_Final: Date
});

const Meci = mongoose.model('Meci', meciSchema);



module.exports = Meci;

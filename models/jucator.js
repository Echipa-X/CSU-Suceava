// models/jucator.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definește modelul Jucator
const jucatorSchema = new Schema({
  ID_Jucator: { type: Schema.Types.ObjectId, ref: 'Jucator' },
  ID_Echipa: { type: Schema.Types.ObjectId, ref: 'Echipa' },
  Nume: String,
  Prenume: String,
  Data_nasterii: Date,
  Inaltime: Number,
  Nationalitate: String,
  ID_Media: { type: Schema.Types.ObjectId, ref: 'Galerie_Media' }
});

// Exportă modelul Jucator
const Jucator = mongoose.model('Jucator', jucatorSchema);
module.exports = Jucator;


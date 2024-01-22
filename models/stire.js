// models/stire.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stireSchema = new Schema({
  ID_Stire: { type: Schema.Types.ObjectId, ref: 'Stire' },
  Titlu_Stire: String,
  Continut_Stire: String,
  Data_Publicarii: Date,
  Autor: String
});

const Stire = mongoose.model('Stire', stireSchema);


module.exports = Stire;

// models/antrenor.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const antrenorSchema = new Schema({
  ID_Personal: { type: Schema.Types.ObjectId, ref: 'Personal' },
  Data_Start: Date,
  Data_Final: Date,
  ID_Echipa: { type: Schema.Types.ObjectId, ref: 'Echipa' }
});

const Antrenor = mongoose.model('Antrenor', antrenorSchema);


module.exports = Antrenor;

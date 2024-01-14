// models/personal.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personalSchema = new Schema({
  ID_Personal: { type: Schema.Types.ObjectId, ref: 'Personal' },
  Nume: String,
  Prenume: String,
  Data_Angajarii: Date,
  Rol: String,
  ID_Manager: { type: Schema.Types.ObjectId, ref: 'Personal' }
});

const Personal = mongoose.model('Personal', personalSchema);


module.exports = Personal;

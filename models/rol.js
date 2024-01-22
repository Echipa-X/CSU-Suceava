// models/rol.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rolSchema = new Schema({
  Nume_Rol: String,
  Data_Start: Date,
  Data_Final: Date,
  ID_Jucator: { type: Schema.Types.ObjectId, ref: 'Jucator' }
});

const Rol = mongoose.model('Rol', rolSchema);



module.exports = Rol;

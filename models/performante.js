// models/performante.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const performantaSchema = new Schema({
  ID_Performanta: { type: Schema.Types.ObjectId, ref: 'Performanta' },
  ID_Jucator: { type: Schema.Types.ObjectId, ref: 'Jucator' },
  Locul: Number,
  Descrierea: String,
  Perioada: Date
});

const Performanta = mongoose.model('Performanta', performantaSchema);



module.exports = Performanta;

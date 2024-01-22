// models/log_in.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logInSchema = new Schema({
  Nume: String,
  Prenume: String,
  Adresa_Email: String,
  Parola: String,
  Rol: String
});

const LogIn = mongoose.model('Log_in', logInSchema);


module.exports = LogIn;

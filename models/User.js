//models/User.js
const mongoose = require('mongoose');

// Definirea schemei pentru modelul User
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true  // Asigură-te că adaugi această opțiune dacă vrei ca adresele de email să fie unice
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
});

// Crearea modelului User
const User = mongoose.model('User', userSchema);

// Exportarea modelului User
module.exports = User;
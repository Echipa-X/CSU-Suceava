// routes/authRoutes.js
const express = require('express');
const router = express.Router();

const User = require('../models/User');

// Autentificarea utilizatorului
router.post('/login', async (req, res) => {
  // Implementarea logicii de autentificare
});

// Înregistrarea unui nou utilizator
router.post('/signup', async (req, res) => {
  // Implementarea logicii de înregistrare
});

module.exports = router;

// routes/log_in.js
const express = require('express');
const router = express.Router();
const LogIn = require('../models/log_in');

router.post('/', async (req, res) => {
  try {
    const logInNou = await LogIn.create(req.body);
    res.json(logInNou);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Alte rute pentru operatii CRUD cu Log_in
// Ruta pentru obținerea tuturor logInurilor
router.get('/', async (req, res) => {
  try {
    const logInuri = await LogIn.find();
    res.json(logInuri);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Ruta pentru obținerea unei logInuri
router.get('/:id', async(req, res) => {
  try {
    const logIn = await LogIn.findById(req.params.id)
    res.json(logIn);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Ruta pentru modificarea unei logInuri existente
router.put('/:id', async(req, res) => {
  try {
    const logIn = await LogIn.findByIdAndUpdate(req.params.id, req.body);
    res.json(logIn);
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
});
// Ruta pentru stergerea unei logInuri existente
router.delete('/:id', async(req, res) => {
  try {
    const id = req.params.id;
    const deleted = await LogIn.findByIdAndDelete(id);
    res.json({ message: deleted.message});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;

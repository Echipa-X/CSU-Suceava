// routes/personal.js
const express = require('express');
const router = express.Router();
const Personal = require('../models/personal');

// Ruta pentru obținerea tuturor personalelor
router.get('/', async (req, res) => {
  try {
    const personal = await Personal.find();
    res.json(personal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Ruta pentru obținerea unui personal
router.get('/:id', async(req, res) => {
  try {
    const personal = await Personal.findById(req.params.id)
    res.json(personal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Ruta pentru adaugarea unui personal nou
router.post('/', async (req, res) => {
  try {
    const personalNou = await Personal.create(req.body);
    res.json(personalNou);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Alte rute pentru operatii CRUD cu Personal
// Ruta pentru modificarea unui personal existent
router.put('/:id', async(req, res) => {
  try {
    const personal = await Personal.findByIdAndUpdate(req.params.id, req.body);
    res.json(personal);
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
});
// Ruta pentru stergerea unui personal existent
router.delete('/:id', async(req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Personal.findByIdAndDelete(id);
    res.json({ message: deleted.message});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;

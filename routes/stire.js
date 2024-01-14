// routes/stire.js
const express = require('express');
const router = express.Router();
const Stire = require('../models/stire');
// Ruta pentru obținerea tuturor stirilor
router.get('/', async (req, res) => {
  try {
    const stiri = await Stire.find();
    res.json(stiri);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Ruta pentru obținerea unei stiri
router.get('/:id', async(req, res) => {
  try {
    const stire = await Stire.findById(req.params.id)
    res.json(stire);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post('/', async (req, res) => {
  try {
    const stireNoua = await Stire.create(req.body);
    res.json(stireNoua);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Alte rute pentru operatii CRUD cu Stire
// Ruta pentru modificarea unei stiri existente
router.put('/:id', async(req, res) => {
  try {
    const stire = await Stire.findByIdAndUpdate(req.params.id, req.body);
    res.json(stire);
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
});
// Ruta pentru stergerea unei stiri existente
router.delete('/:id', async(req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Stire.findByIdAndDelete(id);
    res.json({ message: deleted.message});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;

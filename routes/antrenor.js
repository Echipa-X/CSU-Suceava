// routes/antrenor.js
const express = require('express');
const router = express.Router();
const Antrenor = require('../models/antrenor');

// Ruta pentru obținerea tuturor antrenorilor
router.get('/', async (req, res) => {
  try {
    const antrenori = await Antrenor.find();
    res.json(antrenori);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Ruta pentru obținerea unei antrenori
router.get('/:id', async(req, res) => {
  try {
    const antrenor = await Antrenor.findById(req.params.id)
    res.json(antrenor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Ruta pentru adaugarea unei echpe noi
router.post('/', async (req, res) => {
  try {
    const antrenorNou = await Antrenor.create(req.body);
    res.json(antrenorNou);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Alte rute pentru operatii CRUD cu Antrenor
// Ruta pentru modificarea unei antrenori existente
router.put('/:id', async(req, res) => {
  try {
    const antrenor = await Antrenor.findByIdAndUpdate(req.params.id, req.body);
    res.json(antrenor);
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
});
// Ruta pentru stergerea unei antrenori existente
router.delete('/:id', async(req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Antrenor.findByIdAndDelete(id);
    res.json({ message: deleted.message});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;

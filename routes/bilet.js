// routes/bilet.js
const express = require('express');
const router = express.Router();
const Bilet = require('../models/bilet');
// Ruta pentru obținerea tuturor biletelor
router.get('/', async (req, res) => {
  try {
    const bilete = await Bilet.find();
    res.json(bilete);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Ruta pentru obținerea unei bilete
router.get('/:id', async(req, res) => {
  try {
    const bilet = await Bilet.findById(req.params.id)
    res.json(bilet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Ruta pentru adaugarea unei echpe noi
router.post('/', async (req, res) => {
  try {
    const biletNou = await Bilet.create(req.body);
    res.json(biletNou);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Alte rute pentru operatii CRUD cu Bilet
// Ruta pentru modificarea unei bilete existente
router.put('/:id', async(req, res) => {
  try {
    const bilet = await Bilet.findByIdAndUpdate(req.params.id, req.body);
    res.json(bilet);
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
});
// Ruta pentru stergerea unei bilete existente
router.delete('/:id', async(req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Bilet.findByIdAndDelete(id);
    res.json({ message: deleted.message});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;

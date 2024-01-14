// routes/performante.js
const express = require('express');
const router = express.Router();
const Performante = require('../models/performante');

// Ruta pentru obținerea tuturor performantelor
router.get('/', async (req, res) => {
  try {
    const performante = await Performante.find();
    res.json(performante);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Ruta pentru obținerea unei performante
router.get('/:id', async(req, res) => {
  try {
    const performanta = await Performante.findById(req.params.id)
    res.json(performanta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post('/', async (req, res) => {
  try {
    const performantaNoua = await Performante.create(req.body);
    res.json(performantaNoua);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// Alte rute pentru operatii CRUD cu Performante
// Ruta pentru modificarea unei performantae existente
router.put('/:id', async(req, res) => {
  try {
    const performanta = await Performante.findByIdAndUpdate(req.params.id, req.body);
    res.json(performanta);
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
});
// Ruta pentru stergerea unei performanta existente
router.delete('/:id', async(req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Performante.findByIdAndDelete(id);
    res.json({ message: deleted.message});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

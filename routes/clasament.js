// routes/clasament.js
const express = require('express');
const router = express.Router();
const Clasament = require('../models/clasament');

// Ruta pentru obținerea tuturor clasamentelor
router.get('/', async (req, res) => {
  try {
    const clasamente = await Clasament.find();
    res.json(clasamente);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Ruta pentru obținerea unei clasamente
router.get('/:id', async(req, res) => {
  try {
    const clasament = await Clasament.findById(req.params.id)
    res.json(clasament);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Ruta pentru adaugarea unei echpe noi

router.post('/', async (req, res) => {
  try {
    const clasamentNou = await Clasament.create(req.body);
    res.json(clasamentNou);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Alte rute pentru operatii CRUD cu Clasament
// Ruta pentru modificarea unei clasamente existente
router.put('/:id', async(req, res) => {
  try {
    const clasament = await Clasament.findByIdAndUpdate(req.params.id, req.body);
    res.json(clasament);
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
});
// Ruta pentru stergerea unei clasamente existente
router.delete('/:id', async(req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Clasament.findByIdAndDelete(id);
    res.json({ message: deleted.message});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;

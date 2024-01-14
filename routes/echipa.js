// routes/echipa.js
const express = require('express');
const router = express.Router();
const Echipa = require('../models/echipa');

// Ruta pentru obținerea tuturor echipelor
router.get('/', async (req, res) => {
  try {
    const echipe = await Echipa.find();
    res.json(echipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Ruta pentru obținerea unei echipe
router.get('/:id', async(req, res) => {
  try {
    const echipa = await Echipa.findById(req.params.id)
    res.json(echipa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Ruta pentru adaugarea unei echpe noi
router.post('/', async (req, res) => {
  try {
    const echipaNoua = await Echipa.create(req.body);
    res.json(echipaNoua);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
// Ruta pentru modificarea unei echipe existente
router.put('/:id', async(req, res) => {
  try {
    const echipa = await Echipa.findByIdAndUpdate(req.params.id, req.body);
    res.json(echipa);
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
});
// Ruta pentru stergerea unei echipe existente
router.delete('/:id', async(req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Echipa.findByIdAndDelete(id);
    res.json({ message: deleted.message});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



module.exports = router;

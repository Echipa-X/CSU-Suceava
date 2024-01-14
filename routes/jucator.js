// routes/jucator.js
const express = require('express');
const router = express.Router();
const Jucator = require('../models/jucator');

// Ruta pentru obținerea tuturor jucătorilor
router.get('/', async (req, res) => {
  try {
    const jucatori = await Jucator.find();
    res.json(jucatori);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Ruta pentru obținerea unei jucator
router.get('/:id', async(req, res) => {
  try {
    const jucator = await Jucator.findById(req.params.id)
    res.json(jucator);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Ruta pentru adaugarea unei echpe noi
router.post('/', async (req, res) => {
  try {
    const jucatorNou = await Jucator.create(req.body);
    res.json(jucatorNou);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
// Ruta pentru modificarea unui jucator existent
router.put('/:id', async(req, res) => {
  try {
    const jucator = await Jucator.findByIdAndUpdate(req.params.id, req.body);
    res.json(jucator);
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
});
// Ruta pentru stergerea unui jucator existent
router.delete('/:id', async(req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Jucator.findByIdAndDelete(id);
    res.json({ message: deleted.message});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;

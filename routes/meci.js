// routes/meci.js
const express = require('express');
const router = express.Router();
const Meci = require('../models/meci');

router.get('/', async (req, res) => {
  try {
    const meciuri = await Meci.find();
    res.json(meciuri);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Ruta pentru obținerea unui meci
router.get('/:id', async(req, res) => {
  try {
    const meci = await Meci.findById(req.params.id)
    res.json(meci);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post('/', async (req, res) => {
  try {
    const meciNou = await Meci.create(req.body);
    res.json(meciNou);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Alte rute pentru operatii CRUD cu Meci
// Ruta pentru modificarea unei meciuri existente
router.put('/:id', async(req, res) => {
  try {
    const meci = await Meci.findByIdAndUpdate(req.params.id, req.body);
    res.json(meci);
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
});
// Ruta pentru stergerea unei meciuri existente
router.delete('/:id', async(req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Meci.findByIdAndDelete(id);
    res.json({ message: deleted.message});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

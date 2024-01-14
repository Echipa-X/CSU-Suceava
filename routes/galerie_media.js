// routes/galerie_media.js
const express = require('express');
const router = express.Router();
const GalerieMedia = require('../models/galerie_media');
// Ruta pentru obținerea tuturor galeriilor
router.get('/', async (req, res) => {
  try {
    const galerii = await GalerieMedia.find();
    res.json(galerii);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Ruta pentru obținerea unei galerii
router.get('/:id', async(req, res) => {
  try {
    const galeria = await GalerieMedia.findById(req.params.id)
    res.json(galeria);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post('/', async (req, res) => {
  try {
    const mediaNoua = await GalerieMedia.create(req.body);
    res.json(mediaNoua);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Alte rute pentru operatii CRUD cu Galerie_Media
// Ruta pentru modificarea unei galerii existente
router.put('/:id', async(req, res) => {
  try {
    const galeria = await GalerieMedia.findByIdAndUpdate(req.params.id, req.body);
    res.json(galeria);
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
});
// Ruta pentru stergerea unei galerii existente
router.delete('/:id', async(req, res) => {
  try {
    const id = req.params.id;
    const deleted = await GalerieMedia.findByIdAndDelete(id);
    res.json({ message: deleted.message});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;

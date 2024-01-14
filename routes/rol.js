// routes/rol.js
const express = require('express');
const router = express.Router();
const Rol = require('../models/rol');

// Ruta pentru obținerea tuturor rolurilor
router.get('/', async (req, res) => {
  try {
    const roluri = await Rol.find();
    res.json(roluri);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Ruta pentru obținerea unei roluri
router.get('/:id', async(req, res) => {
  try {
    const rol = await Rol.findById(req.params.id)
    res.json(rol);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post('/', async (req, res) => {
  try {
    const rolNou = await Rol.create(req.body);
    res.json(rolNou);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Alte rute pentru operatii CRUD cu Rol
// Ruta pentru modificarea unei roluri existente
router.put('/:id', async(req, res) => {
  try {
    const rol = await Rol.findByIdAndUpdate(req.params.id, req.body);
    res.json(rol);
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
});
// Ruta pentru stergerea unei roluri existente
router.delete('/:id', async(req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Rol.findByIdAndDelete(id);
    res.json({ message: deleted.message});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;


const mongoose = require('mongoose');

const stireSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

const Stire = mongoose.model('Stire', stireSchema);

module.exports = Stire;

const mongoose = require('mongoose');
const config = require('../config/database');
const Schema = mongoose.Schema;

// Place Schema - images to be added
const PlaceSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  }
});

const Place = module.exports = mongoose.model('Place', PlaceSchema);

const mongoose = require('mongoose');
const config = require('../config/database');
const Schema = mongoose.Schema;

// Request Schema
const RequestSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  request_for: {
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
  },
  urgency: {
    type: String
  },
  expertise: {
    type: String
  },
  author_id: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  author_type: {
    type: String,
    required: true    
  }
});

const Request = module.exports = mongoose.model('Request', RequestSchema);

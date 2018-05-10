
const mongoose = require('mongoose');
const config = require('../config/database');
const Schema = mongoose.Schema;

// Team Schema - images to be added
const TeamSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  website: {
    type: String
  },
  twitter: {
    type: String
  },
  facebook: {
    type: String
  },
  base_location: {
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
  admin_ids: {
    type: String,
    required: true
  },
  admin_names: {
    type: String,
    required: true    
  },
  members: [{
    id: String,
    name: String
  }],
  date_created: {
    type: Date, 
    required: true, 
    default: Date.now
  }
});

const Team = module.exports = mongoose.model('Team', TeamSchema);
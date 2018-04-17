
const mongoose = require('mongoose');
const config = require('../config/database');
const Schema = mongoose.Schema;

// Feedback Schema
const FeedbackSchema = mongoose.Schema({
  comment: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  user_name: {
    type: String,
    required: true    
  },
  page_id: {
    type: String,
    required: true
  },
  page_name: {
    type: String,
    required: true    
  },
  date_created: {
    type: Date, 
    required: true, 
    default: Date.now
  }
});

const Feedback = module.exports = mongoose.model('Feedback', FeedbackSchema);
const mongoose = require('mongoose');
const config = require('../config/database');

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
  urgency: {
    type: String
  },
  expertise: {
    type: String
  }
});

const Request = module.exports = mongoose.model('Request', RequestSchema);

module.exports.addRequest = function(newRequest, callback){
    newRequest.save(callback);
}

module.exports.getRequestById = function(id, callback){
  Request.findById(id, callback);
}


var findUserByUsername = function (username, callback) {
  // Perform database query that calls callback when it's done
  // This is our fake database!

};

//module.exports.getUserByEmail = function(email, callback){
//  const query = {email: email}
//  User.findOne(query, callback);
//}
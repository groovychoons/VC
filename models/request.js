const mongoose = require('mongoose');
const config = require('../config/database');
var Schema = mongoose.Schema;


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
  },
  author: {
   type: Schema.Types.ObjectId, 
   ref: 'User', 
  // required: true
 }
});

const Request = module.exports = mongoose.model('Request', RequestSchema);

module.exports.addRequest = function(newRequest, callback){
    newRequest.save(callback);
}

module.exports.getRequestById = function(id, callback){
  Request.findById(id, callback);
}

module.exports.getRequests = function(callback){
  Request.find({}, callback);
}



//module.exports.getUserByEmail = function(email, callback){
//  const query = {email: email}
//  User.findOne(query, callback);
//}
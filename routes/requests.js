const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const User = require('../models/user');
const Request = require('../models/request');


// Register
router.post('/add', (req, res, next) => {
  let newRequest = new Request({
    title: req.body.title,
    request_for: req.body.request_for,
    description: req.body.description,
    location: req.body.location,
    urgency: req.body.urgency,
    expertise: req.body.expertise
  });

  Request.addRequest(newRequest, (err, request) => {
    if(err){
      res.json({success: false, msg:'Failed to submit request'});
    } else {
      res.json({success: true, msg:'Request submitted!'});
    }
  });
});


// Profile
router.get('/get/:id', (req, res, next) => {

  Request.getRequestById(req.params.id, (err, request) => {
    if(err){
      return res.json({success: false, msg: 'Request not found'});
    }
    res.json({
        success: true,
        request: {
          id: request._id,
          title: request.title,
          request_for: request.request_for,
          description: request.description,
          location: request.location,
          urgency: request.urgency,
          expertise: request.expertise
        }
      });
    })
});

router.get('/get/', (req, res, next) => {

  Request.getRequests((err, requests) => {
    if(err){
      return res.json({success: false, msg: 'Requests not found'});
    }
    var data = []
    requests.forEach(function(request){
      data.push({
          id: request._id,
          title: request.title,
          request_for: request.request_for,
          description: request.description,
          location: request.location,
          urgency: request.urgency,
          expertise: request.expertise
      });
    });
    res.json({
        success: true,
        data: data,
      });
    })
});

module.exports = router;

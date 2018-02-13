const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const Request = require('../models/request');
const User = require('../models/user');

// Create request
router.post('/add', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  let newRequest = new Request({
    title: req.body.title,
    request_for: req.body.request_for,
    description: req.body.description,
    location: req.body.location,
    urgency: req.body.urgency,
    expertise: req.body.expertise,
    author: req.user._id
  });

  Request.addRequest(newRequest, (err, request) => {
    if(err){
      res.json({success: false, msg:'Failed to submit request'});
    } else {
      res.json({success: true, msg:'Request submitted!'});
    }
  });
});


// Get request
router.get('/get/:id', (req, res, next) => {

  Request.getRequestById(req.params.id, (err, request) => {
    if(err){
      return res.json({success: false, msg: 'Request not found'});
    }
    else {
      User.findById(request.author, function(err, user){
        if(err){
          return res.json({success: false, msg: 'Error: user not found'});
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
        },
        user: {
          id: user._id,
          email: user.email,
          f_name: user.f_name,
          l_name: user.l_name,
        }
      });
    });

    }
  })
});

// Get all requests
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


// Update request
router.patch('/update/:id', (req, res, next) => {
  let request = {};

  request.title = req.body.title,
  request.request_for = req.body.request_for,
  request.description = req.body.description,
  request.location = req.body.location,
  request.urgency = req.body.urgency,
  request.expertise = req.body.expertise
  
  let query = {_id:req.params.id}

  Request.update(query, request, function(err){
    if(err){
      res.json({success: false, msg:'Failed to submit request'});
    } else {
      res.json({success: true, msg:'Request updated!'});
    }
  });
});



// Delete request
router.delete('/delete/:id', (req, res, next) => {

  Request.findByIdAndRemove(req.params.id, (err, request) => {
    if(err){
      return res.json({success: false, msg: 'Something went wrong'});
    }
    else {
      return res.json({success: true, msg: 'Request ' + req.params.id + ' deleted'});
    }
  })

});





module.exports = router;

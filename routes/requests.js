const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const Request = require('../models/request');
const User = require('../models/user');
const Team = require('../models/team');

// Create request
router.post('/add', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  let newRequest = new Request({
    title: req.body.title,
    request_for: req.body.request_for,
    description: req.body.description,
    location: req.body.location,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    urgency: req.body.urgency,
    expertise: req.body.expertise,
    author_id: req.body.author_id,
    author: req.body.author,
    author_type: req.body.author_type
  });

  newRequest.save((err, request) => {
    if(err){
      res.json({success: false, msg:'Failed to submit request'});
    } else {
      res.json({success: true, msg:'Request submitted!'});
    }
  });
});


// Get request
router.get('/get/:id', (req, res, next) => {

    Request.findById(req.params.id, (err, request) => {
    if(err){
      return res.json({success: false, msg: 'Request not found'});
    }
    else {
        res.json({
        success: true,
        request: {
          id: request._id,
          title: request.title,
          request_for: request.request_for,
          description: request.description,
          location: request.location,
          latitude: request.latitude,
          longitude: request.longitude,
          urgency: request.urgency,
          expertise: request.expertise,
          author: request.author,
          author_id: request.author_id,
          author_type: request.author_type
        }
      });

    }
  })
});


// Get all requests
router.get('/get/', (req, res, next) => {

    Request.find({}, (err, requests) => {
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
          latitude: request.latitude,
          longitude: request.longitude,      
          urgency: request.urgency,
          expertise: request.expertise,
          author: request.author
        });
      });
      res.json({
        success: true,
        data: data,
      });
  })

});


// Update request
router.patch('/update/:id', passport.authenticate('jwt', {session:false}), (req, res, next) => {
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
router.delete('/delete/:id', passport.authenticate('jwt', {session:false}), (req, res, next) => {

  Request.findByIdAndRemove(req.params.id, (err, request) => {
    if(err){
      return res.json({success: false, msg: 'Something went wrong'});
    }
    else {
      return res.json({success: true, msg: 'Request ' + req.params.id + ' deleted'});
    }
  })

});


// Get requests of user
router.get('/getbyuser/:id', (req, res, next) => {

    User.findById(req.params.id, (err, user) => {
    if(err){
      return res.json({success: false, msg: 'User not found'});
    }
    else {
      Request.find({}, (err, requests) => {
        if(err){
          return res.json({success: false, msg: 'Requests not found'});
        }
      var data = []
      requests.forEach(function(request){
        if(request.author_id == req.params.id){
        data.push({
          id: request._id,
          title: request.title,
          request_for: request.request_for,
          description: request.description,
          location: request.location,
          latitude: request.latitude,
          longitude: request.longitude,      
          urgency: request.urgency,
          expertise: request.expertise,
          author: request.author
        });
        }
    });
      res.json({
        success: true,
        data: data,
      });
  })
  }
  })
});

// Get requests of team
router.get('/getbyteam/:id', (req, res, next) => {

    Team.findById(req.params.id, (err, user) => {
    if(err){
      return res.json({success: false, msg: 'Team not found'});
    }
    else {
      Request.find({}, (err, requests) => {
        if(err){
          return res.json({success: false, msg: 'Requests not found'});
        }
      var data = []
      requests.forEach(function(request){
        if(request.author_id == req.params.id){
        data.push({
          id: request._id,
          title: request.title,
          request_for: request.request_for,
          description: request.description,
          location: request.location,
          latitude: request.latitude,
          longitude: request.longitude,      
          urgency: request.urgency,
          expertise: request.expertise,
          author: request.author
        });
        }
    });
      res.json({
        success: true,
        data: data,
      });
  })
  }
  })
});

// Search query
router.get('/search', function(req, res) {
  Request.find({"title": {"$regex": req.query.title} }, function(err, requests) {
    if(err){
      return res.json({success: false, msg: 'None found'});
    }
    else {
      return res.json({
        success: true,
        querystring_title: req.query.title,
        requests: requests
      })
    }
  }
  );
});

module.exports = router;

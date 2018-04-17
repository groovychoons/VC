const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const Place = require('../models/place');
const Request = require('../models/request');
const User = require('../models/user');

// Create place
router.post('/add', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  let newPlace = new Place({
    name: req.body.name,
    description: req.body.description,
    location: req.body.location,
    latitude: req.body.latitude,
    longitude: req.body.longitude
  });

  newPlace.save((err, request) => {
    if(err){
      res.json({success: false, msg:'Failed to submit place'});
    } else {
      res.json({success: true, msg:'Place submitted!'});
    }
  });
});


// Get place
router.get('/get/:id', (req, res, next) => {

    Place.findById(req.params.id, (err, team) => {
    if(err){
      return res.json({success: false, msg: 'Place not found'});
    }
    else {
        res.json({
        success: true,
        request: {
        	id: team._id,
    		  name: team.name,
   			  description: team.description,
    		  location: team.location,
    		  latitude: team.latitude,
    		  longitude: team.longitude
        },
    });

    }
  })
});


// Get all places
router.get('/get/', (req, res, next) => {

    Place.find({}, (err, teams) => {
    if(err){
      return res.json({success: false, msg: 'Places not found'});
    }
    var data = []
    teams.forEach(function(team){
        data.push({
        	id: team._id,
    		  name: team.name,
   			  description: team.description,
    		  location: team.location,
    		  latitude: team.latitude,
    		  longitude: team.longitude	
        });
      });
      res.json({
        success: true,
        data: data,
      });
  })

});


// Delete place
router.delete('/delete/:id', passport.authenticate('jwt', {session:false}), (req, res, next) => {

  Place.findByIdAndRemove(req.params.id, (err, team) => {
    if(err){
      return res.json({success: false, msg: 'Something went wrong'});
    }
    else {
      return res.json({success: true, msg: 'Place ' + req.params.id + ' deleted'});
    }
  })
});


module.exports = router;

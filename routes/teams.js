const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const Team = require('../models/team');
const Request = require('../models/request');
const User = require('../models/user');

// Create request
router.post('/add', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  let newTeam = new Team({
    name: req.body.name,
    description: req.body.description,
    website: req.body.website,
    twitter: req.body.twitter,
    facebook: req.body.facebook,
    base_location: req.body.base_location,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    admin_ids: req.user._id,
    admin_names: req.user.f_name + " " + req.user.l_name
  });

  newTeam.save((err, request) => {
    if(err){
      res.json({success: false, msg:'Failed to submit organisation'});
    } else {
      res.json({success: true, msg:'Organisation submitted!'});
    }
  });
});


// Get team
router.get('/get/:id', (req, res, next) => {

    Team.findById(req.params.id, (err, team) => {
    if(err){
      return res.json({success: false, msg: 'Organisation not found'});
    }
    else {
        res.json({
        success: true,
        request: {
        	id: team._id,
    		name: team.name,
   			description: team.description,
    		website: team.website,
    		twitter: team.twitter,
    		facebook: team.facebook,
    		base_location: team.base_location,
    		latitude: team.latitude,
    		longitude: team.longitude,
    		admin_ids: team.admin_ids,
    		admin_names: team.admin_names,
    		member_ids: team.member_ids,
    		member_names: team.member_names  		
        },
    });

    }
  })
});


// Get all teams
router.get('/get/', (req, res, next) => {

    Team.find({}, (err, teams) => {
    if(err){
      return res.json({success: false, msg: 'Organisations not found'});
    }
    var data = []
    teams.forEach(function(team){
        data.push({
        	id: team._id,
    		name: team.name,
   			description: team.description,
    		website: team.website,
    		twitter: team.twitter,
    		facebook: team.facebook,
    		base_location: team.base_location,
    		latitude: team.latitude,
    		longitude: team.longitude,
    		admin_ids: team.admin_ids,
    		admin_names: team.admin_names,
    		member_ids: team.member_ids,
    		member_names: team.member_names  		
        });
      });
      res.json({
        success: true,
        data: data,
      });
  })

});

module.exports = router;

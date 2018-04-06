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
    		members: team.members  		
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
    		  members: team.members
        });
      });
      res.json({
        success: true,
        data: data,
      });
  })

});

// Get teams by user ID

router.get('/getbyuser/:id', (req, res, next) => {

    User.findById(req.params.id, (err, user) => {
    if(err){
      return res.json({success: false, msg: 'User not found'});
    }
    else {
      Team.find({}, (err, teams) => {
        if(err){
          return res.json({success: false, msg: 'Teams not found'});
        }
      var data = []
      teams.forEach(function(team){
        if(team.admin_ids == req.params.id){
        data.push({
          id: team._id,
          name: team.name
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

// Add team admin
router.patch('/add/:teamid/:adminid', passport.authenticate('jwt', {session:false}), (req, res, next) => {

});

// Add team member
router.patch('/add/:teamid/:memberid', passport.authenticate('jwt', {session:false}), (req, res, next) => {

});

// Delete team
router.delete('/delete/:id', passport.authenticate('jwt', {session:false}), (req, res, next) => {

  Team.findByIdAndRemove(req.params.id, (err, team) => {
    if(err){
      return res.json({success: false, msg: 'Something went wrong'});
    }
    else {
      return res.json({success: true, msg: 'Organisation ' + req.params.id + ' deleted'});
    }
  })
});


module.exports = router;

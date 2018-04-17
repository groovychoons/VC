const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const Feedback = require('../models/feedback')
const Place = require('../models/place');
const Team = require('../models/team');
const User = require('../models/user');

// Create feedback
router.post('/add', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  let newFeedback = new Feedback({
    comment: req.body.comment,
    page_id: req.body.page_id,
    page_name: req.body.page_name,
    user_id: req.user._id,
    user_name: req.user.f_name + " " + req.user.l_name
  });

  newFeedback.save((err, request) => {
    if(err){
      res.json({success: false, msg:'Failed to submit feedback'});
    } else {
      res.json({success: true, msg:'Feedback submitted!'});
    }
  });
});

// Get feedback by id
router.get('/get/:id', (req, res, next) => {

    Feedback.findById(req.params.id, (err, feedback) => {
    if(err){
      return res.json({success: false, msg: 'Comment not found'});
    }
    else {
        res.json({
        success: true,
        request: {
        	id: feedback._id,
    		  comment: feedback.comment,
          user_id: feedback.user_id,
          user_name: feedback.user_name,
          page_id: feedback.page_id,
          page_name: feedback.page_name,
          date_created: feedback.date_created
        },
    });
    }
  })
});


// Get feedback for team
router.get('/getbyteam/:id', (req, res, next) => {

    Team.findById(req.params.id, (err, team) => {
    if(err){
      return res.json({success: false, msg: 'Organisation not found'});
    }

    else {
      Feedback.find({}, (err, feedbacks) => {
        if(err){
          return res.json({success: false, msg: 'Feedback not found'});
        }
      var data = []
      feedbacks.forEach(function(feedback){
        if(feedback.page_id == req.params.id){
        data.push({
          id: feedback._id,
          comment: feedback.comment,
          user_id: feedback.user_id,
          user_name: feedback.user_name,
          page_id: feedback.page_id,
          page_name: feedback.page_name,
          date_created: feedback.date_created
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


// Get feedback for place
router.get('/getbyplace/:id', (req, res, next) => {

    Place.findById(req.params.id, (err, place) => {
    if(err){
      return res.json({success: false, msg: 'Place not found'});
    }

    else {
      Feedback.find({}, (err, feedbacks) => {
        if(err){
          return res.json({success: false, msg: 'Feedback not found'});
        }
      var data = []
      feedbacks.forEach(function(feedback){
        if(feedback.page_id == req.params.id){
        data.push({
          id: feedback._id,
          comment: feedback.comment,
          user_id: feedback.user_id,
          user_name: feedback.user_name,
          page_id: feedback.page_id,
          page_name: feedback.page_name,
          date_created: feedback.date_created
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


// Get all places
router.get('/get/', (req, res, next) => {

    Feedback.find({}, (err, feedbacks) => {
    if(err){
      return res.json({success: false, msg: 'Feedback not found'});
    }
    var data = []
    feedbacks.forEach(function(feedback){
        data.push({
        	id: feedback._id,
    		  comment: feedback.comment,
   			  user_name: feedback.user_name,
          page_id: feedback.page_id,
          page_name: feedback.page_name,
          date_created: feedback.date_created
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

  Feedback.findByIdAndRemove(req.params.id, (err, feedback) => {
    if(err){
      return res.json({success: false, msg: 'Something went wrong'});
    }
    else {
      return res.json({success: true, msg: 'Feedback ' + req.params.id + ' deleted'});
    }
  })
});


module.exports = router;

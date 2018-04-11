const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const User = require('../models/user');
const Request = require('../models/request');

// Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    email: req.body.email,
    f_name: req.body.f_name,
    l_name: req.body.l_name,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register user'});
    } else {
      res.json({success: true, msg:'User registered'});
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.getUserByEmail(email, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw error;
      if(isMatch){
        const token = jwt.sign({data:user}, config.secret, {
          expiresIn: 604800 // 1 week in seconds
        });

      res.json({
        success: true,
        token: 'JWT ' + token,
        user: {
          id: user._id,
          email: user.email,
          f_name: user.f_name,
          l_name: user.l_name,
        }
      });
      }

      else {
        return res.json({success: false, msg: 'Wrong password'});
      }

    });
  })
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});


// Get User by ID
router.get('/getbyuser/:id', (req, res, next) => {

    User.findById(req.params.id, (err, user) => {
    if(err){
      return res.json({success: false, msg: 'User not found'});
    }
    else {
      res.json({
        success: true,
        user: {
          id: user._id,
          email: user.email,
          f_name: user.f_name,
          l_name: user.l_name,
        }
      });
    }
  })
});

// Delete Account & All Associated Requests
router.delete('/delete/:id', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  
  User.findById(req.params.id, (err, user) => {
    if(err){
      return res.json({success: false, msg: 'User not found'});
    }

    else {
      // Find all requests
      Request.find({}, (err, requests) => {
        if(err){
          return res.json({success: false, msg: 'Requests not found'});
        }
        requests.forEach(function(request){
          // Check if user is author
          if(request.author_id == req.params.id){
            // Delete it
            Request.findByIdAndRemove(request.id, (err, request) => {
            if(err){
              return res.json({success: false, msg: 'Something went wrong'});
            }
          })
          }      
        });
      })
    }
  })

  User.findByIdAndRemove(req.params.id, (err, request) => {
    if(err){
      return res.json({success: false, msg: 'Something went wrong'});
    }
    else {
      return res.json({success: true, msg: 'User ' + req.params.id + ' deleted'});
    }
  })

});


module.exports = router;

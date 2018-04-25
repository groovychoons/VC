const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Twitter = require('twit');

// Twitter API
const client = new Twitter({
  consumer_key: 'dduON871InOyqpCGmTHVYySUr',
  consumer_secret: 'kn8OyarqiuzKT8jLW7WRiGYEvCLcqp1iskGKWbsFTU9jX3NMjx',
  access_token: '910103387768868864-jkeFMZLlW58P5eUwc0jKXCk54gEmSnf',
  access_token_secret: 'Dcs1IxUwemAOCp3vUkofQ4NTrLIgfzYvaX23MQFgcruxs'
});

router.get('/api/user', (req, res) => {
  client
    .get('account/verify_credentials')
    .then(user => {
      res.send(user);
    })
    .catch(error => {
      res.send(error);
    });
});

let cache = [];
let cacheAge = 0;

router.get('/api/home', (req, res) => {
  if (Date.now() - cacheAge > 60000) {
    cacheAge = Date.now();
    const params = { tweet_mode: 'extended', count: 200 };
    client
      .get(`statuses/home_timeline`, params)
      .then(timeline => {
        cache = timeline;
        res.send(timeline);
      })
      .catch(error => res.send(error));
  } else {
    res.send(cache);
  }
});

router.post('/api/favorite/:id', (req, res) => {
  const path = req.body.state ? 'create' : 'destroy';
  client
    .post(`favorites/${path}`, { id: req.params.id })
    .then(tweet => res.send(tweet))
    .catch(error => res.send(error));
});

router.post('/api/retweet/:id', (req, res) => {
  const path = req.body.state ? 'retweet' : 'unretweet';
  client
    .post(`statuses/retweet/${req.params.id}`)
    .then(tweet => res.send(tweet))
    .catch(error => res.send(error));
});

module.exports = router;

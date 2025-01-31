
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database ' + config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});

const app = express();

// Require routes
const users = require('./routes/users');
const requests = require('./routes/requests');
const teams = require('./routes/teams');
const places = require('./routes/places');
const feedbacks = require('./routes/feedbacks');
const twitter = require('./routes/twitter');

// Port Number
const port = process.env.PORT || 8080;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/requests', requests);
app.use('/teams', teams);
app.use('/places', places);
app.use('/feedbacks', feedbacks);
app.use('/twitter', twitter);

// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port ' + port);
});

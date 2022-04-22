const mongoose = require('mongoose'); 

// shortcut to the mongoose.Schema class
// optional but convenient !
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/flights', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// a shortcut to our mongoose.connection object
const db = mongoose.connection; 

db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
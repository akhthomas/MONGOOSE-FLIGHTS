const mongoose = require('mongoose'); 

// shortcut to the mongoose.Schema class
// optional but convenient !
const Schema = mongoose.Schema;

// https://mongoosejs.com/docs/validation.html
const flightSchema = new Schema({
     airline: { 
       type: String, 
       enum: ['American', 'Southwest', 'United'],
       required: true 
      },

     airport: { 
       type: String, 
       enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
       default: 'DEN', 
       required: true 
      },

      flightNo: { 
        type: Number,
        min: 10,
        max: 9999,
        required: true,
      },
        
      departs: {
        type: Date,
        default: function() {
          return new Date().getNextYear();
        }
      }
});


mongoose.connect('mongodb://localhost/flights', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// a shortcut to our mongoose.connection object
const db = mongoose.connection; 

db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
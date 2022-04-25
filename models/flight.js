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
      return new Date().getFullYear();
      }
    }
});

// compiling the schema into a model and then exporting
// it 
module.exports = mongoose.model('Flights', flightSchema);
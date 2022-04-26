const mongoose = require('mongoose');

// shortcut to the mongoose.Schema class
// optional but convenient !
const Schema = mongoose.Schema;


const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
  },
  arrival: {
    type: Date
  },
})

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
      default: function (){
      const date = new Date();
      const addYear = date.getFullYear()+1
      return date.setFullYear(addYear);
    },
    destinations: {
      type: String,
      destinations: [destinationSchema]
    }
      }
    })

// compiling the schema into a model and then exporting
// it 
module.exports = mongoose.model('Flight', flightSchema);
module.exports = mongoose.model('Destination', destinationSchema);
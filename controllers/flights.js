module.exports = {
    new : newFlight
};

// import the flight schema
const res = require('express/lib/response');
const flight = require('../models/flight');
const Flight = require('../models/flight');

function newFlight(req, res){
    res.render('flights/new');
}
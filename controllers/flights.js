module.exports = {
    new : newFlight,
    create,
    index

};

const { redirect } = require('express/lib/response');
// import the flight schema
const res = require('express/lib/response');
const flight = require('../models/flight');
const Flight = require('../models/flight');

function newFlight(req, res){
    res.render('flights/new');
}
function index(req, res){
    Flight.find({}, function (err, flights){
        res.render('flights/index',{
            flights
            })
        });
} 
function create(req, res){
    // trim any whitespace at start/end 
    //of airlline input 
    req.body.airline = req.body.airline.trim();
    // split airline into any array using regex
    if (req.body.airline) req.body.airline.split(/\s*,\s*/);
    const flight = new Flight(req.body);
    
    flight.save(function(err) {
        if (err) return res.render('flights/new');
        console.log(flight);
    // redirect back to index
    res.redirect('/flights');
    })
}
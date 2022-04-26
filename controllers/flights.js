const { redirect } = require('express/lib/response');
// import the flight schema
const res = require('express/lib/response');
const flight = require('../models/flight');
const Flight = require('../models/flight');

module.exports = {
    new : newFlight,
    create,
    index,
    show

};

function newFlight(req, res){
    res.render('flights/new');
}

function create(req, res){
    // trim any whitespace at start/end 
    //of airlline input 
    //console.log(new Date());
    const flight = new Flight(req.body);
    
    flight.save(function(err) {
        if (err) return res.render('flights/new');
        console.log(flight);
    // redirect back to index
    res.redirect('/flights');
    })
}

function index(req, res){
    Flight.find({}, function (err, flights){
        res.render('flights/index',{
            flights
            })
        });
} 
function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/details', { title: 'Flight Details', flight });
    });
}
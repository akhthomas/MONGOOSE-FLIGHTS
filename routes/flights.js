var express = require('express');
var router = express.Router();

const flightCtrl = require('../controllers/flights');

router.get('/new', flightCtrl.new);
router.get('/', flightCtrl.create);



module.exports = router;

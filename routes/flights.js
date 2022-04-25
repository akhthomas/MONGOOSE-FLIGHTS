var express = require('express');
var router = express.Router();

const flightCtrl = require('../controllers/flights');

router.get('/new', flightCtrl.new);
router.get('/', flightCtrl.index);
router.post('/', flightCtrl.create);



module.exports = router;

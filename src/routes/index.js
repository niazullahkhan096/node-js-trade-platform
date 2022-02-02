var express = require('express');
var router = express.Router();

var v1_trade = require('./v1/trade.route');

router.use('/v1/trade', v1_trade);

module.exports = router;
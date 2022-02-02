
const express = require('express');
const router = express.Router();
const controller = require('./../../controllers');

router.post('/buy', controller.trade.buy);
router.post('/sell', controller.trade.sell);

module.exports = router;

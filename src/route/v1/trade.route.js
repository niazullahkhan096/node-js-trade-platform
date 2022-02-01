
const express = require('express');
const router = express.Router();
const controller = require('./../../controller');

router.post('/buy', controller.trade.buy);
router.post('/sell', controller.trade.sell);

module.exports = router;

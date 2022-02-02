const _shareService = require("./share.service");
const _userService = require("./user.service");
const _transactionService = require("./transaction.service");
const _tradeService = require("./trade.service");

const services = {
    shareService: _shareService,
    userService: _userService,
    transactionService: _transactionService,
    tradeService: _tradeService
};

module.exports = services;

const constants = require("./../constants");
const helpers = require("./../helpers");
const shareService = require('./../services/share.service');
const userService = require('./../services/user.service');
const transactionService = require('./../services/transaction.service');


const service = {

    buyShare: async (req, res) => {

        let requestBody = req.body;

        // validate is share registered
        
        let share = await shareService.findRegisteredShareBySymbol(requestBody.symbol);

        if (!share) {
            return res.status(constants.HTTP_STATUS_CODE.BAD_REQUEST_400).json(
                helpers.responseHelper.formatResponse(
                    constants.HTTP_STATUS_CODE.BAD_REQUEST_400,
                    constants.MESSAGE.TRADE.BUY.SHARE_NOT_REGISTERED
                )
            );
        }

        // validate is user registered
        let user = await userService.findRegisteredUserById(requestBody.userId);
        if (!user) {
            return res.status(constants.HTTP_STATUS_CODE.BAD_REQUEST_400).json(
                helpers.responseHelper.formatResponse(
                    constants.HTTP_STATUS_CODE.BAD_REQUEST_400,
                    constants.MESSAGE.TRADE.BUY.USER_NOT_REGISTERED
                )
            );
        }

        // create transaction
        let transaction = await transactionService.createTransaction(user.id, share.id, share.price, requestBody.quantity);
        if (transaction) {
            return res.status(constants.HTTP_STATUS_CODE.SUCCESS_200).json(
                helpers.responseHelper.formatResponse(
                    constants.HTTP_STATUS_CODE.SUCCESS_200,
                    constants.MESSAGE.TRADE.BUY.SUCCESS
                )
            );
        }
        else {
            return res.status(constants.HTTP_STATUS_CODE.SERVER_ERROR_500).json(
                helpers.responseHelper.formatResponse(
                    constants.HTTP_STATUS_CODE.SERVER_ERROR_500,
                    constants.MESSAGE.EXCEPTION.INTERNAL_SERVER_ERROR
                )
            );
        }

    }
};

module.exports = service;
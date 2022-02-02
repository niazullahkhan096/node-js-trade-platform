

const constants = require("./../constants");
const helpers = require("./../helpers");
const dto = require("./../dto");
const services = require('./../services');


const controller = {

    buy: async (req, res, next) => {
        try {
            if (!helpers.requestHelper.validateRequestDto(req.body, dto.buyShareDto)) {
                return res.status(constants.HTTP_STATUS_CODE.BAD_REQUEST_400).json(
                    helpers.responseHelper.formatResponse(
                        constants.HTTP_STATUS_CODE.BAD_REQUEST_400,
                        constants.MESSAGE.EXCEPTION.BAD_REQUEST
                    )
                );
            }

            return services.tradeService.buyShare(req, res);
        }
        catch (err) {
            console.log(err)
            return res.status(constants.HTTP_STATUS_CODE.SERVER_ERROR_500).json(
                helpers.responseHelper.formatResponse(
                    constants.HTTP_STATUS_CODE.SERVER_ERROR_500,
                    constants.MESSAGE.EXCEPTION.INTERNAL_SERVER_ERROR
                )
            );
        }
    },

    sell: async (req, res, next) => {
        return res.status(200).json({ 'name': 'test' })
    }

};


module.exports = controller;
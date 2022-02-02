
const models = require('./../models');

const service = {

    findRegisteredShareBySymbol: async (symbol) => {
        return await models.share.findOne({
            where: {
                symbol: symbol,
                is_registered: true
            }
        });
    }
};

module.exports = service;
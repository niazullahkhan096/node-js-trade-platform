
const models = require('./../models');

const service = {

    createTransaction: async (userId, shareId, unitPrice, quantity) => {
        let transaction = {
            user_id: userId,
            share_id: shareId,
            unit_price: unitPrice,
            quantity: quantity,
            is_deleted: false
        };
        return await models.transaction.create(transaction);
    }
};

module.exports = service;
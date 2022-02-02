
const models = require('./../models');

const service = {

    findRegisteredUserById: async (userId) => {
        return await models.user.findOne({
            where: {
                id: userId,
                is_registered: true
            }
        });
    }
};

module.exports = service;



const controller = {
    buy: async (req, res, next) => {
        return res.status(200).json({'name': 'test'})
    },
    sell: async (req, res, next) => {
        return res.status(200).json({'name': 'test'})
    }
};


module.exports = controller;
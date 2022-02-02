module.exports = {
    TRADE: {
        BUY: {
            SUCCESS: "You have successfully bought the share",
            SHARE_NOT_REGISTERED: "Requested share is not registered",
            USER_NOT_REGISTERED: "Requested user portfolio is not registered",
        },
        SELL: {
            SUCCESS: "You have successfully sold the share",
            OUT_OF_STOCK: "Not enough share quantity to sell",
            USER_NOT_REGISTERED: "Requested user portfolio is not registered",
        }
    },
    EXCEPTION: {
        INTERNAL_SERVER_ERROR: "Oops! Something went wrong.",
        BAD_REQUEST: "Bad request!"
    }
};

const dto = {
    userId: {
        type: "string",
        allowNull: false
    },
    symbol: {
        type: "string",
        allowNull: false
    },
    quantity: {
        type: "number",
        allowNull: false
    },
};

module.exports = dto;
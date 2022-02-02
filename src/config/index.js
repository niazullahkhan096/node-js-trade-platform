
const env = process.env.NODE_ENV || 'development';
const sequelize_config = require('./sequelize.config.json')[env];

const config = {
    db: sequelize_config
};

module.exports = config;

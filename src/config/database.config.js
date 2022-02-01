

const config = {
    HOST: process.env.DB_HOST || "localhost",
    USER: process.env.DB_USERNAME || "root",
    PASSWORD: process.env.DB_PASSWORD || "123456",
    DB: process.env.DB_NAME || "testdb",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000

    }
};

module.exports = config;
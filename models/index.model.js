const { request } = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const config = require("../config/database")

const sequelize = new Sequelize(config.mssql.database, config.mssql.username, config.mssql.password, {
    host: config.mssql.server,
    dialect: 'mssql',
    define: {
        timestamps: false
    },
    dialectOptions: {
        options: { "requestTimeout": 900000 }
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Book = require("./books.model")(sequelize, DataTypes)

module.exports = db;
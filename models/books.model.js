'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Book extends Model {};
    Book.init({
        name: DataTypes.STRING,
        author: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'books',
        timestamps: true
    });
    return Book;
};
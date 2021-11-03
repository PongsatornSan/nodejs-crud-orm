const { Book } = require("../models/index.model");
const goCatch = require("../util/errorHandling.util");

const getBook = async() => {
    const re = await Book.findAll({
        attributes: ['id', 'name', 'author']
    });
    const re1 = re.map(item => {
        return {
            id: item.id,
            name: item.name,
            author: item.author
        }
    })
    return re1
}

const postAddbook = async(name, author) => {
    const re = await goCatch(Book.create({
        name: name,
        author: author
    }));
    return re
}


const getEditbook = async(id) => {
    const re = await Book.findAll({
        attributes: ['id', 'name', 'author'],
        where: {
            id: id
        }
    });
    const re1 = re.map(item => {
        return {
            id: item.id,
            name: item.name,
            author: item.author
        }
    })
    return re1
}

const postUpdatebook = async(name, author, id) => {
    const re = await Book.update({
        name: name,
        author: author
    }, {
        where: {
            id: id
        }
    });
    return re
}

const getDeletebook = async(id) => {
    const re = await goCatch(Book.destroy({
        where: {
            id: id
        }
    }));
    return re
}


module.exports = {
    getBook,
    postAddbook,
    getEditbook,
    postUpdatebook,
    getDeletebook
}
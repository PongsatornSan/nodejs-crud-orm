const { ErrorHandler } = require("../helper/error");
const { Book } = require("../models/index.model");
const bookService = require('../service/books.service');

async function getBook(req, res, next) {
    try {
        const re = await bookService.getBook();
        res.render('books', {
            data: re
        });
    } catch (error) {
        return next(error)
    }
}

async function getAddBook(req, res, next) {
    try {
        res.render('books/add', {
            name: '',
            author: ''
        })
    } catch (e) {
        return next(e)
    }
}

async function postAddBook(req, res, next) {
    try {
        let { name, author } = req.body
        let errors = false;

        if (name.length === 0 || author.length === 0) {
            errors = true;
            req.flash('error', 'Please enter name and author');
            res.render('books/add', {
                name: name,
                author: author
            })
        }

        if (!errors) {
            const re = await bookService.postAddbook(name, author);
            req.flash('success', 'Book successfully added');
            res.redirect('/books');
        }
    } catch (e) {
        return next(e)
    }
}

async function getEditBook(req, res, next) {
    try {
        let id = req.params.id;

        const re = await bookService.getEditbook(id);

        if (re.length <= 0) {
            req.flash('error', 'Book not found with id = ' + id)
            res.redirect('/books');
        } else {
            res.render('books/edit', {
                title: 'Edit book',
                id: re[0].id,
                name: re[0].name,
                author: re[0].author
            })
        }
    } catch (e) {
        return next(e)
    }
}

async function postUpdateBook(req, res, next) {
    try {
        let { id } = req.params;
        const { name, author } = req.body;
        let errors = false;

        if (name.length === 0 || author.length === 0) {
            errors = true;
            req.flash('error', 'Please enter name and author');
            res.render('books/edit', {
                id: id,
                name: name,
                author: author
            })
        }

        if (!errors) {
            const [re, err] = await bookService.postUpdatebook(name, author, id);
            if (err) {
                req.flash('error', err);
                res.redirect('/books');
            } else {
                req.flash('success', 'Book successfully updated');
                res.redirect('/books');
            }
        }
    } catch (e) {
        return next(e)
    }
}

async function getDeleteBook(req, res, next) {
    try {
        let { id } = req.params;

        const [re, err] = await bookService.getDeletebook(id);
        if (err) {
            req.flash('error', err),
                res.redirect('/books');
        } else {
            req.flash('success', 'Book successfully deleted! ID = ' + id);
            res.redirect('/books');
        }
    } catch (e) {
        return next(e)
    }
}

module.exports = {
    getBook,
    getAddBook,
    postAddBook,
    getEditBook,
    postUpdateBook,
    getDeleteBook
}
const express = require('express');
const router = express.Router();
const bookController = require("../controller/books.controller");

router.get("/", bookController.getBook);

router.get("/add", bookController.getAddBook);

router.post("/add", bookController.postAddBook);

router.get("/edit/(:id)", bookController.getEditBook);

router.post("/update/:id", bookController.postUpdateBook);

router.get("/delete/(:id)", bookController.getDeleteBook);

module.exports = router;
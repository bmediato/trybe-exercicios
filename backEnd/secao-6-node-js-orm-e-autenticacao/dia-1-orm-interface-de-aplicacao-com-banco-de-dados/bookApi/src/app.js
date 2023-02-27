const express = require('express');
const bookController = require('./controller/book.controller');
const app = express();

app.use(express.json());

app.get('/books', bookController.getAll);

module.exports = app;
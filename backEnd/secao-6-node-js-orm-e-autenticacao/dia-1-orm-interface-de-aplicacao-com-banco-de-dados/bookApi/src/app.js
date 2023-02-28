const express = require('express');
const bookController = require('./controller/book.controller');
const app = express();

app.use(express.json());

app.get('/books', bookController.getAll);
app.get('/books/:id', bookController.getById);
app.post('/books', bookController.createBook);
app.put('/books/:id', bookController.updateBook);
app.delete('/books/:id', bookController.deleteBook);

module.exports = app;
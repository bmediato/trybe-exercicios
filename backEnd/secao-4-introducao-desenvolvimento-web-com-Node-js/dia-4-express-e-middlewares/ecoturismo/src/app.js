const express = require('express');
const validationName = require('./middlewares/validationName');
const validationPrice = require('./middlewares/validationPrice');
const validationDescription = require('./middlewares/validationDescription');
const validationCreatedAt = require('./middlewares/validationCreatedAt');
const validationRating = require('./middlewares/validationRating');

const app = express();
app.use(express.json());

app.post('/activities', 
validationRating,
validationCreatedAt, 
validationDescription, 
validationPrice, validationName, (req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = app;
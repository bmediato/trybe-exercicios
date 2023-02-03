const express = require('express');
const validationName = require('./middlewares/validationName');
const validationPrice = require('./middlewares/validationPrice');
const validationDescription = require('./middlewares/validationDescription');
const validationCreatedAt = require('./middlewares/validationCreatedAt');
const validationRating = require('./middlewares/validationRating');
const validationDifficulty = require('./middlewares/validationDifficulty');
const generateToken = require('./utils/generateToken');

const app = express();
app.use(express.json());

app.post('/activities', 
validationDifficulty,
validationRating,
validationCreatedAt, 
validationDescription, 
validationPrice, validationName, (req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }
  const token = generateToken();
  return res.status(200).json({ token });
});

module.exports = app;
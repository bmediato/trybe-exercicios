const express = require('express');
const validationName = require('./middlewares/validationName');
const validationPrice = require('./middlewares/validationPrice');

const app = express();
app.use(express.json());

app.post('/activities', validationName, validationPrice, (req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = app;
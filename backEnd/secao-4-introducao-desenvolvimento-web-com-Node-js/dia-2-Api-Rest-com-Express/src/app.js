const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());
const moviesPath = path.resolve(__dirname, './movies.json');

async function leitura() {
  try {
    const fileContent = await fs.readFile(moviesPath);
    const movies = JSON.parse(fileContent);
    console.log(movies);
    return movies;
  } catch (err) {
    console.error(`Arquivo não pode ser lido: ${err}`);
  }
}

app.get('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await leitura();
    const listandoID = movies.find((filme) => filme.id === +id);
    res.status(200).json(listandoID);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = app;
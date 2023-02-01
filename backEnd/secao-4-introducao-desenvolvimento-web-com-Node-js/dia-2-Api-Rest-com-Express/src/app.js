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

app.get('/movies', async (req, res) => {
  try {
    const movies = await leitura();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post('/movies', async (req, res) => {
  try {
    const { movie, price } = req.body;
    const movies = await leitura();
    const newMovie = {
      id: movies[movies.length - 1].id + 1,
      movie,
      price,
    };
    const allMovies = JSON.stringify([...movies, newMovie]);
    await fs.writeFile(moviesPath, allMovies);
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { movie, price } = req.body;
    const movies = await leitura();
    const filmid = movies.findIndex((film) => film.id === +id);
    movies[filmid] = { id: +id, movie, price };
    const upDateMovies = JSON.stringify(movies, null, 2);
    await fs.writeFile(moviesPath, upDateMovies);
    res.status(200).json(movies[filmid]);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await leitura();
    const position = movies.filter((film) => film.id !== +id);
    const updateMovies = JSON.stringify(position, null, 2);
    await fs.writeFile(moviesPath, updateMovies);
    res.status(204).end();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = app;
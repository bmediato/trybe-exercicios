const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
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

leitura();

module.exports = app;
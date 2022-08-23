const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// exercicio 1
const nomes = books.map((elemento) => `${elemento.name} - ${elemento.genre} - ${elemento.author.name}`)

console.log(nomes);

// exercicio 2 
const AutorEIdade = books.map((elemento) => ({
author: elemento.author.name,
age: elemento.releaseYear - elemento.author.birthYear,
})).sort((a,b) => a.age - b.age);
console.log(AutorEIdade);

// exercicio 3
const genero = books.filter((elemento) => elemento.genre === 'Ficção Científica' || elemento.genre === 'Fantasia')
console.log(genero);

// exercicio 4 
const maiorQ60 = () => {
  const currentYear = new Date().getFullYear();
  return books.filter((elemento) => (elemento.releaseYear < currentYear - 60)).sort((a, b) => a.releaseYear - b.releaseYear);
}

console.log(maiorQ60());

//exercicio 5 

// const ordemAlf = () => {
// const genero = ['Fantasia', 'Ficção Científica'];
// return books
// .filter((book) => genero.includes(book.genre))
// .map((book) => book.author.name).sort();
// }
// console.log(ordemAlf());

function fantasyOrScienceFictionAuthors() {
  const wantedGenres = ['Fantasia', 'Ficção Científica'];
  return books
    .filter((book) => wantedGenres.includes(book.genre))
    .map((book) => book.author.name).sort();
}

console.log(fantasyOrScienceFictionAuthors());
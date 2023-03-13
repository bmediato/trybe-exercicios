import Author from './database/models/authorModel';
import Book from './database/models/bookModel';

(async () => {
  const authors = await Author.findAll();
  console.table(authors.map((author) => author.toJSON()));

  process.exit(0);
})();


(async () => {
  const books = await Book.findAll();
  console.table(books.map((book) => book.toJSON()));

  process.exit(0);
})();
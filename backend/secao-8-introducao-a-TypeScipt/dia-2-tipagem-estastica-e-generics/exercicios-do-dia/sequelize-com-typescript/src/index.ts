import Author from './database/models/authorModel';

(async () => {
  const authors = await Author.findAll();
  console.table(authors.map((author) => author.toJSON()));

  process.exit(0);
})();
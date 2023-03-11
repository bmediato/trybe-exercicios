// ./main.ts

import BookModel from './models/Books';

const main = async () => {
  const bookModel = new BookModel();

  const books = await bookModel.getAll();
  console.log(books);
};

main();
const { Book } = require('../models');

const getAll = async () => {
  const result = await Book.findAll({
    order: [['title', 'ASC']],
  });
  return result
}

const getById = async (id) => {
  const result = await Book.findByPk(id);
  return result;
}

const getByAuthor = async (author) => {
  const result = await Book.finAll({
    where: {author},
    order: [['title', 'ASC']],
  })
  return result;
}

const createBook = async (title, author, pageQuantity, publisher) => {
  const result = await Book.create({title, author, pageQuantity, publisher});
  return result;
}

const updateBook = async(id, title, author, pageQuantity, publisher) => {
  const [updateB] = await Book.update(
    {title, author, pageQuantity, publisher},
    {where: {id}}
    );
    return updateB;
}

const deleteBook = async (id) => {
  const book = await Book.destroy( {where : {id}});
  return book;
}

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
  getByAuthor,
}
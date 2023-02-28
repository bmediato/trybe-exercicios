const {Book} = require('../models');

const getAll = async () => {
  const result = await Book.findAll();
  return result
}

const getById = async (id) => {
  const result = await Book.findByPk(id);
  return result;
}

const createBook = async (title, author, pageQuantity) => {
  const result = await Book.create({title, author, pageQuantity});
  return result;
}

const updateBook = async(id, title, author, pageQuantity) => {
  const [updateB] = await Book.update(
    {title, author, pageQuantity},
    {where: {id}}
    );
    return updateB;
}

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
}
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

module.exports = {
  getAll,
  getById,
  createBook,
}
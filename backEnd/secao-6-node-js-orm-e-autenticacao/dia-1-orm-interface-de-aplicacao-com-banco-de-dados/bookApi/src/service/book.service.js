const {Book} = require('../models');

const getAll = async () => {
  const result = await Book.findAll();
  return result
}

module.exports = {
  getAll,
}
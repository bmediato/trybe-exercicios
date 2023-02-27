const bookService = require('../service/book.service');

const getAll = async (req, res) => {
  try{
    const book = await bookService.getAll();
    return res.status(200).json(book);
  } catch(e) {
    console.log(e.message);
    return res.status(500).json({message: 'Ocorreu um erro'});
  }
}

module.exports = {
  getAll,
}
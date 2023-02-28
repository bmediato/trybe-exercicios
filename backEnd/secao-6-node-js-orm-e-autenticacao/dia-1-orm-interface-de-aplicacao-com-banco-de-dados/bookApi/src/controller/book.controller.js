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

const getById = async (req, res) => {
  const {id} = req.params;
   const result = await bookService.getById(id);
   if(!result) return res.status(404).json({message: 'Book not found'});
   return res.status(200).json(result);
}

const createBook = async (req, res) => {
  const {title, author, pageQuantity} = req.body;
  const result = await bookService.createBook(title, author, pageQuantity);
  return res.status(201).json(result);
}

const updateBook = async (req, res) => {
  const {id} = req.params;
  const {title, author, pageQuantity} = req.body;
  const result = await bookService.updateBook(id, title, author, pageQuantity);

  if(!result) return res.status(404).json({message: 'Book not found'});

  return res.status(200).json(result);
}

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
}
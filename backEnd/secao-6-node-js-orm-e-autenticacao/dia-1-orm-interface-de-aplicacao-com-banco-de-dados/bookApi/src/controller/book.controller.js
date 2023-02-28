const bookService = require('../service/book.service');

const getAll = async (req, res) => {
    const {author} = req.query;
    let books;
    if(author) {
      books = await bookService.getByAuthor(author);
    } else {
      books = await bookService.getAll();
    }
    return res.status(200).json(books);
}

const getById = async (req, res) => {
  const {id} = req.params;
   const result = await bookService.getById(id);
   if(!result) return res.status(404).json({message: 'Book not found'});
   return res.status(200).json(result);
}

const createBook = async (req, res) => {
  const {title, author, pageQuantity, publisher} = req.body;
  const result = await bookService.createBook(title, author, pageQuantity, publisher);
  return res.status(201).json(result);
}

const updateBook = async (req, res) => {
  const {id} = req.params;
  const {title, author, pageQuantity, publisher} = req.body;
  const result = await bookService.updateBook(id, title, author, pageQuantity, publisher);

  if(!result) return res.status(404).json({message: 'Book not found'});

  return res.status(200).json(result);
}

const deleteBook = async (req, res) => {
  try{
    const {id} = req.params;
    await bookService.deleteBook(id);
    return res.status(200).json({message: 'Excluido com sucesso!'})
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({message: 'algo deu errado'});
  }
}

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
}
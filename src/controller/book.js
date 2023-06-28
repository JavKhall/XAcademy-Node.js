const { bookService } = require('../service')

const createBook = async (req, res) => {
  try {
    const newBook = await bookService.createBook(req.body)
    res.json(newBook)
  } catch (err) {
    res.status(400).json({action: "createBook", error: err.message })
  }
}

const getBooks = async (req, res) => {
  try {
    const books = await bookService.getBooks()
    res.json(books)
  } catch (err) {
    res.status(400).json({action: "getBooks", error: err.message })
  }
}

const getBook = async (req, res) => {
  try {
    const book = await bookService.getBook(req.params.id)
    res.json(book)
  } catch (err) {
    res.status(400).json({action: "getBook", error: err.message })
  }
}

const upDateBook = async (req, res) => {
  try {
    const idBook = req.params.id
    const { isbn, tittle, author, year, idLibrary } = req.body
    const book = await bookService.upDateBook(idBook, { isbn, tittle, author, year, idLibrary })
    res.json(book)
  } catch (err) {
    res.status(400).json({action: "upDateBook", error: err.message })
  }
}

const deleteBook = async (req, res) => {
  try {
    const book = await bookService.deleteBook( req.params.id )
    res.json({ message: `Se elimino el libro: ${library.name}` })
  } catch (err) {
    res.status(400).json({action: "deleteBook", error: err.message })
  }
}

module.exports = {
  createBook,
  getBooks,
  getBook,
  upDateBook,
  deleteBook
}
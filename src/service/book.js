const { bookProvider } = require('../provider')

const createBook = async (book) => {
  return await bookProvider.createBook (book)
}

const getBooks = async () => {
  return await bookProvider.getBooks ()
}

const getBook = async (idBook) => {
  return await bookProvider.getbook (idBook)
}

const upDateBook = async (idBook, data) => {
  return await bookProvider.upDateBook (idBook, data)
}

const deleteBook = async (idBook) => {
  return await bookProvider.deleteBook (idBook)
}

module.exports = {
  createBook,
  getBooks,
  getBook,
  upDateBook,
  deleteBook
}
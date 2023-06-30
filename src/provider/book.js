const { bookModel } = require('../model')

// * CREACION del libro
const createBook = async (book) => {
  try {
    const newBook = await bookModel.create(book)
    const { id, isbn, tittle, author, year, idLibrary } = newBook
    return { id, isbn, tittle, author, year, idLibrary }
  } catch(err) {
    console.error("Error al registrar el libro", err)
    throw err
  }
}

// * OBTENCION de todos los libros
const getBooks = async () => {
  try {
    const book = await bookModel.findAll({
      where: { status: 'ENABLE' },
      attributes: ['id', 'isbn', 'tittle', 'author', 'year', 'idLibrary']
    })
    return book
  } catch(err) {
    console.error("Error al obtener los libros", err)
    throw err
  }
}

// * OBTENCION un libro
const getBook = async (idBook) => {
  try {
    const book = await bookModel.findByPk(idBook, {
      where: { status: 'ENABLE' }
    })
    const { id, isbn, tittle, author, year, idLibrary } = book
    return { id, isbn, tittle, author, year, idLibrary }
  } catch(err) {
    console.error(`Error al obtener el libro con el id ${idBook}`, err)
    throw err
  }
}

// * ACTUALIZACION de un libro
const upDateBook = async (idBook, data) => {
  try {
    await bookModel.update({
      ...data
    }, { 
      where: { id: idBook }
    })

    const book = await bookModel.findByPk(idBook, {
      attributes: ['id', 'isbn', 'tittle', 'author', 'year', 'idLibrary']
    })
    return book
  } catch(err) {
    console.error(`Error al actualizar el libro con el id ${idBook}`, err)
    throw err
  }
}

// * "ELIMINACION" de un libro
const deleteBook = async (idBook) => {
  try {
    await bookModel.update({ status: "DISABLE" }, { 
      where: {id: idBook}
    })

    const book = await bookModel.findByPk(idBook, {
      attributes: ['tittle']
    })
    return book
  } catch(err) {
    console.error(`Error al eliminar el libro con el id ${idBook}`, err)
    throw err
  }
}

module.exports = {
  createBook,
  getBooks,
  getBook, 
  upDateBook,
  deleteBook
}
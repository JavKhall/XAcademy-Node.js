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
const getbook = async (idbook) => {
  try {
    const book = await bookModel.findByPk(idbook, {
      where: { status: 'ENABLE' }
    })
    const { id, isbn, tittle, author, year, idLibrary } = book
    return { id, isbn, tittle, author, year, idLibrary }
  } catch(err) {
    console.error(`Error al obtener el libro con el id ${idbook}`, err)
    throw err
  }
}

// * ACTUALIZACION de un libro
const upDatebook = async (idbook, data) => {
  try {
    await bookModel.update({
      ...data
    }, { 
      where: { id: idbook }
    })
    return await bookModel.findByPk(idbook)
  } catch(err) {
    console.error(`Error al actualizar el libro con el id ${idbook}`, err)
    throw err
  }
}

// * "ELIMINACION" de un libro
const deletebook = async (idbook) => {
  try {
    await bookModel.update({ status: "DISABLE" }, { 
      where: {id: idbook}
    })

    const book = await bookModel.findByPk(idbook, {
      attributes: ['name']
    })
    return book
  } catch(err) {
    console.error(`Error al eliminar el libro con el id ${idbook}`, err)
    throw err
  }
}

module.exports = {
  createBook,
  getBooks,
  getbook, 
  upDatebook,
  deletebook
}
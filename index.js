const PORT = '3000'
const express = require('express')
const { initDataBase } = require('./src/config/config.db')
const { libraryRouter } = require('./src/routes')
const { bookRouter } = require('./src/routes')

const app = express()

app.use(express.json())

app.use('/library', libraryRouter)
app.use('/book', bookRouter)

app.listen(PORT, async () => {
  await initDataBase()
  console.log(`Seridor activo en el puerto ${PORT}`)
})


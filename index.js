const PORT = '3000'
const express = require('express')
const { initDataBase } = require('./src/config/config.db')

const app = express()

app.use(express.json())

app.listen(PORT, async () => {
  await initDataBase()
  console.log(`Seridor activo en el puerto ${PORT}`)
})


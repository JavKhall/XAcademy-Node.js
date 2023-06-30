const PORT = '3000'
const express = require('express')
const { initDataBase } = require('./src/config/config.db')
const { libraryRouter, bookRouter, userRouter, authRouter } = require('./src/routes')

const app = express()

app.use(express.json())

app.use('/library', libraryRouter)
app.use('/book', bookRouter)
app.use('/user', userRouter)
app.use('/login', authRouter)

app.listen(PORT, async () => {
  console.clear()
  await initDataBase()
  console.log(`Seridor activo en el puerto ${PORT}`)
})


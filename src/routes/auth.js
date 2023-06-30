const express = require('express')
const jwt = require('jsonwebtoken')
const { authMiddleware } = require('../middlewares')
const { userService } = require('../service') 

const router = express.Router()

router.post('/', async (req, res) => {
  const { username, password } = req.body
  if ( username == 'admin' && password == 'admin') {
    const token = jwt.sign( {username, role: 'Admin'}, authMiddleware.SERVER_SECRET )
    res.json({ token });
  } else {
    const user = await userService.validateUser({username, password})

    if(user) {
      const token = jwt.sign( {username, role: 'User'}, authMiddleware.SERVER_SECRET )
      return res.json({ token });
    }

    res.status(401).json({ error: "Invalid User" })
  }

})

module.exports = router
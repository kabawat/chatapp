const express = require('express')
const app = express()
const port = 2917
const cors = require('cors')
const AuthController = require('./Router')
app.use(express.json())
app.use(express.urlencoded({ extends: true }))
app.use(cors())

app.use(AuthController)
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})
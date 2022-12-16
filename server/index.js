const dotenv = require('dotenv').config()
const express = require('express')
const cookiesParser = require('cookie-parser')
const app = express()
const port = process.env.PORT
const cors = require('cors')
const AuthController = require('./Router')
app.use(cookiesParser())
app.use(express.json())
const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:3002",
  ],
  credentials: true,
  exposedHeaders: ["set-cookie"],
};
app.use(cors(corsOptions))
app.use(express.urlencoded({ extends: true }))

app.use(AuthController)
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})

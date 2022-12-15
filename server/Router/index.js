const { Router } = require('express')
const AuthController = Router()
const SignUpController = require('../controller/signup')
AuthController.post('/signup', SignUpController.SingUp)
module.exports = AuthController
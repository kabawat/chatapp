const { Router } = require('express')
const AuthController = Router()
const SignUpController = require('../controller/signup')
const LoginController = require('../controller/login')
AuthController.post('/signup', SignUpController.SingUp)
AuthController.post('/login', LoginController.Login)
module.exports = AuthController
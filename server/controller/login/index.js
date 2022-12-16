const jwt = require('jsonwebtoken')
const ChatAppModle = require('../Connection')
exports.Login = (req, res) => {
    const { username, password } = req.body
    ChatAppModle.findOne({ user: username, pwd: password }, (error, result) => {
        if (!result) {
            res.send({
                msg: 'user not found'
            })
        } else {
            console.log(result);
            const privet_key = process.env.PRIVET_KEY
            const token = jwt.sign(req.body, privet_key, { expiresIn: '1d' })
            res.cookie('authToken', token, {
                httpOnly: true,
                withCredentials: true
            }).status(200).json({ user: req.body })
        }
    })
}
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
            const privet_key = process.env.PRIVET_KEY
            console.log(privet_key);
            res.send(result)
        }
    })
}
const ChatAppModle = require('../Connection')
exports.NewChat = (req, res) => {
    ChatAppModle.findOne({ user: req.body.username }, (error, result) => {
        if (result) {
            res.send(result)
            console.log(result);
        } else {
            console.log(req.body);
            res.send({ msg: "user not found" })
        }
    })
}
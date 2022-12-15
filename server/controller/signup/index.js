const ChatAppModle = require('../Connection')
exports.SingUp = (req, res) => {
    const { user, email, pwd } = req.body
    const dataModal = ChatAppModle({
        user: user,
        email: email,
        pwd: pwd
    })
    if (user && email && pwd) {
        const insertData = async () => {
            const result = await dataModal.save()
            res.send(result)
        }
        insertData()
    } else {
        res.send('invalid credentials')
    }
}
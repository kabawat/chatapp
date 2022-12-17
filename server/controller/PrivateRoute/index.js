const jwt = require('jsonwebtoken')
exports.PrivateRoute = (req, res, next) => {
    const token = req.cookies.authToken
    if (token) {
        jwt.verify(token, process.env.PRIVET_KEY, (Error, result) => {
            if (Error) {
                console.log("Error");
                return res.status(500).json({ MSG: 'invalid credentials' })
            } else {
                return res.status(200).json({ MSG: 'login Success' })
            }
        })
    } else {
        return res.status(401).json({ MSG: 'invalie Token' })
    }
    next()
}
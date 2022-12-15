const mongoose = require('mongoose')
const password = 'ty9we3ys86'
const user = 'Rajputana'
const Collection = "ChatUser"
mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.r8evqrf.mongodb.net/ChatApp?`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((value) => {
    console.log("connection success");
})
const SchemaModle = new mongoose.Schema({
    username: {
        type: String,
        require,
    },
    email: {
        type: String,
        require
    },
    pwd: {
        type: String,
        require
    }
})
const ChatAppModle = new mongoose.model(Collection, SchemaModle)
module.exports = ChatAppModle
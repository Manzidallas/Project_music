const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required
    },
    phone: {
        type: Int,
        required
    },
    email: {
        type: String,
        required
    },
    password: {
        type: String,
        required
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User
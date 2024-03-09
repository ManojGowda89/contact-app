const mongoose = require('mongoose')

const Userschema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const UserModel = mongoose.model('users',Userschema)
module.exports = UserModel
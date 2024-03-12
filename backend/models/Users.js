const mongoose = require('mongoose')

const Userschema = new mongoose.Schema({
    name: String,
    email: String,
    mobileNo : String,
    designation : String,
    selectedGender:String,
    course:String,
    createDate:String,
})

const UserModel = mongoose.model('users',Userschema)
module.exports = UserModel
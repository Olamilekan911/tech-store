const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema =new Schema({
    username : {
        type:String,
        unique: true,
        require : true
    },
    email: {
        type:String,
        unique: true,
        require : true
    },
    password: {
        type:String,
        require : true
    },
    image: {
        type:String,
    },
    isAdmin: {
        type:Boolean,
        default: false
    },
}, { timestamps: true })

const userModel = mongoose.model('User', userSchema)
module.exports = userModel
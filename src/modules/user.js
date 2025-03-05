const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName:{
        type:"string",
        required:true
    },
    lastName:{
        type:"string"
    },
    email:{
        type:"string",
        required:true
    },
    password:{
        type:"string",
        required:true
    }
},{timestamps:true})

const User = mongoose.model("user", userSchema);
module.exports = User;
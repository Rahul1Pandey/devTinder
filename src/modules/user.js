const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName:{
        type:"string"
    },
    lastName:{
        type:"string"
    },
    email:{
        type:"string"
    },
    password:{
        type:"string"
    }
})

const User = mongoose.model("user", userSchema);
module.exports = User;
const mongoose = require('mongoose');

const validator = require('validator');

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
        required:true,
        lowercase:true,
        unique:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("email in not valid" + value)
            }
        }
    },
    password:{
        type:"string",
        required:true
    }
},{timestamps:true})

const User = mongoose.model("user", userSchema);
module.exports = User;
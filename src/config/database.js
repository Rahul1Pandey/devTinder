


const mongoose = require('mongoose');

const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://prprpandey:5M69DEe6Gz1LN5Ti@cluster0.l4zat.mongodb.net/devTinder")

};

module.exports = connectDB;

//?retryWrites=true&w=majority&appName=Cluster0






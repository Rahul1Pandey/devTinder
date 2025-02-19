const express = require('express');
const connectDB = require('./config/database');

const User = require('./modules/user');
const app = express();

app.use(express.json());
app.post("/signup",async (req,res)=>{
    // console.log(req.body);
 
    const user = new User(req.body);

    try{
        await user.save();
      res.send("user added successully!!")
    }
    catch(err){
        res.send(err.message)
    }
    
})





connectDB()
.then(()=>{
    console.log("Database connected successfully.....")
    
   app.listen(7777, ()=>{
       console.log("server is running on port 7777");
   });
})
.catch(()=>{
    console.log("Database cannot be connected")
})

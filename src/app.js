const express = require('express');
const connectDB = require('./config/database');

const User = require('./modules/user');
const app = express();

app.use(express.json());
app.post("/signup",async (req,res)=>{
   
 
    const user = new User(req.body);

    try{
        await user.save();
      res.send("user added successully!!")
    }
    catch(err){
        res.send(err.message)
    }
    
})

app.get("/user",async(req,res)=>{
        const userEmail = req.body.email;

        try{
            const user = await User.find({email:userEmail});

            if(user.length===0){
                res.status(404).send("user not found")
            }else{
                res.send(user);
            }
            
        }
        catch(err){
            res.status(400).send("something wents wrong")
        }
       
})

app.get("/feed",async(req,res)=>{
   
    try{
        const user = await User.find({});
        res.send(user);  
    }
    catch(err){
        res.status(400).send("something wents wrong")
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

const express = require('express');

const app = express();



app.use("/user",(req,res,next)=>{
    
    next();
    res.send("1st response!");
},(req,res)=>{
    res.send("2nd response!");
})

app.listen(7777, ()=>{
    console.log("server is running on port 7777");
});
const express = require('express');

const app = express();

const {adminAuth} = require("./middlewares/auth")


app.use("/admin",adminAuth)

app.get("/admin/getdata",(req,res)=>{
     res.send("All data send!")
})

app.get("/admin/deleteData",(req,res)=>{
    res.send("Data deleted successfully!")
})
app.listen(7777, ()=>{
    console.log("server is running on port 7777");
});
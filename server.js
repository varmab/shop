var express=require("express");
var app=express();

app.get("/api",(req,res)=>{
    res.send("Welcome to shop api")
})

app.listen(3001,()=>{
    console.log("Server is started")
})
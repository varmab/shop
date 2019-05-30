var express=require("express");
var app=express();

var users=require('./routes/users')
var shop=require('./routes/shop')

var bodyParser=require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send("Welcome to Shop Server");
})

app.use("/api/users",users);
app.use('/api/shop',shop)

app.listen(3001,()=>{
    console.log("Shop server is started")
})
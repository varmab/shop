var express=require("express");
var router=express.Router();


var verifyToken=require('./verifyToken')
var db=require('../db');

router.route("/items")
    .get((req,res)=>{
        db.Item.find()
        .then((items)=>{
            res.status(200).send(items);
        })
        .catch((err)=>{
            res.status(500).send(err)
        })
    })
    .post(verifyToken,(req,res)=>{
        
        req.body.userId=req.userId;
        
        var newItem=new db.Item(req.body);

        newItem.save()
        .then((item)=>{
            res.status(200).send(item);
        })
        .catch((err)=>{
            res.status(500).send(err)
        })
    })


router.route("/orders")
    .get(verifyToken,(req,res)=>{
        var loggedInUserId=req.userId;
        console.log("Logged In User ID:" + loggedInUserId)
        
        db.Order.find({userId:loggedInUserId})
        .then((orders)=>{
            res.status(200).send(orders);
        })
        .catch((err)=>{
            res.status(500).send(err)
        })
    })
    .post(verifyToken,(req,res)=>{
        req.body.userId=req.userId;
        
        var newOrder=new db.Order(req.body);

        newOrder.save()
        .then((order)=>{
            res.status(200).send(order);
        })
        .catch((err)=>{
            res.status(500).send(err)
        })
    })
// router.post("/sendmail", (req,res)=>{

// })

module.exports=router;
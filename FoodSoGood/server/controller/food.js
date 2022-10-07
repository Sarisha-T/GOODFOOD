const express=require('express')
const jsonwebtoken=require("jsonwebtoken")
const verifyToken=require("../verifytoken")
const userModel=require("../model/usermodel");
const router=express.Router();



router.post("/",(req,res)=>{
    let foodData=req.body;
    foodModel.findOne({name:foodData.name})
})

router.get("/sample",verifyToken,(req,res)=>{
    res.send("hello");
})



module.exports=router;

const express=require('express');
const router=express.Router()
const User=require('../model/userModel')

router.post("/register",async(req,res)=>{
    const {name,email,password}=req.body
    const newUser=new User({name,email,password})

    try{
        newUser.save()
        res.send("user registered successfully")

    }catch(error){
        return res.status(400).json({message:error})
    }
})
router.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
        //find obj in mongodb and store in array
        const user=await User.find({email,password})

        
        if(user.length>0){
            const currUser={
                name:user[0].name,
                email:user[0].email,
                isAdmin:user[0].isAdmin,
                _id:user[0]._id
            }
            res.send(currUser)
        }else{
            return res.status(400).json({message:"Login attempt failed"})

        }
    }catch(error){
        return res.status(400).json({message:"Something went wrong"})
    }
})

module.exports=router
const express=require('express')
const bcryptjs=require("bcryptjs");
const jsonwebtoken=require("jsonwebtoken")
const verifyToken=require("../verifytoken")

const userModel=require("../model/userModel");

const router=express.Router();

router.post("/reg",(req,res)=>{
    let user=req.body;
    bcryptjs.genSalt(10,(err,salt)=>{
        bcryptjs.hash(user.password,salt,(err,en_pwrd)=>{
            if(err===null){
                user.password=en_pwrd;
                let userOBJ=new userModel(user);
                userOBJ.save()
                .then(()=>{
                    res.send({message:"created"})
                })
                .catch((err)=>{
                    console.log(err)
                    res.send({message:"not connected"})
                })
            }
        })
    })
})

// route to login customer
router.post("/login", async (req, res) => {
    let userCred = req.body;

    let user = await userModel.findOne({
        role: userCred.role,
        name: userCred.name,
    });

    if (user === null) {
        res.status(401).send({
            message: 'Unable to find user',
            success: false,
        });
    } else {
        const passwordStatus = await bcryptjs.compare(
            userCred.password,
            user.password,
        );
        if (passwordStatus) {
            const token = jsonwebtoken.sign(userCred, 'code');
            res.status(200).send({ user, token, success: true });
        } else {
            res.status(401).send({
                message: 'Invalid password',
                success: false,
            });
        }
    }
});



router.get("/sample",verifyToken,(req,res)=>{
    res.send("hello");
})



module.exports=router;
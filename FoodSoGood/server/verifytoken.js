const jsonwebtoken=require('jsonwebtoken')
function verifyToken(req,res,next){
    if(req.headers.authorization!==undefined){
        let token=req.headers.authorization.split("")[1];
        jsonwebtoken.verify(token,"code",(err,userCred)=>{
            if(err===null){
                next();

            }
            else{
                res.send({message:"invalid"});
            }
        })

    }
    else{
        res.send({message:"Token is required"});
    }
}

module.exports=verifyToken;
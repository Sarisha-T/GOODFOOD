const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true,unique:true},
    mobilenum:{type:Number, maxlength:10},
    password:{type:String, minlength:8, required:true},
    role: { type: String, default: 'customer' },
    isAdmin: { type: Boolean, required:true, default:false},
},
{
    timestamps:true,
})

const userModel=mongoose.model("user",userSchema)

module.exports=userModel;

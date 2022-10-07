const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    mobilenum:{type:Number,maxlength:10},
    password:{type:String,required:true,minlength:8},
    role: { type: String, default: 'customer' },
    isAdmin: { type: Boolean,required:true,default:false},
},
{
    timestamps:true,
})

const userModel=new mongoose.model("user",userSchema)

module.exports=userModel;
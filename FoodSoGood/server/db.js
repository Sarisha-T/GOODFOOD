const mongoose=require("mongoose")
//mongo 

const database=process.env.DATABASE
mongoose.connect("mongodb://localhost:27017/goodfood",{
    useUnifiedTopology:true,
    useNewUrlParser:true
})
.then(()=>
    console.log("mongo connection successful"))
.catch((err)=>
    console.log("mongo connection failed",err))

module.exports=mongoose;
const express=require ('express');
const app=express();
const dotenv=require("dotenv")
const cors=require('cors')
const db=require("./db")
dotenv.config({path:'./.env'})

app.use(express.json());
app.use(cors());
// const userRouter=require('./controller/user')


const foodsRouter=require("./routes/foodRoute");
const userRouter=require("./routes/userRoute");
const orderRouter=require("./routes/orderRoute");
const food=require("./model/foodModel")

app.use('/api/users/',userRouter)
app.use('/api/foods/',foodsRouter)
app.use('/api/orders/',orderRouter)

// app.get("/getfooddu",(req,res)=>{
//     food.find({},(err,data)=>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send(data)
//         }
// })
// })

app.get("/",(req,res)=>{
    res.send("server working😂👍")
})

const port=process.env.PORT;
app.listen(port,()=>"server")
const mongoose=require('mongoose')

const foodSchema=new mongoose.Schema({
    name: {type: String, require},
    quantity: {type: Number, require},
    category:{type: String, require},
    prices: { type: Number, require},
    description: { type: String, require, minlength: 20},
    image: { type: String, require},
    // restaurant: {
    // type: mongoose.Schema.Types.ObjectId,
    // required: true,
    // ref: 'restaurants',
    // },
},
{
    timestamps:true,
})

const foodModel= mongoose.model("foods",foodSchema)

module.exports=foodModel;

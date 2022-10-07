const mongoose=require('mongoose')

const foodSchema=new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    category:{type: String, required: true},
    prices: { type: Number, required: true },
    description: { type: String, required: true, minlength: 20 },
    image: { type: String, required: true },
    restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'restaurants',
    },
},
{
    timestamps:true,
})

const foodModel=new mongoose.model("foods",foodSchema)

module.exports=foodModel;
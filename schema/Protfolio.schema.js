const mongoose=require("mongoose")
const Portfolio=mongoose.model("portfolio",new mongoose.Schema({
    name:String,
    desc:String,
    price:Number,
    image:String
}) )
module.exports={Portfolio}
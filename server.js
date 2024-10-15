const express=require("express")
const app=express()
const PortfolioRouter=require("./router/Portfolio.routes")
const cors=require("cors")
const mongoose=require("mongoose")
require('dotenv').config()
app.use(cors())
const PORT=process.env.PORT || 3001
app.use(express.json())
mongoose.connect("mongodb+srv://agamaliyevallahverdi2:Allahverdi123.@cluster0.4uy4jne.mongodb.net/").then(res=>{
    console.log("connected to mongodb")
})
app.use("/portfolio",PortfolioRouter)
app.listen(PORT,()=>{
    console.log("connected to back")
})
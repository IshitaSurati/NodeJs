const dbConnect = require("./db")
const User = require("./user.schema")
const express=require("express")
const isValid = require("./validate")
const app=express()
app.use(express.json())



app.get("/",async(req,res)=>{
    let data=await User.find()
    res.send(data)
})

app.post("/" ,isValid ,async(req,res)=>{
    let data=await User.create(req.body)
    res.send(data)
})

app.delete("/:id",async(res,req)=>{
    let{id}=req.params;
    res.send("delete");
    let data=await User.findByIdAndDelete(id)
})

app.patch("/:id",async(req,res)=>{
    let{id}=req.params
    let data=await User.findByIdAndUpdate(id,req.body)
    res.send(data)
})

app.listen(8090,()=>{
    console.log("Listening on port 8090");
    dbConnect()
})
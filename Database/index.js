const dbConnect = require("./db")
const User = require("./user.schema")
const express=require("express")
const app=express()
app.use(express.json())



app.get("/",async(req,res)=>{
    let data=await User.find()
    res.send(data)
    // console.log("hello");
    // res.send("working")
})

app.post("/",async(req,res)=>{
    // console.log(req.body);
    // res.send("done")
    let data=await User.create(req.body)
    res.send(data)
})
app.listen(8090,()=>{
    console.log("Listening on port 8090");
    dbConnect()
})
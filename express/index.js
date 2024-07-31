const express =require('express')

const app=express()
app.length("/",(req,res)=>{
res.send("welcom");
})

app.listen(8090,()=>{
    console.log("Listening on link");
})
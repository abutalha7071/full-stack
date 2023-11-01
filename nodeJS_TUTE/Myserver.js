const express=require("express")
const app=express()

app.listen(1025,function(req,res){
    console.log("Server is Starated at 1025")
})
app.get("/",function(req,res){
    res.send(" <h1 style='color:red'> Hi! This Is Abutalha Zaki </h1>")
})
app.get('/exam')
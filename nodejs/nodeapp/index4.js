import express from "express";

const app = express()
app.listen(8080,()=>{
    console.log("Server started")
})

//middleware
const logger = (req,res,next)=>{
req.msg="Hello";
next();
}
//app.use(logger);

app.get("/",(req,res)=>{
    res.end(req.msg+" World")
})

app.get("/products",logger,(req,res)=>{   //api...middleware...callback
    res.end(req.msg+" Products")
})
import express from "express";

const app = express()
app.listen(8080,()=>{
    console.log("Server started")
})

//middleware
const logger = (req,res,next)=>{
req.msg="Hello";
next();                                //goes to actual api
}
//app.use(logger);

app.get("/",(req,res)=>{
    res.end(req.msg+" World")
})

app.get("/products",logger,(req,res)=>{   //api...middleware...callback
    res.end(req.msg+" Products")
})

//-----------------------------------------------------------------------------------
const auth = (req,res,next)=>
{                                            //client-------->middleware-------->server
const name=req.params.name;
if(name==="john"){
         next();
    }
    else{
        res.send("ACCESS DENIED");
    }
}
app.get("/:name",auth,(req,res)=>{
    res.send("Hello World");

})
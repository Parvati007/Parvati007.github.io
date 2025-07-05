import express from"express";

const Router = express.Router();

Router.get("/show",(req,res)=>{
    res.send("showing users");

})
Router.post("/register",(req,res)=>{
    res.send("registered users");

})
Router.get("/login",(req,res)=>{
    res.send("login users");

})
 export default Router;
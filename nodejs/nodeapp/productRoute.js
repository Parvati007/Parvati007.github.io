import express from"express";

const Router = express.Router();
Router.get("/show",(req,res)=>{
    res.send("showing products");

})
Router.delete("/:id",(req,res)=>{
    res.send("deleting products ");

})

export default Router;
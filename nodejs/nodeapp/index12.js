//get > localhost:8080/api/users/show
//post > localhost:8080/api/users/register
//post > localhost:8080/api/users/login

//get > localhost:8080/api/products/show
//delete > localhost:8080/api/products/1

import express from "express";
import userRouter  from "./userRoute.js";     //only variable name is different from file name
import productRouter from "./productRoute.js";

const app = express();

app.listen(8080,()=>{
    console.log("Server Started");
})

//routing concept
app.use("/api/users",userRouter);
app.use("/api/products",productRouter);
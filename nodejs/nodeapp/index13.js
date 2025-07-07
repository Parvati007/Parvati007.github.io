//npm i mongoose
import express from "express";
import mongoose from "mongoose";
import userRouter from "./userRoute.js";


const app = express();
app.use(express.json()) 


//Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/lpu").then(()=>
{
    app.listen(8080,()=>{
    console.log("Server Started");
});
});

app.use("/api/users",userRouter);



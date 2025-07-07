import mongoose from "mongoose";
import express from "express";
const app=express();

//User Schema
const userSchema=mongoose.Schema( 
    {
    username:{type: String},
    email:{type:String, unique:true},
    password:{type:String},
    role:{type:String, default:"user"},
    },
    {timestamps: true}                  //created at and updated at info
);

app.use(express.json());

export default mongoose.model("User",userSchema);  //users will be stored as dbs name


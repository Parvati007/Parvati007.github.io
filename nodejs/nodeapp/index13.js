//npm i mongoose
import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const SECRET="sometext";

const app = express();

//Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/lpu").then(()=>
{
    app.listen(8080,()=>{
    console.log("Server Started");
});
});

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

const userModel=mongoose.model("User",userSchema);  //users will be stored as dbs name

//Register API
app.post("/register",async(req,res)=>{
try{

    const {username,email,password}=req.body;
    const hashedPwd = await bcrypt.hash(password,10);

    const user ={
        username,
        email,
        password:hashedPwd,
    };
    const result = await userModel.create(user);
    res.status(201).json(result);
}
catch(err){
    console.log(err);
    res.status(500).json({message: "Something went wrong"});
}
})

//Login API
app.post("/login",async (req,res)=>{
    try{
        const {email,password}=req.body;
        const existingUser = await userModel.findOne({email});

        if(existingUser){
            const isMatch = await bcrypt.compare(password,existingUser.password);

            if(isMatch){
                const userObj ={username:existingUser.username,email:existingUser.email,role:existingUser.role};
                const token = jwt.sign(userObj,SECRET,{expiresIn:"1h"});
                res.status(200).json({user:userObj,token});
            }else{
                res.status(400).json({message: "Invalid Password"});
            }
        }else{
            res.status(400).json({message: "User not found"});
        }


    }catch(err){
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
} )

//post request API
//update/:email API
//{role: "admin"}

app.post("/update/:email",async(req,res)=>{
    try{
        const {email,role}=req.body;
        const updatedUser = await userModel.findOneAndUpdate({email},{$set:{role}});
        res.json(updatedUser);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
})

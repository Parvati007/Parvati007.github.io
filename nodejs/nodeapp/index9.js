//npm i jsonwebtoken-----------------used for tokenization
import express from"express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const app = express();
const SECRET="sometext";

app.listen(8080,()=>{
    console.log("Server started");
})
let users =[];
app.use(express.json());

const authenticate=(req,res,next)=>{
try
    {
    let token =req.headers.authorization;
    token=token.split(" ")[1];
    const user = jwt.verify(token,SECRET);
    req.role = user.role;
    next();
    }
catch(err)
    {
       return res.json({message: "ACCESS DENIED"});
    }
}
const authorize=(role)=>{
    return (req,res,next) =>{
        if(req.role==role){
            next();
        }else{
         return res.json({message: "ACCESS DENIED"});   
        }
    };
}

app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    const found = users.find((user) => user.email === email && user.password === password);
    if(found){
        const token = jwt.sign(found,SECRET,{expiresIn:"1h"});
        res.status(200).json({user:found,token});
    }else{
        res.status(400).json({message:"ACCESS DENIED"});
    }
})

app.get("/users",authenticate,authorize("admin"),(req,res)=>{
    res.json(users);
})


app.post("/register",(req,res)=>{ 
  const {name,email,password,role}=req.body;
  const hashedpwd = bcrypt.hash(password,10);
  const user = {
    name,
    email,
    password: hashedpwd,
    role,
  }                                               
  users.push(req.body);
  res.json(user);
})


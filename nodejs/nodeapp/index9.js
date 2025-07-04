//npm i jsonwebtoken-----------------used for tokenization
import express from"express";
import jwt from "jsonwebtoken";

const app = express();
const SECRET="sometext";

app.listen(8080,()=>{
    console.log("Server started");
})
const users =[
    {
        name:"John",
        email:"john@gmail.com",
        password:"1234",
        role:"user",
    },
    {
        name:"Cathy",
        email:"cathy@gmail.com",
        password:"1234",
        role:"admin",
    }
]
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

//token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImVtYWlsI
//joiam9obkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQiLCJyb2xlIjoidXNlciIsImlhdCI6MT
// c1MTYyNDQwMn0.EKh7YSsyxJrwp3_NshD5afoH6C0zbFW9EuXx2NS_6Ts
 

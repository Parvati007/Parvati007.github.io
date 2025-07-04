//users=[]
//{name,email,pass}
//get > localhost:8080 > display all users
//post > localhost:8080/register
//post > localhoat:8080/login

import express from "express";
const app=express();

app.listen(8080,()=>
{
console.log("Server Started");
})

app.use(express.json())            

let users=[];

//Authorization middleware
const auth =(req,res,next)=>{
    if(req.headers.authorization !==""){
        next();
    }else{
        res.json({message:"Invalid Token"});
    }
}
//display
app.get("/",auth,(req,res)=>{                               
    res.json(users);
})

//register
app.post("/register",(req,res)=>{                                                 
  users.push(req.body);
  res.json({ message: "User Registered" });
})

//login
app.post("/login",(req,res)=>{                                                    
    const {email,pass}=req.body;
    const found = users.find(
    (user) => user.email === email && user.pass === pass
  );
  if (found) {
    res.json({ message: "Welcome" });
  } else {
    res.json({ message: "Access Denied" });
  }  
})

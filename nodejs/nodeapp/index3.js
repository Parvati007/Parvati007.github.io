//Express framework..............npm i express..............npm i nodemon

import express from "express";

const app=express();

app.listen(8080,()=>
{
    console.log("Server Started")
});

//API application programming interface

// app.get("/",(req,res)=>{
//     res.end("Good Morning");
// })

// app.get("/user",(req,res)=>{
//     res.end("Hello User");
// })

// app.get("/ab*cd",(req,res)=>{                //* -----can give any value or blank
//     res.end("Hello World");
// })

// app.get("/products",(req,res)=>{
//     res.status(201).json({name:"Product1",price:45});
// });

const products = [
    { id: 1, name: "Product 1", price: 45 },
    { id: 2, name: "Product 2", price: 70 },
    { id: 3, name: "Product 3", price: 55 },
];
app.get("/products/:id", (req, res) => {
    const id = parseInt(req.params.id); 
    const product = products.find(p => p.id === id);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: "Product not found" });
    }
});


//localhost:8080/name
// app.get("/name",(req,res)=>{
//     res.send("hello");
// })

//localhost:8080/john
// app.get("/student/:name",(req,res)=>{
//     res.send(req.params.name);//john
// })

// app.get("/student/:name/age/:age",(req,res)=>{
//     res.send(req.params.name+req.params.age);//parvati21
// })

// app.get("/:name/:age",(req,res)=>{
//     res.send(req.params.name+req.params.age);//parvati21
// })

// app.get("/",(req,res)=>{
//     res.send(req.headers.authorization);
// })

//localhost:8080/?name=john
// app.get("/",(req,res)=>{
//     res.send(req.query.name);
// })

//localhost:8080/?name=john&age=21
// app.get("/",(req,res)=>{
//     res.send(req.query.name+req.query.age);
// })
import express from "express";
const app=express();

app.listen(8080,()=>
{
console.log("Server Started");
})

app.use(express.json())            //middleware

let products=[]
app.post("/",(req,res)=>{                              //adding products
    const {id,name,price}=req.body;
    const obj ={
        id,
        name,
        price,
    }
    products.push(obj);
    res.json({message:"Products created"});
})

app.get("/",(req,res)=>{                              //display of products
    res.json(products);
})

app.delete("/:id",(req,res)=>{                        //deleting the product
    const id = Number(req.params.id);
    
    products=products.filter((product)=>product.id !== id);
    res.json("Product Deleted");
})
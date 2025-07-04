import express from "express";
const app = express();

app.use("/images",express.static("images"));
//app.use(express.static("images"));
app.use(express.static("public"));                                //middleware

app.listen(8080,() => {
    console.log("Server started");
});

app.get("/products",(req,res)=>{
    res.send("Product List");
});

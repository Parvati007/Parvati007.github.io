import http from 'http';

//created server and activated it
const server = http.createServer((req,res)=>{
    res.end("Good Morning");
});

server.listen(8080,()=>{
    console.log("Server Started");
})
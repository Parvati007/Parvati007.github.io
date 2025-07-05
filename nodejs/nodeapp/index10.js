//passing arguments through command line
//node     index10.js  mike     amy
//argv[0]...argv[1]...argv[2]...argv[3]

// const stName1=process.argv[2] || 'John';
// const stName2=process.argv[3] || 'John';
// console.log(`Hello ${stName1} and ${stName2}`);

import express from "express";

const app = express();
const port = process.argv[2] || 8080 ;

app.listen(port,() => {
    console.log(`Server started on ${port}`);
});
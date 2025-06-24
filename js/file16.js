//PROMISES
// function f1(y){
//     return new Promise((resolve,reject)=>{
//          if(y>0){
//             resolve(y);
//          }
//          else{
//             reject("Invalid input");
//          }

//         //resolve(5);
//         //reject("Something went wrong")
//     });

//     //return 5;
//     //setTimeout(()=>{return 5;},1000)
// }
// function f2(x){
//     console.log(x+7);
// }
// f1(-1)
// .then((n)=>f2(n))                   //then....indicates the function is returning the promise 
// .catch((err)=>console.log(err));    //in reject case....error comes

//---------------------------------------------------------------------------------------------------
//FETCH METHOD WITH .THEN 

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res)=>res.json())
// .then((data)=>{
//      data.map((value)=>{ 
//      console.log(value.name);         
//  })
// })
// .catch((err)=>console.log(err));

//---------------------------------------------------------------------------------------------------

//ASYNC/AWAIT METHOD

const fetchData= async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users"); //return promise ....await use kra
    const data = await res.json();                                         //return promise.....await use kra
    data.map((value)=>{ 
    console.log(value.name);         
});
};
fetchData();
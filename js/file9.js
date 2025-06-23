//ARRAYS

// const score=[ 2,1,7,5,3 ];
// console.log(score)
// console.log(score[0])
// score.push(9)
// console.log(score)
// console.log(score.length)

// const newScore =[...score,9]       //pushing using the spread operator used in react.js
// console.log(newScore)

//practical example 
// const cart={
//     1:5,
//     5:3,
// };
// const newCart=({...cart,2:9,4:4})
// console.log(newCart)

//Add to cart concept 
// let cart={};
// const products=[
//     {id:1,name:"Product1",price:25},
//     {id:2,name:"Product2",price:50},
//     {id:3,name:"Product3",price:75},
// ];
//const newProducts=[...products.{id:4,name:'product',price:56}]
// function addToCart(id){
//     cart= {...cart,[id]:1};
// }
// console.log(cart)
// addToCart(1)
// console.log(cart)
// addToCart(3)
// console.log(cart)

//array methods 

//const score =[2,1,7,5,3];
// score.forEach((value)=>{          //(value,index,arr)
//     console.log(value);
// })

// score.map((value)=>{          
//     console.log(value);
// })

// const newScore =score.map((value)=>{          //to create new array with same value and modify array   
//     return value+5;
// });
// console.log(newScore)

// const newScore =score.filter((value)=>{         //only satisfied value is printed not all
//     return value>2;
// });
// console.log(newScore)

// const newScore =score.find((value)=>{         //only going to return 1 value not the array
//     return value===2;
// });
// console.log(newScore)

// const newScore =score.reduce((sum,value)=>{         //((sum,value)=>sum+value,0)
//     return sum+value;
// },0);
// console.log(newScore);



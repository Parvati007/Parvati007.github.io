//CALLBACK FUNCTIONS

const f1=()=>{console.log('hello')};
const main=(x)=>{
    x()
}
main(f1); //function as arguments...

//-----------------------------------------------------------------------------------------------

const add = (...args)=>{
    console.log(args)          //arrow function we use spred operator(...) for arguments
    console.log(args[0])
}
add(4,5,6,7,8)
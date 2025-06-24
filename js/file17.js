//CLOSURE
function main(){
    let b=1;
            function sub(){  //sub function is closure function because main is parent function sub has access to main variable
            return b++;
            }
    return sub;
}
const f1=main()
console.log(f1())
console.log(f1())
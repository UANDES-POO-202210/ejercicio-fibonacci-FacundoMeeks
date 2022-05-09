
function FuncionFibonacci(number){
    
    var fn0=0;
    var fn1=1;
    var result=0;
    for (let iteracion=1; iteracion<number;iteracion++){
        result=fn1+fn0;
        fn0=fn1;
        fn1=result;
        
        



    } 
    return console.log(result);

}
var use_function=FuncionFibonacci(8);
console.log(use_function)



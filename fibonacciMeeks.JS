
function FuncionFibonacci(number){
    
    var valeu0=0;
    var valeu1=1;
    var result=0;
    for (let iteracion=1; iteracion<number;iteracion++){
        result=valeu1+valeu0;
        valeu0=valeu1;
        valeu1=result;
        
        



    } 
    return console.log(result);

}
var use_function=FuncionFibonacci(5);
console.log(use_function)



//metodo de Fibonacci.
//escribir numeros en serie donde cada numero es la suma de los 2 anteriores
// la formula F(n)=F(n-1)+F(n-2)
// se arranca con 0 y 1. estos sumados dan 1,2,3,5,8



const fibonacci = function(n) {
    let first = 0
    let second = 1
    if (n<0){
        return "OOPS"
    }
for (i = 0;i<=n;i++){
     
    current = first 
    first = second
    second = first + current  
    
}
    return current
};
fibonacci(3)

// Do not edit below this line
module.exports = fibonacci;

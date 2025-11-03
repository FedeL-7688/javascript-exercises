//crear funcion llamada suma que retorne la suma de todos los numeros entre 2 elementos pasados por argumento
//como calculo los numeros hallados entre esos 2 argumentos?
// let suma = 0
const sumAll = function(a,b) {
    let suma = 0

if (!Number.isInteger(a) || a<0){
        return ("ERROR")
    }
    else if (!Number.isInteger(b)|| b<0){
        return ("ERROR")
    }
    else {
        start = Math.min(a,b)
end = Math.max(a,b)
for (i=start; i<=end;i++){
   
   suma += i
}
return suma}

}

console.log(sumAll(-1,5))

// Do not edit below this line
module.exports = sumAll;

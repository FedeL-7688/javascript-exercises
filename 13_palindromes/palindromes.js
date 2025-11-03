
//verificar palindromo
//recibir una palabra
//invetir palabra
//unir palabra y comparar
//tiene que funcionar con puntuacion




const palindromes = function (word) {
 wordUP = word.replaceAll(" ","").replace(/[^a-z0-9áéíóúüñ]/gi, "")

 arrayWord = wordUP.split("").reverse().join("")
 

 
 if (wordUP.toLowerCase() == arrayWord.toLowerCase()){
   console.log("original word = ", wordUP, " ", "inverted word = ", arrayWord)
   return true
   
 }
 console.log("original word = ", wordUP, " ", "inverted word = ", arrayWord)
 return false
 
};


console.log(palindromes("Animal loots foliated detail of stool lamina."))
// Do not edit below this line
module.exports = palindromes;

suma = " "
function repeatString(palabra,num) {
for(i=0; i<num;i++){
    suma += palabra
}
return suma
};
console.log(repeatString("Peronismo",10000))



// Do not edit below this line
module.exports = repeatString;

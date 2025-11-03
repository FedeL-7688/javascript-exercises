const convertToCelsius = function(temp) {

newTemp = (temp - 32)*(5/9)
if (newTemp%2!==0){
return Number(newTemp.toFixed(1))
}
return newTemp
};

const convertToFahrenheit = function(temp) {
  newTemp = (temp*(9/5)+32)
  if(newTemp%2!==0){
   return Number(newTemp.toFixed(1))
  }
  return newTemp

};
console.log(convertToCelsius(10))
console.log(convertToFahrenheit(10))























// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

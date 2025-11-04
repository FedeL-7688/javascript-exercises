const add = function(num1,num2) {
	return num1 + num2
};

const subtract = function(num1,num2) {
	return num1 - num2
};

const sum = function(arr) {
  let sum= 0
	arr.forEach(element => {
    sum += element
  });
  return sum
};

const multiply = function(arr) {
 return arr.reduce((result,actual)=> {return result * actual},1)
 
};

const power = function(num1,num2) {
	return Math.pow(num1,num2)
};

const factorial = function(num) {
  let result = 1
	for (i=1;i<=num;i++){
    result *= i
  }
  return result
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};



replace(/[a^-z0-9áéíóúüñ]/gi, "")
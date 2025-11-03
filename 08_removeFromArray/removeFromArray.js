//recibir multiples argumentos repetidos

//solucionar capitalizacion

arreglo = ["Pan", "pan","queso", "pizza","Papaya","QUESO", "queso", "tomate"];

const removeFromArray = function (arr, ...args) {
  for (i = arr.length; i > 0; i--) {
    for (arg of args) {
      const foundElm = arr.findIndex(
        elm => {
  if (typeof elm === "string" && typeof arg === "string") {
    return elm.toLowerCase() === arg.toLowerCase();
  }
  return elm === arg;
});
      if (foundElm !==-1) {
        arr.splice(foundElm, 1);
      }
    }
  }
  return arr;
};

console.log(removeFromArray(arreglo, "pan", "queso", "tomate"));
console.log(arreglo);

// Do not edit below this line
module.exports = removeFromArray;

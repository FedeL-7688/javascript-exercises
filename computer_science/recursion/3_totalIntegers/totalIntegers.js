const totalIntegers = function (arr) {
  if (typeof arr !== "object") {
    return undefined;
  }
  arrFix = Object.values(arr);

  return arrFix.reduce(
    (acum, actual) => {
      if (typeof actual === "number" && Number.isInteger(actual)) {
        acum += 1;
      } else if (typeof actual === "object" && actual !== null) {
        acum += totalIntegers(actual);
      }
      return acum;
    },

    0,
  );
};
// Do not edit below this line
module.exports = totalIntegers;

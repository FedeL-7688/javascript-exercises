const contains = function (obj, val) {
  if (typeof obj !== "object") return false;

  objArr = Object.values(obj);

  for (const key of objArr) {
    if (Number.isNaN(key) && Number.isNaN(val)) return true;
    else if (key === val) return true;
    else if (typeof key === "object" && key !== null) {
      if (contains(key, val) === true) return true;
    }
  }

  return false;
};

// Do not edit below this line
module.exports = contains;

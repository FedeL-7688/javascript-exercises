const test1 = {
  try: 44,
};

const contains = function (obj, val) {
  if (typeof obj !== "object") return false
  
  objArr = Object.values(obj);

  if (objArr.includes(val)) return true;
  else
    for (const key of objArr) {
      if (typeof key === "object") {
        if( contains(key, val)===true)return true;
       
      }
    }

  return false;
};

console.log(contains(test1, 44));
// Do not edit below this line
module.exports = contains;

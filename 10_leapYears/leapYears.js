  // Write a program which will ask for a starting year and an ending year, 
  // and then puts all of the leap years between them (and 
  // including them, if they are also leap years). 
  // Leap years are years divisible by four (like 1984 and 2004).
  //  However, years divisible by 100 are not leap years (such as 1800 and 1900)
  //  unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years)

const leapYears = function (a) {
  
  if (a % 4 !== 0) return false;      
  if (a % 100 !== 0) return true;     
  if (a % 400 === 0) return true;     
  return false; 

}
console.log(leapYears(1996))

// Do not edit below this line
module.exports = leapYears;

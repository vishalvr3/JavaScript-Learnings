"use strict";

// Arrow Function
const calcAge3 = (birthYear) => 2037 - birthYear;
console.log(calcAge3(1996));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement}`;
};

console.log(yearsUntilRetirement(1996, "Vishal"));
console.log(yearsUntilRetirement(1980, "Bob"));

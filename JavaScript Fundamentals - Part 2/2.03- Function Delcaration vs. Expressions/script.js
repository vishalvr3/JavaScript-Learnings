"use strict";

////////////////// Function Declaration ///////////////////
const age1 = calcAge1(1991); // calling function declaration before they have defined in the code, worked

function calcAge1(birthYear) {
  return 2037 - birthYear;
}
// const age1 = calcAge1(1996);
console.log(age1);

/////////////////////// Function expression ///////////////

// const age2 = calcAge2(1996);  // Cannot access 'calcAge2' before initialization

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1996);

console.log(age1, age2);

// NOTE:
// We can call function declaration before they have defined
// But its not same in function expression

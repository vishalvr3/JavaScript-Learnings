////////////////////////////////////
//  Basic operators

// Math operators
const now = 2037;
const ageVishal = now - 1996;
const ageSarah = now - 2018;
console.log(ageVishal, ageSarah);

console.log(ageVishal * 2, ageVishal / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Vishal";
const lastName = "Chauhan";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // = is an assignment operator , x = 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

// Comparison operators
console.log(ageVishal > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

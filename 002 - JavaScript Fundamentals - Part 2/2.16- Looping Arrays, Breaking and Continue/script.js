"use strict";
console.log("Looping Arrays, Breaking n=and Continue");
const vishalArray = [
  "Vishal",
  "Chauhan",
  2037 - 1996,
  "student",
  ["RT", "ST", "TT", "UT", "VT", "WT"],
  true,
];

const types = [];
// console.log(vishalArray[0]);
// console.log(vishalArray[1]);
// ...
// console.log(vishalArray[4]);
// vishalArray[5] does NOT exist

// Log all elements individully on console
for (let i = 0; i < vishalArray.length; i++) {
  // Reading from Vishal Array
  console.log(vishalArray[i], typeof vishalArray[i]);

  // Filling types array
  // types[i] = typeof vishalArray[i]; // first way
  types.push(typeof vishalArray[i]); // second way
}

console.log(types);

// console.log(types[0] === "number");  // try to understand this

// Making array of ages from array of birth years
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// Continue and break
// continue: to exist the current iteration of the loop and continue to the next one
// break: used to completely terminate the whole loop

const vishal = [
  "Vishal",
  "Chauhan",
  2037 - 1996,
  "student",
  ["RT", "ST", "TT", "UT", "VT", "WT"],
  true,
];

console.log("--------- ONLY STRINGS ---------");
for (let i = 0; i < vishal.length; i++) {
  if (typeof vishal[i] !== "string") continue;

  console.log(vishal[i], typeof vishal[i]);
}

console.log("------- BREAK WITH NUMBER --------- ");
for (let i = 0; i < vishal.length; i++) {
  if (typeof vishal[i] === "number") break;

  console.log(vishal[i], typeof vishal[i]);
}

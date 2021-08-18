/////////////////////////////////////////
// Strings and Template Literals

const firstName = "Vishal";
const job = "student";
const birthYear = 1996;
const year = 2020;

const vishal =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(vishal);

const vishalNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(vishalNew);

console.log(`Just a regular string.....`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String with
multiple
lines`);

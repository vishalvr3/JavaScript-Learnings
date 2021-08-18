"use strict";

console.log("Bracket vs Dot notation");

///////////////////////////////////////
// Dot vs. Bracket Notation
const vishal = {
  firstName: "Vishal",
  lastName: "Singh",
  age: 2037 - 1996,
  job: "teacher",
  friends: ["RT", "ST", "TT"],
};
console.log(vishal);

console.log(vishal.lastName);
console.log(vishal["lastName"]);

const nameKey = "Name";
console.log(vishal["first" + nameKey]);
console.log(vishal["last" + nameKey]);

// console.log(vishal."last" + nameKey); // Unexpected string

// const interestedIn = prompt(
//   "What do you wanna know about vishal? Choose between firstName, lastName, age, job and friends"
// );
// console.log(vishal[interestedIn]); //here the prompt converts the input to array. so we didn't wrote "inteterestedIn"

// if (vishal[interestedIn]) {
//   console.log(vishal[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! \nWhat do you wanna know about vishal? Choose between firstName, lastName, age, job and friends"
//   );
// }

// Adding new properties to the object using dot and bracket
vishal.location = "India";
vishal["twitter"] = "@vishalsc";
console.log(vishal);

///////////// Challenge challenge ////////////
// "Vishal has three friends, and his best friend is called RT"

// TESTs
// console.log(vishal.firstName);
// console.log(vishal.friends.length);
// console.log(vishal.friends[0]);
// console.log(vishal["firstName"]);
// console.log(vishal["friends"].length);
// console.log(vishal["friends"][0]);

console.log(
  `${vishal.firstName} has ${vishal.friends.length} friends, and his best friend name is ${vishal.friends[0]}`
);

console.log(
  `${vishal["firstName"]} has ${vishal["friends"].length} friends, and his best friend name is ${vishal["friends"][0]}`
);

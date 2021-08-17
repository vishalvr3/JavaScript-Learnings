"use strict";
console.log("Looping Backwards and Loops in Loops");

const vishalArray = [
  "Vishal",
  "Chauhan",
  2037 - 1996,
  "student",
  ["RT", "ST", "TT", "UT", "VT", "WT"],
  true,
];

// Looping forward (learned in previous topic)
for (let i = 0; i < vishalArray.length; i++) {
  // console.log(vishalArray[i]);
}

// Looping backward
for (let i = vishalArray.length - 1; i >= 0; i--) {
  console.log(vishalArray[i]);
}

// Loop inside a loop

// three different exercises and we want it to be repeated for 5 times
// i.e; total of 15 repetition and 5 for each three exercise

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`----- Starting Exercise ${exercise}------`);

  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}

// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`--------- Type ${exercise} Exercise ---------`);
//   if (exercise === 1) {
//     for (let rep = 1; rep <= 5; rep++) {
//       console.log(`Exercise ${exercise} and Rep ${rep}`);
//     }
//   } else if (exercise === 2) {
//     for (let rep = 1; rep <= 5; rep++) {
//       console.log(`Exercise ${i} and Rep ${rep}`);
//     }
//   } else if (exercise === 3) {
//     for (let rep = 1; rep <= 5; rep++) {
//       console.log(`Exercise ${i} and Rep ${rep}`);
//     }
//   }
// }

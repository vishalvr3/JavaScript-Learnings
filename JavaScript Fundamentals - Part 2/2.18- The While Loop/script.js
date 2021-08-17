"use strict";
console.log("The While Loop");

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`FOR: Lifting weights repition ${rep} 🏋️‍♀️`);
// }

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6 + 1);
// console.log(dice);
while (dice !== 6) {
  console.log(dice);
  dice = Math.trunc(Math.random() * 6 + 1);

  if (dice === 6) {
    console.log("Loop is about to end");
  }
}

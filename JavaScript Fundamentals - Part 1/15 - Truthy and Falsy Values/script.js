//////////////////////////////////////////
// Truthy and Falsy values

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Vishal"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100; // money = 0, 0 is falsy value
if (money) {
  console.log(`Don't spend it all ;)`);
} else {
  console.log(`You should get a job!`);
}

let height = 0; // test values= height; , height = 0,  height = 123
if (height) {
  console.log(`YAY! Height is defined`);
} else {
  console.log(`Height is UNDEFINED`);
}

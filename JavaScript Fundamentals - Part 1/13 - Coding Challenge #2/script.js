////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Manish's BMI is higher than Vishal's!" or "Vishal's BMI is higher than Manish's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Manish's BMI (28.3) is higher than Vishal's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

// const heightManish = 1.69;
// const massManish = 78;
// const heightVishal = 1.95;
// const massVishal = 92;

// // const heightManish = 1.88;
// // const massManish = 95;
// // const heightVishal = 1.76;
// // const massVishal = 85;

// const BMIManish = massManish / heightManish ** 2;
// const BMIVishal = massVishal / (heightVishal * heightVishal);
// console.log(BMIManish, BMIVishal);

// if (BMIManish > BMIVishal) {
//   console.log(`Manish's BMI (${BMIManish}) is higher than Vishal's (${BMIVishal})!`);
// } else {
//   console.log(`Vishal's BMI (${BMIVishal}) is higher than Manish's (${BMIManish})!`);
// }

// REVISION (date- 28-03-2021, @09:30)
// Coding Challenge #2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Manish's BMI is higher than Vishal's!" or "Vishal's BMI is higher than Manish's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Manish's BMI (28.3) is higher than Vishal's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

const massManish = 78;
const heightManish = 1.69;
const massVishal = 92;
const heightVishal = 1.95;

// const massManish = 95;
// const heightManish = 1.88;
// const massVishal = 85;
// const heightVishal = 1.76;

const BMIManish = Math.trunc(massManish / heightManish ** 2);
const BMIVishal = Math.trunc(massVishal / heightVishal ** 2);
console.log(BMIManish, BMIVishal);

if (BMIManish > BMIVishal) {
  console.log(`Manish's BMI ${BMIManish} is higer than Vishal's ${BMIVishal}`);
} else {
  console.log(`Vishal's BMI ${BMIVishal} is higer than Manish's ${BMIManish}`);
}

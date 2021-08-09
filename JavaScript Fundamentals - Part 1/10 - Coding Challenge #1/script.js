//////////////////////////////////////
//  Coding Challenge #1

/*
Manish and Vishal are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Manish's and Vishal's mass and height in variables
2. Calculate both their BMIs us+ing the formula (you can even implement both versions)
3. Create a boolean variable 'manishHigherBMI' containing information about whether Manish has a higher BMI than Vishal.

TEST DATA 1: Manishs weights 78 kg and is 1.69 m tall. Vishal weights 92 kg and is 1.95 m tall.
TEST DATA 2: Manishs weights 95 kg and is 1.88 m tall. Vishal weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

/*
// const heightManish = 1.69;
// const massManish = 78;
// const heightVishal = 1.95;
// const massVishal = 92;

const heightManish = 1.88;
const massManish = 95;
const heightVishal = 1.76;
const massVishal = 85;

const BMIManish = massManish / heightManish ** 2;
const BMIVishal = massVishal / (heightVishal * heightVishal);
const manishHigherBMI = BMIManish > BMIVishal;

console.log(BMIManish, BMIVishal, manishHigherBMI);
*/

//  REVISION SOLUTION (27 march, 2021 @23:52) (Solved it using function)
//////////////////////////////////////
//  Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// TEST DATA 1:
// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

// TEST DATA 2:
let massMark = 95;
let heightMark = 1.88;
let massJohn = 85;
let heightJohn = 1.76;

function calcBMI(mass, height) {
  return mass / height ** 2;
}

let BMIMark = calcBMI(massMark, heightMark);
let BMIJohn = calcBMI(massJohn, heightJohn);

let markHigherBMI = BMIMark > BMIJohn;

console.log(`BMI Mark = ${BMIMark} 
and 
BMI John = ${BMIJohn}
and
Is Mark's BMI Higer than John's? = ${markHigherBMI}`);

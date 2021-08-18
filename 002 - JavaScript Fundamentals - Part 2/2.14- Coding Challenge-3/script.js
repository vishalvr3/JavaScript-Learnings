"use strict";
console.log("Coding Challenge #3");

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Manish and Vishal comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Manish Miller and Vishal Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "Vishal Singh's BMI (28.3) is higher than Manish Kumar's (23.9)!"

TEST DATA: Manishs weights 78 kg and is 1.69 m tall. Vishal weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const manish = {
  fullName: "manish kumar",
  mass: 78,
  height: 1.69,
  calcBMi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const vishal = {
  fullName: "vishal singh",
  mass: 92,
  height: 1.95,
  calcBMi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

vishal.calcBMi();
manish.calcBMi();
console.log(manish.bmi, vishal.bmi);

if (manish.bmi > vishal.bmi) {
  console.log(
    `${manish.fullName}'s BMI (${manish.bmi}) is higher than ${vishal.fullName}'s (${vishal.bmi})!`
  );

  // console.log(
  //   `${manish.fullName}'s BMI (${manish.bmi}) is higher than ${vishal.fullName}'s (${vishal.bmi}))!`
} else if (vishal.bmi > manish.bmi) {
  console.log(
    `${vishal.fullName}'s BMI (${vishal.bmi}) is higher than ${manish.fullName}'s (${manish.bmi})!`
  );
}

"use strict";

console.log("Object Methods");

const vishal = {
  firstName: "Vishal",
  lastName: "Singh",
  birthYear: 1996,
  job: "teacher",
  friends: ["RT", "ST", "TT"],
  hasDriversLicense: false,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear; //jonas.age
    return this.age;
  },

  getSummary: function () {
    vishal.hasDriversLicense ? "has a" : "doesn't have a";

    return `${this.firstName} is a ${this.calcAge()} old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(vishal.calcAge());

console.log(vishal.age);
console.log(vishal.age);
console.log(vishal.age);

// console.log(vishal["calcAge"]());

// Challenge
// "Vishal is a 41-years old teacher, and he has a drivers license"

console.log(vishal.getSummary());

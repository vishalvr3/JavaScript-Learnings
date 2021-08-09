//////////////////////////////////////
// let, const and var

/**
 let-
      we use let keyword to declare variable that can change
      let age = 30;
      age = 35; // value of age changes, reassigning/mutatating later


  const-
      we use const to declare a variable which is is not gonna change at some point in future
      const birtYear = 1996;
      birtYear = 1990;
      console.log(birthYear)  // gives error

      const job;  // this will also give error
 */

let age = 30;
age = 31;

const birthYear = 1995;
// birthYear = 1996;        // error, value is immutable
// const job;               // error, const undefined is not allowed

var job = "Programmer";
job = "Teacher";

lastName = "Chauhan";
console.log(lastName);

"use strict";
console.log("Arrays");

// Two most important type of Data Structure in JS are- Arrays and Objects

const friend1 = "RT";
const friend2 = "ST";
const friend3 = "TT";

const friends = ["RT", "ST", "TT"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

// replacing values in array with another value
friends[2] = "UT";
console.log(friends);
// friends = ['Ram', 'Shyam']  // will give error assignment to const variable

const firstName = "Vishal";
const vishal = [firstName, "Singh", 2037 - 1991, "Student", friends];
console.log(vishal);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

/////////////////////////////////////////////////////////////
// My Soluton of Exercise, Using calculated ages in an array
const calcAges = function (birthYear) {
  // console.log(birthYear);  //testing line
  let array = [];
  for (let i = 0; i < birthYear.length; i++) {
    array.push(2037 - birthYear[i]);
  }
  return array;
};
const birthYears = [1990, 1967, 2002, 2010, 2018];
console.log(calcAges(birthYears));

// Roughly  Practiced a little of destructuring Array, Spread Operator and Rest Operator
/*
const friends = ["RT", "ST", "TT"];
console.log(friends);

const [love, good, ainvyai] = [...friends];
console.log(love, good, ainvyai);

const [loveOfMyLife, ...goodFriends] = [...friends];
console.log(love, good);



// taking input from user

function insideFriendCircle(love, ...goodFriends) {
  console.log(`Love = ${love} \nand\nGood Friends = ${goodFriends}`);
}

const friendsList = [
  prompt("Your Best Friends Name:"),
  prompt("Your other friend 1: "),
  prompt("Your other friend 2: "),
  prompt("Your other friend 3: "),
  prompt("Your other friend 4: "),
  prompt("Your other friend 5: "),
];
// spread operator is used to spread the array of friends
insideFriendCircle(...friendsList);
*/

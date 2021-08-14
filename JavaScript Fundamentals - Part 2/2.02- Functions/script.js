"use strict";

//  the fundamental building block of JS applications are function
//  a function is a piece of code that we can use over and over again

function logger() {
  console.log("My name is Vishal");
}

//  calling/ running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const orangeJuice = fruitProcessor(2, 4);
console.log(orangeJuice);

const num = Number("23");

/////////////////////////////////////////
// Data Types

//  in JavaScript, every value is either an object or a primitive value.
/*
Object e.g.
let me = {
  name: "Vishal";
}
Primitive e.g.
let firstName = "Vishal";
let age = 30;
*/

// A value is primitive only when it's not an object
/*
7 primitive data types-
 NUMBER -
        Floating point numbers 👉🏽 Used for decimals and integers.
        let age = 23;
 STRING -
        Used for text, it's always in quotes
        let firstName = "Vishal";
 BOOLEAN -
        Logical type that can be true or false 👉🏽 Used for taking decisions
        let fullAge = true;
 UNDEFINED -
        Value taken by a variable that is not yet defined ('empty value')
        let children;
 NULL -
        Also means 'empty value'
 SYMBOL (ES2015) -
        Value that is unique and cannot be changed [Not useful for now]
 BIGINT (ES2020) -
        Larger integers than the Number type can hold
*/

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true); // boolean
console.log(typeof javascriptIsFun);
// console.log(typeof 23); // number
// console.log(typeof "Vishal"); // string

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun); // string

let year; // undefined
console.log(year);
console.log(typeof year); // undefined

year = 1991;
console.log(typeof year); // number

console.log(typeof null); // object

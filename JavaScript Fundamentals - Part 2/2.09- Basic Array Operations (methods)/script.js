"use strict";

const friends = ["RT", "ST", "TT"];

////////////////////////////////////////////////////////
//////////////// ADD ELEMENTS, arr.push(), arr.unshift()
////////////////////////////////////////////////////////

// adding element in the end of array
friends.push("UT");
console.log(friends);

// friends.push is a method, so it returns something... what? it returns the new length of the array
const newLength = friends.push("WT");
console.log(friends.push("XT")); // retuning new length directly
console.log(friends);
console.log(newLength);

// adding element in the beginning of array
friends.unshift("Vishal");
console.log(friends);

///////////////////////////////////////////////
/////////// REMOVE ELEMENTS, arr.pop(), arr.shift()
/////////////////////////////////////////////

// removing element from the end of array
friends.pop(); // removed "XT"
const popped = friends.pop(); // removed "WT"
console.log(friends);
console.log(popped);

// removing element from the beginning of array
friends.shift();
console.log(friends);

//////////////////////////////////////////////////
//////// Position of an element in array, .indexOf("element")
//////////////////////////////////////////////////
console.log(friends.indexOf("UT")); // returns 3
console.log(friends.indexOf("vishu")); // returns -1

friends.push(23);
console.log(friends.includes("UT")); // true
console.log(friends.includes("vishu")); // false
console.log(friends.includes("23")); // false, as its strict equality
console.log(friends.includes(23)); // true

// NOTE: since the method includes returns boolean true and false, we can use it write conditionals. E.g;
if (friends.includes("RT")) {
  console.log("You have a friend called RT");
}

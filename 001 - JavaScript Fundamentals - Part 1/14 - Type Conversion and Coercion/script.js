//////////////////////////////
//  Type Conversion and Coercion

// type conversion
const inputYear = "1995";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Vishal"));
console.log(typeof NaN); // it still is a number but a wrong number

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");
console.log("23" > "18");

let n = "1" + 1; // 11 , type=string
n = n - 1; // 11 - 1 = 10. type=number
console.log(n);

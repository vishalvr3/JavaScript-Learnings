/////////////////////////////////////////////
// The conditional (Ternary) Operator
const age = 23;
// age >= 18 ? console.log(`I like to drink wine 🍷`) : console.log(`I like to drink milk 🥛`);

const drink = age >= 18 ? `wine 🍷` : `milk 🥛`;
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = `wine 🍷`;
} else {
  drink2 = `milk 🥛`;
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `wine 🍷` : `milk 🥛`}`);

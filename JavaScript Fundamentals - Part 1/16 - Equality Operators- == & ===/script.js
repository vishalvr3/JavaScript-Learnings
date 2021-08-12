//////////////////////////////////////////////
// Equality operators: == & ===
const age = "18";
if (age === 18) console.log(`You just became an adult :D (strict)`);

if (age == 18) console.log(`You just became an adult :D (loose)`);

const favourite = Number(prompt(`What's your favourite number?`));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 22) {
  //22 === 23 -> FALSE
  console.log(`Cool! 22 is an amazing number`);
} else if (favourite === 7) {
  console.log(`7 is also a cool number`);
} else if (favourite === 96) {
  console.log(`96 is also a cool number`);
} else {
  console.log(`Number is not 22 or 7 or 96`);
}

if (favourite !== 22) console.log(`Why not 22?`);

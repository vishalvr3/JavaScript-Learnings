"use strict";

console.log("Coding Challenge #4");

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

/////////// My Solution ///////////////
/*
// 1
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// console.log(bills.length);

// 2
const tips = [];
const totals = [];

// 3
for (let i = 0; i < bills.length; i++) {
  // console.log(bills[i]);
  function calcTip(bill) {
    if (bill >= 50 && bill <= 500) {
      tips.push((15 / 100) * bill);
      totals.push(bill + tips[i]);
    } else {
      tips.push((20 / 100) * bill);
      totals.push(bill + tips[i]);
    }
  }
  calcTip(bills[i]);
}

console.log(tips);
console.log(totals);

// BONUS
const arr = [1, 2, 3, 4, 5];

function calcAverage(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }

  const average = total / arr.length;
  return `total=${total} array length=${arr.length} average=${average}`;
}

console.log(calcAverage(arr));
*/

/////////// JU Solution ///////////////

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
};

// 1
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// 2
const tips = [];
const totals = [];

// 3
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

// BONUS
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

"use strict";

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};
console.log(yearsUntilRetirement(1996, "Vishal"));
console.log(yearsUntilRetirement(1950, "Mike"));

/////////////////// REVIEWING STUFFS /////////////////
/*
Function Declaration:
                  Function that can be used before it's declared
                  e.g;
                  function calcAge(birthYear) {
                    return 2037 - birthYear;
                  }

Function expression:
                  Essentially a function value stored in a variable
                  e.g;
                  const calcAge = function (birthYear) {
                    return 2037 - birthYear;
                  }

Arrow Funcrtion:
                Great for a quick one-line functions. Has no this keyword.
                e.g;
                const calcAge = birthYear => 2037 - birthYear;

NOTE:
                👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆
    Above are three different ways of writing functions, but they all work in a similar way: receive data, transform data, and then output data.



    function functionName(parameter1, parameter2) { (function body)
      const age = 2037 - parameter1;
      console.log(`${parameter2} is ${age} years old.`);
      return age;
    }
    const age = calcAge(argument1, "argument2")  //calling function


    ///// Defining all terms of a function ///////

    function name:
    Parameters:
            placeholders to receive input values. Like local variables of a function.
    Function Body:
            block of code taht we want to reuse. Processes the function input data.
    return:
            statement to output a value from the function and terminate execution
    
    calling function:
            calling, running or invoking the function, using ()
    arguments: actual values of function parameters to input data. These values will replace with placeholders.

*/

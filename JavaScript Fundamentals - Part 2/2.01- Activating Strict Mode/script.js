"use strict";

/*
It is a special code that we can activate in JS, which makes it easier for us to write a secure JS code.
And all we have to do to activate strict mode is to write this string at the beginning of the script-  "use strict"

How does it helps ?
- It helps us developers to write secure code
- Helps us to avoid accidental errors. It avoids us to introduce bugs into our code.
and thats because of two reasons-
i) strict mode forbits us to do certain things
ii) It'll actually create visible errors for us in developer console where in another situation JS would fail silently
*/

// e.g;

let hasDriversLicense = false;
const passTest = true;
// test line-1 with an error. comment and uncomment strict mode to see the difference in the developers console
if (passTest) hasDriverLicense = true; // ommit the 's' in the variable hasDriversLicense
if (hasDriversLicense) console.log("I can drive :D");

// test line-2, strict mode reserves words
// const interface = "Audio";
// const private = 534;
// const if = 23;

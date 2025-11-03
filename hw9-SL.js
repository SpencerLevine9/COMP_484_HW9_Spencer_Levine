// Spencer Levine
// 11/2/25
// COMP 484
// HW 9


// Exercise 1

var expressionResult = 3 + 5 * (10 / 2) - (8 - 4);
console.log(expressionResult); // Expected output: 24

// Exercise 2

var projectIdentifier = "COMP484";

// Incorrect casing (doesn't affect the original variable)
ProjectIdentifier = "JS_Advanced";

// Explanation:
// JavaScript is case-sensitive. 'ProjectIdentifier' and 'projectIdentifier'
// are two different variables.
projectIdentifier = "JS_Advanced";
console.log(projectIdentifier); // JS_Advanced

// Exercise 3

var courseDescription = "The course is \"interactive\" and involves 'scripting' logic."; // Using escape characters for double quotes
console.log(courseDescription); 

// Exercise 4

var errorMessage = 'An internal server error occurred: \"Access Denied\"'; // using escape characters for double quotes
console.log(errorMessage);

// Exercise 5

var valueA = 10;
var valueB = "4";

var resultSubtraction = valueA - valueB;
var resultMultiplication = valueA * valueB;

console.log(resultSubtraction); // Expected output: 6
console.log(resultMultiplication); // Expected output: 40
console.log(typeof resultSubtraction);  // "number"
console.log(typeof resultMultiplication); // "number"

/*
Explanation:
In JavaScript, the '-' and '*' operators convert string operands to numbers
when performing arithmetic operations, allowing for correct calculations
*/

// Exercise 6

var unassignedVar;
var explicitNull = null;

console.log(typeof unassignedVar); // Expected output: "undefined"
console.log(typeof explicitNull); // Expected output: "object"

/*
Why does typeof null === "object"?

- The null value was represented with a null pointer whose tag also matched the "object" pattern.
- For backward compatibility, `typeof null` returns "object"
- `undefined` means a variable was declared but not assigned.
- `null` means an explicit "no value".
- `typeof` returns "undefined" for undefined, but "object" for null.
*/

// Exercise 7

var isBlocking = true;
console.log(typeof isBlocking); // Expected output: "boolean"

var isBlocking = "true";
console.log(typeof isBlocking); // Expected output: "string"

// Exercise 8

// var 2cool = "nope"; 
// Invalid: variable names cannot start with a number.

// var user name = "Spencer";
// Invalid: spaces are not allowed in variable names; use camelCase instead (userName).

// var @handle = "test"; 
// Invalid: variable names cannot contain special symbols except _ or $.


// Exercise 9

var counterValue = 50;

counterValue /= 5; // shorthand for counterValue = counterValue / 5
counterValue -= 3; // shorthand for counterValue = counterValue - 3

console.log(counterValue); // Expected output: 7


// Exercise 10

var x = 10;
var y_post = x++;  // y_post gets the *current* value of x (10), then x increments to 11

console.log("y_post:", y_post); // 10
console.log("x after postfix:", x); // 11


x = 10;
var z_pre = ++x;  // x increments *first* (now 11), then that value is assigned to z_pre

console.log("z_pre:", z_pre); // 11
console.log("x after prefix:", x); // 11

/*
Postfix (x++) → returns the current value, then increments.
Prefix (++x) → increments first, then returns the new value.
*/


// Excercise 11

var testNumber = 0;
var testBoolean = false;

if (testNumber == testBoolean) {
    console.log("They are loosely equal!");
}
// JavaScript's loose equality (==) converts both sides to a common type before comparing.
// Here, false is coerced to 0, so (0 == false) becomes (0 == 0) → true.


// Exercise 12

var versionA = 10.0;
var versionB = "10.0";

if(versionA !== versionB) {
    console.log("They are NOT strictly equal.");
}
else {
    console.log("They ARE strictly equal.");
}
// Strict inequality ( !== ) compares both value and type.
// Since versionA is a number and versionB is a string, they are not strictly equal.


// Exercise 13

var isLoggedIn = true;
var isSubscriber = true;
var isTrialExpired = false;

if((isLoggedIn && isSubscriber) || (isLoggedIn && !isTrialExpired)) {
    console.log("Access Granted");
}


// Exercise 14

var conditionA = true;
var conditionB = false;

if (conditionA) {
  if (!conditionB) {
    console.log("XOR Success");
  } else {
    console.log("XOR Fail");
  }
} else {
  if (conditionB) {
    console.log("XOR Success");
  } else {
    console.log("XOR Fail");
  }
}

// Explanation:
// The condition checks for exclusive or (XOR):
// It evaluates to true if exactly one of conditionA or conditionB is true,
// but not both.

// Exercise 15

var scriptLoadType = "deferred";
var loadStatus;

if (scriptLoadType == "deferred") {
  loadStatus = "Non-blocking";
}
else {
    loadStatus = "Potentially Blocking";
}

console.log(loadStatus); // Expected: "Non-blocking"

var loadStatusTernary = (scriptLoadType == "deferred") ? "Non-blocking" : "Potentially Blocking";
console.log(loadStatusTernary); // Expected: "Non-blocking"

// The ternary operator is a compact way to write an if/else expression.
// Here, it checks if scriptLoadType equals "deferred" and assigns the correct message.


// Exercise 16

function calculateRenderTime() {
      // actual implementation would go here
}

/*
  Function: calculateRenderTime
  Purpose:
  - Calculates the time it takes for the browser to parse HTML
    and execute JavaScript during page load.
  - This function would be useful for measuring performance metrics.
*/


// Exercise 17

var today = new Date();

var month = today.getMonth() + 1; // months zero-indexed (0–11)
var day = today.getDate();        // day of the month
var year = today.getFullYear();   // full year

var formattedDate = "Today is " + month + "/" + day + "/" + year;
console.log(formattedDate); 

// The Date object provides methods for getting the month, day, and year.
// getMonth() returns 0–11, so we add 1.

// Exercise 18

var val1 = 20;
var val2 = "5";
var sumResult = val1 + val2;
var diffResult = val1 - val2;

console.log(sumResult);
console.log(diffResult);

/*
Explanation:
- When using the '+' operator, if one operand is a string, JavaScript converts the other operand to a string.
  So (20 + "5") becomes "20" + "5" → "205" (string concatenation).

- When using '-' (or other arithmetic operators), JavaScript converts string values that look numeric into numbers.
  So (20 - "5") becomes 20 - 5 → 15 (numeric subtraction).

- Therefore, '+' may produce a string result, while other arithmetic operators perform numeric coercion.
*/


// Exercise 19

var dataInput = 484;

if(typeof dataInput === "number"){
    console.log("Input is numeric.");
}
else {
    dataInput = true;
    console.log("New type:", typeof dataInput);
}

// typeof returns the data type as a string.
// If dataInput is a number, it logs "Input is numeric."
// Otherwise, it reassigns the variable to true and logs its new type.


// Exercise 20

/*
If this script runs in the <head> of an HTML document
without the "defer" or "async" attribute, it executes
before the browser finishes building the <body> content.

At that moment, document.body and its elements do not yet exist,
so attempting to access or modify them like setting innerHTML
causes an error such as:
"Cannot set property 'innerHTML' of null".

The fix is to either:
1. Place the <script> tag at the bottom of the <body>, OR
2. Add the 'defer' attribute so the script runs after the HTML is parsed.
*/

/*
If this script runs in the <head> without defer/async, it may execute
before the <body> exists, causing errors like "Cannot set property 'innerHTML' of null".
Place scripts at the end of <body> or use 'defer' so DOM is parsed first.
*/

if (typeof document !== "undefined" && document.body) {
  var headerElement = document.createElement("h1");
  headerElement.innerHTML = "Interactive Layer Loaded";
  document.body.appendChild(headerElement);
}

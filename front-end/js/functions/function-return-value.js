/**
 * Function with a return value
 * @param {Number} a
 * @param {Number} b
 * @returns Number
 */
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
console.log(result);
console.log();

/**
 * Function with multiple return directives
 * @param {Number} age
 * @returns Boolean
 */
function checkAge(age) {
  return age >= 18;
}

if (checkAge(17)) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

/**
 * Function with an empty return
 * @param {Number} age
 * @returns undefined
 */
function showMovie(age) {
  if (!checkAge(age)) {
    return;
  }
  console.log("Showing you the movie");
}

let valueObtained1 = showMovie(19);
console.log(valueObtained1);
console.log();

/**
 * Function without a return statement
 * @param {Number} age
 * @returns undefined
 */
function displayAge(age) {
  console.log(age + " years old");
  // return;
}

let valueObtained2 = displayAge(5);
console.log(valueObtained2);
console.log();

/**
 *
 * @returns {Function}
 */
function getMultiplier() {
  return function (a, b) {
    console.log("Product = " + a * b);
  };
}

console.log(getMultiplier());
let multiply = getMultiplier(); // function expression
multiply(3, 4);

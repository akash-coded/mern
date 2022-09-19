/**
 * Arrow function
 * @param {number} a
 * @param {number} b
 * @returns number
 */
let sum1 = function (a, b) {
  return a + b;
};
console.log(sum1(112, 123));

// Arrow function
let sum = (a, b) => a + b;
console.log(sum(112, 123));

// If we have only one argument,
// then parentheses around parameters can be omitted, making that even shorter.
let double = (n) => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }
console.log(double(6));

// If there are no arguments, parentheses will be empty (but they should be present):
let sayHello = () => console.log("Hello!");
sayHello();

/**
 * Multiline arrow function
 * @param {number} a
 * @param {number} b
 * @returns number
 */
let product = (a, b) => {
  // the curly brace opens a multiline function
  let result = a * b;
  return result; // if we use curly braces, then we need an explicit "return"
};
console.log(product(2, 7));

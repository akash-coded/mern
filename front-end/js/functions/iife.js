/**
 * Ordinary function
 * @param {number} a
 * @param {number} b
 * @returns number
 */
function add(a, b) {
  return a + b;
}

let ordinarySum = add(7, 3);
console.log(ordinarySum);

/**
 * Function expression (Anonymous function)
 * @param {number} a
 * @param {number} b
 * @returns number
 */
let findSum = function (a, b) {
  return a + b;
};

let anonymousSum = findSum(7, 3);
console.log(anonymousSum);

/**
 * Immediately-Invoked Function Expressin (IIFE)
 * Self-executing function
 */
let additiveResult = (function (a, b) {
  return a + b;
})(7, 3);

console.log(additiveResult);

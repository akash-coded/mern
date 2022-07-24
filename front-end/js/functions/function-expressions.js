// regular function
function myAdd(num1, num2) {
  return num1 + num2;
}
let sum = myAdd(2, 4);
console.log("Sum = " + sum);

// function expression
let myAddFE = function (num1, num2) {
  return num1 + num2;
};
let sumFE = myAddFE(2, 49);
console.log("Sum from FE = " + sumFE);

/**
 * Function is a value (albeit a special value because you can call it)
 */
function sayHi() {
  console.log("Hi!");
}

console.log(sayHi); // does not run the function, because there are no parentheses after sayHi

let func = sayHi; // copy
sayHi(); // run the function
func(); // run the copy

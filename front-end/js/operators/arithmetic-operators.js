/**
 * Basic arithmetic(maths) operators
 */
console.log(2 + 3); // addition
console.log(5 - 3); // subtraction
console.log(2 * 3); // multiplication
console.log(5 / 2); // division
console.log(5 % 2); // remainder or modulus
console.log(5 ** 2); // exponentiation
console.log(16 ** (1 / 2));
console.log();

/**
 * Negation with unary -
 */
let num = 5;
num = -num;
console.log(num);
console.log();

/**
 * Numeric conversion with unary +
 */
let x = 1;
console.log(+x);

let y = -2;
console.log(+y);

console.log(+true);
console.log(+"");

let apples = "2";
let oranges = "3";
console.log(+apples + +oranges);
console.log(Number(apples) + Number(oranges));
console.log();

/**
 * Assignment = returns a value
 */

let p = 1;
let q = 2;

let r = 3 - (p = q + 1);
console.log(r); // 0
console.log();

/**
 * Chaining assignments
 */

let a1, a2, a3;
a1 = a2 = a3 = 4;
console.log(`a1 = ${a1}`);
console.log(`a2 = ${a2}`);
console.log(`a3 = ${a3}`);
console.log();

/**
 * Modify-in-place
 * (Modify-and-assign operators/Compound assignment operators)
 */

let d = 2;
d = d + 5;
d = d * 2;

d += 5;
d *= 2;
console.log(d);
console.log();

/**
 * Increment/decrement
 */
let counter = 1;
let temp = ++counter; // = counter = counter + 1
console.log(temp);
console.log(`counter = ${counter}`); // 2

counter = 1; // reset the counter
temp = counter--;
console.log(temp); // 1
console.log(`counter = ${counter}`); // 0
console.log();

let a = 5;
let b = 6;

/**
 * compound assignment/shorthand assignment operators
 */
b += 7;
console.log(b);
b += a;
console.log(b);

b -= 3;
console.log(b);
b -= a;
console.log(b);

b *= 3;
console.log(b);
b *= a;
console.log(b);

b /= 3;
console.log(b);
b /= a;
console.log(b);

b %= 3;
console.log(b);
b %= a;
console.log(b);

/**
 * array destructuring
 */
let numbers = ["one", "two", "three"];

// without destructuring
let x = numbers[0];
let y = numbers[1];
let z = numbers[2];

// with destructuring
let [num1, num2, num3] = numbers;

console.log(num1);
console.log(num2);
console.log(num3);

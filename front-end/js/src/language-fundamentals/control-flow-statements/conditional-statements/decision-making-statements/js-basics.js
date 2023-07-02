let num = 471;

let countOfDigits = 0;
let copyNum = num;
while (copyNum != 0) {
  let digit = copyNum % 10;
  console.log(digit);
  copyNum = Math.floor(copyNum / 10);
  countOfDigits++;
}

// for (
//   let copyNum = num;
//   copyNum != 0;
//   countOfDigits++, copyNum = Math.floor(copyNum / 10)
// ) {
//   let digit = copyNum % 10;
//   console.log(digit);
// }

console.log(`The number ${num} has ${countOfDigits} digits.`);

function oddFilter(numbers) {
  let oddNumbers = [];

  for (const number of numbers) {
    if (number % 2 != 0) {
      oddNumbers.push(number);
    }
  }

  return oddNumbers;
}

function evenFilter(numbers) {
  let evenNumbers = [];

  for (const number of numbers) {
    if (number % 2 == 0) {
      evenNumbers.push(number);
    }
  }

  return evenNumbers;
}

let numArray1 = [1, 2, 3, 4, 5, 6];
console.log(oddFilter(numArray1));
console.log(evenFilter(numArray1));
console.log();

/**********************************************************************************************/

function isOdd(num) {
  return num % 2 != 0;
}

function isEven(num) {
  return num % 2 == 0;
}

function filter(numbers, fn) {
  let results = [];

  for (const number of numbers) {
    if (fn(number)) {
      results.push(number);
    }
  }

  return results;
}

let numArray2 = [1, 2, 4, 7, 3, 5, 6, 9];
console.log(filter(numArray2, isOdd));
console.log(filter(numArray2, isEven));
console.log();

// Using anonymous functions as callbacks
let multiplesOf3 = filter(numArray2, function (num) {
  return num % 3 == 0;
});
console.log(multiplesOf3);
console.log();

// Using arrow functions as callbacks
multiplesOf3 = filter(numArray2, (num) => num % 3 == 0);
console.log(multiplesOf3);
console.log();

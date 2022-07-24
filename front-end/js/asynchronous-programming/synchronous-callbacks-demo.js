function filter(numbers, callback) {
  let results = [];
  for (const number of numbers) {
    if (callback(number)) {
      results.push(number);
    }
  }
  return results;
}

let myNumbers = [1, 2, 4, 7, 3, 5, 6];

let oddNumbers = filter(myNumbers, (number) => number % 2 != 0);

console.log(oddNumbers);

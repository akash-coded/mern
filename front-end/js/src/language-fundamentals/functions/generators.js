/**
 * Generator function that generates a sequence of numbers
 *
 * @returns number
 */
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();
console.log(generator);

let firstElement = generator.next();
console.log(JSON.stringify(firstElement));
console.log(firstElement.value);

let secondElement = generator.next();
console.log(JSON.stringify(secondElement));
console.log(secondElement["value"]);

let thirdElement = generator.next();
console.log(JSON.stringify(thirdElement));
console.log();

let generator1 = generateSequence();
for (let value of generator1) {
  console.log(value);
}
console.log();

let sequence = [-1, 0, ...generateSequence()];
console.log(sequence);

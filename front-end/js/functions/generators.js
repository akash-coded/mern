function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();
console.log(generator);

let firstElement = generator.next();
console.log(JSON.stringify(firstElement));

let secondElement = generator.next();
console.log(JSON.stringify(secondElement));

let thirdElement = generator.next();
console.log(JSON.stringify(thirdElement));
console.log();

let generator1 = generateSequence();
for (let value of generator1) {
  console.log(value);
}
console.log();

let sequence = [0, ...generateSequence()];
console.log(sequence);

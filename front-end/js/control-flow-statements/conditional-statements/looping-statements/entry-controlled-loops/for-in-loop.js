// For In Loop Over Objects
const person = {
  firstname: "Akash",
  lastname: "Das",
  age: 99,
};
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
console.log();

// For In Loop Over Arrays
const numbers = [45, 4, 9, 16, 25];
for (let index in numbers) {
  console.log(`numbers[${index}] = ${numbers[index]}`);
}
console.log();

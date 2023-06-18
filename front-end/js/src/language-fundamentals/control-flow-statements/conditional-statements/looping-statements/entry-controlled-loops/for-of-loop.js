const cars = ["BMW", "Volvo", "Audi"];

// Problem with For In Loop
for (let x in cars) {
  console.log(x + ", ");
}
console.log();

// For Of Loop Over Arrays
for (let x of cars) {
  console.log(x + ", ");
}
console.log();

// For Of Loop Over Strings
let language = "JavaScript";
for (let x of language) {
  console.log(x);
}
console.log();

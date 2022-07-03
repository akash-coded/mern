const cars = ["BMW", "Volvo", "Saab", "Ford"];

list: {
  console.log(cars[0]);
  break list;
  console.log(cars[1]);
  console.log(cars[2]);
  console.log(cars[3]);
}
console.log();

// Shortcoming of simple break and continue
for (let car of cars) {
  for (let j of car) {
    if (j === "l") {
      break;
    }
    process.stdout.write(j + " ");
  }
  console.log();
}
console.log();

for (let car of cars) {
  for (let j of car) {
    if (j === "l") {
      continue;
    }
    process.stdout.write(j + " ");
  }
  console.log();
}
console.log();

// Label with break and continue
loop1: for (let car of cars) {
  for (let j of car) {
    if (j === "l") {
      break loop1;
    }
    process.stdout.write(j + " ");
  }
  console.log();
}
console.log();

loop2: for (let car of cars) {
  for (let j of car) {
    if (j === "l") {
      continue loop2;
    }
    process.stdout.write(j + " ");
  }
  console.log();
}
console.log();

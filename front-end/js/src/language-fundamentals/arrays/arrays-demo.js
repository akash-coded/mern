let arr1 = [];
let arr2 = new Array();

let fruits = ["Apple", "Orange", "Plum"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Plum

fruits[2] = "Pear"; // now ["Apple", "Orange", "Pear"]
fruits[3] = "Lemon"; // now ["Apple", "Orange", "Pear", "Lemon"]
console.log(fruits);
console.log("Length of fruits array = " + fruits.length);

let mixed = [1, "Apple", true, null, undefined, { name: "John" }];
console.log(mixed);

function myUnshift(array, newElement) {
  return [newElement, ...array];
}

function myForEach(array) {
  for (let ele of array) {
    console.log(ele);
  }
}

let fruits = ["orange", "mango", "apple", "guava"];
console.log(fruits);

let newArray = myUnshift(fruits, "kiwi");
console.log(newArray);
myForEach(newArray);

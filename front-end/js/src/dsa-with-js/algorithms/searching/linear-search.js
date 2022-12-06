function linearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
}

let array = [4, 8, 7, 2, 11, 1, 3];
let ele = 7;
let result = linearSearch(array, ele);

if (result < 0) {
  console.log("The element is not in the array");
} else {
  console.log(`Element ${ele} is in the array at index ${result}.`);
}

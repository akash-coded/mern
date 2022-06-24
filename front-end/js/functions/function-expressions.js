/**
 * Function is a value (albeit a special value because you can call it)
 */
function sayHi() {
  console.log("Hi!");
}

console.log(sayHi); // does not run the function, because there are no parentheses after sayHi

let func = sayHi; // copy
sayHi(); // run the function
func(); // run the copy

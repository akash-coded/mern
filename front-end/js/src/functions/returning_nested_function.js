/**
 *  A function returning a function
 * @returns Function
 */
function makeCounter() {
  let count = 0;

  return function () {
    console.log(count++); // Can access outer variables
  };
}

// a closure
let counter = makeCounter();
counter();
counter();
counter();

/**
 * Currying in JavaScript
 *
 * We’ll create a helper function curry(f) that performs currying for a two-argument f.
 * In other words, curry(f) for two-argument f(a, b) translates it into a function
 */
function curry(f) {
  // curry(f) does the currying transform
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

// usage
function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);

console.log(sum(1, 2));
console.log(curriedSum(1)(2));
// The result of curry(func) is a wrapper function(a).
// When it is called like curriedSum(1), the argument is saved in the Lexical Environment, and a new wrapper is returned function(b).
// Then this wrapper is called with 2 as an argument, and it passes the call to the original sum.

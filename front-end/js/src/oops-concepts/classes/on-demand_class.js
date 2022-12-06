/**
 * Creates a class dynamically on-demand
 * @param {string} phrase
 * @returns class
 */
function makeClass(phrase) {
  // declare a class and return it
  return class {
    constructor(name) {
      this.name = name;
    }

    sayHi() {
      console.log(`${phrase} ${this.name}`);
    }
  };
}

// Create a new class
let User = makeClass("Hi");

// Creating an instance of the class
new User("Akash").sayHi();

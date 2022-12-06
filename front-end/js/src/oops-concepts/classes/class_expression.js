/**
 * Class expression
 */
let User = class {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi ${this.name}`);
  }
};

new User("Akash").sayHi();

/**
 * Named class expression
 */
let AnotherUser = class CreateUser {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi ${this.name}`);
  }

  showCode() {
    console.log(CreateUser); // CreateUser class name is visible only inside the class
  }
};

new AnotherUser("Jones").showCode();
// console.log(CreateUser); // error, CreateUser name isn't visible outside of the class

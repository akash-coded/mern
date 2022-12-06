/**
 * Computed method name
 */
class User {
  constructor(name) {
    this.name = name;
  }

  ["say" + "Hi"]() {
    console.log(`Hi ${this.name}`);
  }
}

new User("Akash").sayHi();

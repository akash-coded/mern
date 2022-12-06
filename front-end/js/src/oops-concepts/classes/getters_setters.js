/**
 * Class with getters and setters
 */
class User {
  constructor(name) {
    // invokes the setter
    this.name = name;
  }

  // getter
  get name() {
    return this._name;
  }

  //setter
  set name(value) {
    if (value.length < 2) {
      console.log("Name is too short.");
      return;
    }
    this._name = value;
  }
}

let user = new User("John");
console.log(user.name);

user.name = "Alex";
console.log(user.name);

function Person(firstName, lastName) {
  // this = {};

  //   if (!new.target) {
  //     throw Error("Cannot be called without the new keyword");
  //     }

  //   if (!new.target) {
  //     return new Person(firstName, lastName);
  //   }

  // add properties to this
  this.firstName = firstName;
  this.lastName = lastName;

  // add methods to this
  this.getFullName = function () {
    return this.firstName + " " + this.lastName;
  };

  // return this;
}

let person1 = new Person("John", "Doe");
console.log(person1);
console.log(person1.getFullName());
console.log();

let person2 = new Person("James", "Smith");
console.log(person2);
console.log(person2.getFullName());
console.log();

let person3 = Person("Alex", "Tanner");
console.log(person3); // undefined

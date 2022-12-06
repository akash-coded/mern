function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

let john = new Person("John Doe");
console.log(john.getName());

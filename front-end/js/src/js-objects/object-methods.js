let user = {
  name: "John",
  age: 30,
  move: function () {
    console.log("Walking.");
  },
  eat() {
    console.log("Sphagetti Bolognese.");
  },
};

user.sayHi = function () {
  console.log("Hello!");
};

user.move();
user.eat();
user.sayHi();

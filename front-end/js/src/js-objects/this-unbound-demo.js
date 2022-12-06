let user = { name: "John" };
let admin = { name: "Alex" };

function sayHi() {
  console.log(this.name);
}
sayHi();

user.fun = sayHi;
admin.fun = sayHi;

user.fun();
admin["fun"]();

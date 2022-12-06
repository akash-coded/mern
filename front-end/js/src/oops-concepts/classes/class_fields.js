/**
 * Class fields
 */
class User {
  name = "John";

  sayHi() {
    console.log(`Hi, ${this.name}`);
  }
}

new User().sayHi();

/**
 * Making bound methods with class fields
 */
class Button {
  constructor(value) {
    this.value = value;
  }

  click = () => {
    console.log(this.value);
  };
}

let button = new Button("hello");
setTimeout(button.click, 1000);

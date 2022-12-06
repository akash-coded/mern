class Dog {
  constructor(color, speed) {
    this._speed = speed;
    this._color = color;
  }
}

class Husky extends Dog {
  constructor(color, speed, owner) {
    super(color, speed);
    this._owner = owner;
  }

  showInfo() {
    console.log(
      "color: " +
        this._color +
        " speed: " +
        this._speed +
        " owner: " +
        this._owner
    );
  }
}

let dog = {
  color: "white",
};

let husky = {
  owner: "ABC",
};

husky.__proto__ = dog;
console.log(husky.owner + " is an owner of " + husky.color + " Husky");

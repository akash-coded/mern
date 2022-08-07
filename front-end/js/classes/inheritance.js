class CoffeeMachine {
  // protected property
  _waterAmount = 0; // the amount of water inside
  // private property
  #coffeeBeansQty = 0; // the amount of coffee beans left

  constructor(power) {
    // read-only property
    this._power = power;
    console.log(`Created a coffee-machine, power: ${power}`);
  }

  get power() {
    return this._power;
  }

  set waterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  set coffeeBeansQty(value) {
    if (value < 0) {
      value = 0;
    }
    this.#coffeeBeansQty = value;
  }

  get coffeeBeansQty() {
    return this.#coffeeBeansQty;
  }
}

class MegaCoffeeMachine extends CoffeeMachine {
  getCoffeeBeansRequired(type) {
    switch (type) {
      case "small":
        return 250;
      case "medium":
        return 500;
      case "large":
        return 750;
    }
  }
}

let megaCoffeeMachine = new MegaCoffeeMachine(500);
megaCoffeeMachine.waterAmount = 50;
megaCoffeeMachine.coffeeBeansQty = 5;
console.log(
  `Power is ${megaCoffeeMachine.power}W and water amount is ${megaCoffeeMachine.waterAmount}L and ${megaCoffeeMachine.coffeeBeansQty}KG of coffee beans are left.`
);
let coffeeType = "medium";
console.log(
  `A ${coffeeType} coffee requires ${megaCoffeeMachine.getCoffeeBeansRequired(
    coffeeType
  )}gm of coffee beans`
);

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

// create the coffee-machine
let coffeeMachine = new CoffeeMachine(100);
console.log(coffeeMachine);

// add water
coffeeMachine.waterAmount = -10; // _waterAmount will become 0, not -10
console.log(coffeeMachine);

coffeeMachine.waterAmount = 50;
coffeeMachine.coffeeBeansQty = 5;
console.log(
  `Power is ${coffeeMachine.power}W and water amount is ${coffeeMachine.waterAmount}L and ${coffeeMachine.coffeeBeansQty}KG of coffee beans are left.`
);

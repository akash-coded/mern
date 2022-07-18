/**
 * Creating objects
 */
let user = new Object(); // "object constructor" syntax
let admin = {}; // "object literal" syntax

/**
 * Literals and Properties
 */
user = {
  // an object
  name: "John", // by key "name" store the value "John"
  age: 30, // by key "age" store the value 30
};

/**
 * Adding properties to existing object
 */
admin.name = "Paul";
admin["age"] = 27;
admin.country = "Wakanda";
admin["likes birds"] = true;

/**
 * Removing a property
 */
delete admin.country;
delete admin["likes birds"];

/**
 * Read property values
 */
console.log(user.name); // Dot access notation
console.log(admin["name"]); // Square bracket notation

/**
 * Computed properties
 */
let fruit = "oranges";

let bag = {
  [fruit]: 5,
};

console.log(bag.oranges);

/**
 * Property value shorthand
 */
function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

let newUser = makeUser("Alex", 40);
console.log(newUser);

// Shorthand syntax
function makeUser2(name, age) {
  return {
    name,
    age,
    address: "Australia",
  };
}

newUser = makeUser2("Jim", 45);
console.log(newUser);

/**
 * Property existence test
 */
let myObject = {};
console.log(myObject.someProperty); // Reading a non-existing property returns undefined

// "in" operator
let myObject2 = {
  key1: "value1",
  key2: "value2",
};
console.log("key1" in myObject2);
console.log("key3" in myObject2);
// Most of the time the comparison with undefined works fine.
// But there’s a special case when it fails, but "in" works correctly.
// It’s when an object property exists, but stores undefined
let obj = {
  test: undefined,
};
console.log(obj.test); // it's undefined, so - no such property?
console.log("test" in obj); // true, the property does exist!

/**
 * for...in loop
 */
let myVehicles = {
  bike: "Suzuki",
  car: "BMW",
};

for (let key in myVehicles) {
  console.log(key);
  console.log(myVehicles[key]);
}

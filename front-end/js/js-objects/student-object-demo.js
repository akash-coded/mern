let student1 = {
  rollNo: 1, // property = key:value
  name: "John",
  age: 13,
  class: 7,
  marks: [83, 56, 78],
  address: {
    street: "12th Avenue",
    locality: "Manhattan",
    city: "New York",
    country: "USA",
    zipcode: 12345,
  },
  displayAddress: function () {
    console.log(this.class);
  },
};

console.log(student1);
console.log("Name: " + student1.name);
console.log("Age: " + student1["age"]);

console.log("Address: " + student1.address);
console.log(student1.address.city);

for (let key in student1.address) {
  console.log(key + ": " + student1.address[key]);
}

student1.displayAddress();

console.log("age" in student1);
console.log("salary" in student1);

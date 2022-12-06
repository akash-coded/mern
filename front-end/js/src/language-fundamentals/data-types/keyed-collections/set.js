const mySet1 = new Set();

mySet1.add(1);
mySet1.add(5);
mySet1.add(5);
mySet1.add("some text");

console.log(mySet1.size);

console.log(mySet1.has(1));
console.log(mySet1.add(3));

console.log(mySet1);

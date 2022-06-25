let sym1 = Symbol("foo");
console.log(typeof sym1);
let sym2 = Symbol("foo");
console.log(sym1 === sym2);

const NAME = Symbol();
const person = {
  [NAME]: "Akash Das",
};
console.log(person[NAME]);

const RUN = Symbol();
person[RUN] = () => "Person is running";
console.log(person[RUN]());

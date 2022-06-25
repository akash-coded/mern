/**
 * Logical OR (||)
 */
console.log(true || false);
console.log(false || true);
console.log(true || true);
console.log(false || false);

if (1 || 0) {
  console.log("truthy!");
}

let time = 9;
if (time < 10 || time > 18) {
  console.log("The office is closed.");
}

// Getting the first truthy value from a list of variables or expressions
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
console.log(firstName || lastName || nickName || "Anonymous");

// Short-circuit evaluation
true || console.log("not printed");
false || console.log("printed");

/**
 * Logical AND (&&)
 */
console.log(true && false);
console.log(false && true);
console.log(true && true);
console.log(false && false);

if (1 && 0) {
  console.log("Won't work because the result is falsy");
}

let hour = 12;
let minute = 30;
if (hour == 12 && minute == 30) {
  console.log("The time is 12:30");
}

console.log(1 && 2 && null && 3);
console.log(1 && 2 && 3);

/**
 * Logical NOT (!)
 * (Boolean NOT)
 * (Inverter)
 */
console.log(!false);
console.log(!0);

console.log(!!null);
console.log(Boolean(null));

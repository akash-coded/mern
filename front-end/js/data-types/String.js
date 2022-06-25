let firstName = "Akash"; // Regular String
console.log(firstName);

console.log("Hello " + firstName);

// embed a variable
let template = `Hello, ${firstName}`; // Template Literal
console.log(template);

let displayMessage = "Hello ${firstName}";
console.log(displayMessage);

// embed an expression
console.log(`1 + 2 = ${1 + 2}`);

console.log("1 + 2 = ${1 + 2}");

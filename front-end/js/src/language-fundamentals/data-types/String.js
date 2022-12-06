let firstName = "Akash"; // Regular String
console.log(firstName);

console.log("Regular String:: " + "Hello " + firstName);

// embed a variable
let template = `Hello, ${firstName}`; // Template Literal
console.log("Template Literal:: " + template);

let displayMessage = "Hello ${firstName}";
console.log("Regular String:: " + displayMessage);

// embed an expression
console.log("Template Literal:: " + `1 + 2 = ${1 + 2}`);

console.log("Regular String:: " + "1 + 2 = ${1 + 2}");

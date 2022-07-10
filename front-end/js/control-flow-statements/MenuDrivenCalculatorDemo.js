console.log("Welcome to the best calculator out there!");
let continueAgain = false;
loop: do {
  console.log("Enter two numbers for the calculation...");
  let num1 = parseInt(prompt("Enter the 1st number:"));
  let num2 = parseInt(prompt("Enter the 2nd number:"));

  console.log("Choose the operation to be performed::");
  console.log("1. Addition");
  console.log("2. Subtraction");
  console.log("3. Multiplication");
  console.log("4. Division");
  console.log("5. Modulus");
  console.log("6. Quit");
  console.log("Enter choice to continue...");
  let operation = parseInt(prompt("Enter choice[1-6]:"));

  let result = null;
  switch (operation) {
    case 1:
      result = num1 + num2;
      break;
    case 2:
      result = num1 - num2;
      break;
    case 3:
      result = num1 * num2;
      break;
    case 4:
      result = num1 / num2;
      break;
    case 5:
      result = num1 % num2;
      break;
    case 6:
      break loop;
    default:
      alert("Invalid choice!");
      break;
  }
  console.log("Result = " + result);
  console.log("Choose whether to continue...");
  continueAgain = confirm("Do you want to continue?");
} while (continueAgain);
console.log("Goodbye.");

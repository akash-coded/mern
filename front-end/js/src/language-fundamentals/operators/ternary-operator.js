let virusConcentration = 0.9;
let testResult;

// without ternary operator
if (virusConcentration > 0.7) {
  testResult = "symptomatic";
} else {
  testResult = "asymptomatic";
}
console.log(testResult);

// with ternary operator
testResult = virusConcentration > 0.7 ? "symptomatic" : "asymptomatic";
console.log(testResult);

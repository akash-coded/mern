let virusConcentration = 0.9;
let testResult;

if (virusConcentration > 0.7) {
  testResult = "Symptomatic";
} else {
  testResult = "Asymptomatic";
}
console.log(testResult);

testResult = virusConcentration > 0.7 ? "Symptomatic" : "Asymptomatic";
console.log(testResult);

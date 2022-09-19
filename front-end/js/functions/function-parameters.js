/**
 * Function with parameters
 * @param {String} from
 * @param {String} text
 */
function showMessage(from, text) {
  console.log(from + " : " + text);
}

showMessage("John", "How are you?");
showMessage("Annie");
showMessage("Annie", undefined);
console.log();

/**
 * Function with parameters having default values
 * @param {String} from
 * @param {String} text
 */
function showMessage2(from, text = "No message to display!") {
  console.log(from + " : " + text);
}

showMessage2("John", "Hey, howdie?");
showMessage2("Annie");
showMessage2();
console.log();

/**
 * Helper function which returns a default message
 * @returns {String}
 */
function getDefaultMessage() {
  return "Random message";
}

/**
 * Function with parameters having a function call as default value
 * @param {String} from
 * @param {String} text
 */
function showMessage3(from, text = getDefaultMessage()) {
  console.log(from + " : " + text);
}

showMessage3("Jacob", "Hola!");
showMessage3("Nigel");
showMessage3();
console.log();

/**
 * Helper function which returns a user message
 * @returns {String}
 */
function getMessage() {
  return "A message";
}

/**
 * Function which takes another function as argument
 * @param {String} from
 * @param {Function} getTextFn
 */
function showMessage4(from, getTextFn) {
  console.log(from + " : " + getTextFn());
}

showMessage4("Akash", getMessage); // passing a function as argument
console.log();

// passing an anonymous function as argument
showMessage4("Akash Das", function () {
  return "An anonymous message";
});
console.log();

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

/**
 * Function with parameters having default values
 * @param {String} from
 * @param {String} text
 */
function showMessage2(from, text = "No message to display!") {
  console.log(from + " : " + text);
}

showMessage2("Annie");
showMessage2("John", "Hey, howdie?");
showMessage2();

/**
 *
 * @returns String
 */
function getDefaultMessage() {
  return "Random message";
}

console.log(getDefaultMessage());

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

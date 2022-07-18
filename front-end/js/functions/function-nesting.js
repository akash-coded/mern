/**
 * Higher Order Function
 *
 * @param {string} firstName
 * @param {string} lastName
 */
function sayHiBye(firstName, lastName) {
  // helper nested function to use below
  function getFullName() {
    return firstName + " " + lastName; //Here the nested function getFullName() is made for convenience. It can access the outer variables and so can return the full name.
  }

  console.log("Hi, " + getFullName());
  console.log("Bye, " + getFullName());
}

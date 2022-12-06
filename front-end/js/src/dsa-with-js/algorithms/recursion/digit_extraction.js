function fun1(num) {
  if (num > 0) {
    fun1(Math.floor(num / 10)); // head recursion

    let digit = num % 10;
    console.log(digit);
  }
}
console.log("Head recursion::");
fun1(472);

function fun2(num) {
  if (num > 0) {
    let digit = num % 10;
    console.log(digit);

    fun2(Math.floor(num / 10)); // tail recursion
  }
}
console.log("Tail recursion::");
fun2(472);

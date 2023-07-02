function outer() {
  var num1 = 10;
  console.log(num1); // local to outer() function

  function inner() {
    // var num3;
    console.log(num4);
    num4 = 55;
    console.log(num4);

    console.log(num3); // prints undefined as num3 is hoisted to the top of inner() function
    var num2 = 20; // local to inner() function
    console.log(num2);
    if (true) {
      var num3 = 30; // local to inner() function
      console.log(num3); // local to inner() function
    }
    console.log(num3);
    var num3 = 50;
    console.log(num3);
  }
  inner();

  console.log(num4);

  //   console.log(num3); // illegal access to local variable num3
  //   console.log(num2); // illegal access to local variable num2
}

var num4;
console.log(num4);

outer();

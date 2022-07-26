function outer() {
  let num1 = 10;
  console.log(num1); // local to outer() function

  function inner() {
    let num2 = 20; // local to inner() function
    console.log(num2);
    // console.log(num3); // illegal access because let variables are not hoisted
    if (true) {
      let num3 = 30; // local to inner() function
      console.log(num3); // local to inner() function

      const num4 = 40; // constant
      // num4 = 50; // illegal
    }

    // console.log(num3); // illegal access to local variable num3s
  }

  inner();
  console.log(num4);
  //   console.log(num3); // illegal access to local variable num3
  //   console.log(num2); // illegal access to local variable num2
}

outer();

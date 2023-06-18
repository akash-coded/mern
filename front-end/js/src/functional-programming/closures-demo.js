function multiplicationClosure(a) {
  let c = 10;
  return function (b) {
    console.log("Product = " + a * b * c);
  };
}

let multiplyWith5 = multiplicationClosure(5);
multiplyWith5(7);
multiplyWith5(9);

let multiplyWith10 = multiplicationClosure(10);
multiplyWith10(3);
multiplyWith10(6);

multiplicationClosure(8)(4); // currying

function multiplicationClosure(a) {
  return function (b) {
    console.log("Product = " + a * b);
  };
}

let multiplyWith5 = multiplicationClosure(5);
multiplyWith5(7);

let multiplyWith10 = multiplicationClosure(10);
multiplyWith10(3);

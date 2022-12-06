/**
 * Variadic Function
 */
function sum(...args) {
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  console.log(total);
}

sum();

sum(1);

sum(1, 2);

sum(1, 2, 3);

sum(1, 2, 3, 4);

/**
 * Async functions
 */
async function fun1() {
  return 1;
}
console.log(fun1());
fun1().then(console.log);

async function fun2() {
  return Promise.resolve(1);
}
console.log(fun2());
fun2().then(console.log);

/**
 * Await
 * (only works inside async functions or as top-level statements in modules)
 */
async function fun3() {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("done");
    }, 1000);
  });

  // wait until the promise resolves (*)
  let result = await promise;

  console.log(result);
}
fun3();

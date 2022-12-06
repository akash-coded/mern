let promise1 = new Promise(function (resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second, signal that the job is done with the result "done"
  setTimeout(() => {
    resolve("done");
  }, 1000);
});

promise1.then(
  (result) => console.log("Promise fulfilled with the value: " + result),
  (error) => console.error("Promise rejected with the error: " + error)
);

let promise2 = new Promise(function (resolve, reject) {
  // after 1 second, signal that the job is finished with an error
  setTimeout(() => {
    reject(new Error("Whoops!"));
  }, 1000);
});

promise2
  .finally(() => console.log("\nPromise ready"))
  .then((result) => console.log("Promise fulfilled with the value: " + result))
  .catch((error) => console.error("Promise rejected with the error: " + error));
console.log();

// let promise3 = new Promise(function (resolve, reject) {
//   resolve("done");

//   reject(new Error("…")); // ignored
//   setTimeout(() => resolve("…")); // ignored
// });

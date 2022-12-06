/**
 * Problem: Asynchronous operation; empty users array returned
 */
function getUsers() {
  let users = [];

  setTimeout(() => {
    users = [
      { username: "john", email: "john@test.com" },
      { username: "joe", email: "joe@test.com" },
    ];
  }, 1000);

  return users;
}

function findUser(username) {
  const users = getUsers(); // A
  return users.find((user) => user.username === username); // B
}

console.log(findUser("john"));
console.log();

/**
 * Solution-1: Using callbacks
 */
function getUsers1(callback) {
  setTimeout(() => {
    callback([
      { username: "john", email: "john@test.com" },
      { username: "joe", email: "joe@test.com" },
    ]);
  }, 1000);
}

function findUser1(username) {
  getUsers1((users) => {
    const userToBeFound = users.find((user) => user.username === username);
    console.log(userToBeFound);
  });
}

findUser1("john");
console.log();

/**
 * Solution-2: Using Promises
 */

// Promise is an object that encapsulates the results of an asynchronous operation
// A promise object can be in pending or Fulfilled with a value or Rejected for a reason states

// The promise constructor accepts a callback function (executor) that performs asynchronous operation.
// The executor accepts two callback functions with the name resolve and reject.

// If the asynchronous operation completes successfully, the executor will call the resolve() function
// to change the state of the promise object from pending to Fulfilled with a value.

// In case of an error, the executor will call the reject() function
// to change the state of the promise object from pending to rejected with the error reason.

// Once a promise reaches either fulfilled or rejected state, it stays in that state and can't
// go to another state.

// Consuming a promise: using then(), catch(), and finally()
let success = true;

function getUsers2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: "john", email: "john@test.com" },
          { username: "joe", email: "joe@test.com" },
        ]);
      } else {
        reject("Failed to the user list");
      }
    }, 1000);
  });
}

const sendStatusNotification = () => {
  console.log("Status notified.");
};

const promise = getUsers2();

function onFulfilled(users) {
  console.log(users);
}
function onRejected(error) {
  console.log(error);
}
// promise.then(onFulfilled);
// promise.catch(onRejected);
promise.then(onFulfilled, onRejected);

// or
getUsers2().then(
  (users) => console.log(users),
  (error) => console.log(error)
);

// or
getUsers2()
  .then((users) => {
    console.log(users);
    sendStatusNotification();
  })
  .catch((error) => {
    console.log(error);
    sendStatusNotification();
  });

// or
getUsers2()
  .then((users) => console.log(users))
  .catch((error) => console.log(error))
  .finally(() => sendStatusNotification());

/**
 * Solution-3: Using async/await
 */

// Introduced in ES2017, the async/await keywords build on top of promises.
// They allow us to write more readable asynchronous code.
// The async/await is syntactic sugar for promises.

// If a function returns a Promise, you can replace the await keyword in front of the
// function call, like: let result = await f();
// The await will wait for the Promise returned from f() to settle.

// The await keyword can be used only inside the async functions.

function getUser(userId) {
  return new Promise((resolve, reject) => {
    console.log("Get user from the database.");
    setTimeout(() => {
      resolve({
        userId: userId,
        username: "john",
      });
    }, 1000);
  });
}

function getServices(user) {
  return new Promise((resolve, reject) => {
    console.log(`Get services of ${user.username} from the API.`);
    setTimeout(() => {
      resolve(["Email", "VPN", "CDN"]);
    }, 2 * 1000);
  });
}

function getServiceCost(services) {
  return new Promise((resolve, reject) => {
    console.log(`Calculate service costs of ${services}`);
    setTimeout(() => {
      resolve(services.length * 100);
    }, 3 * 1000);
  });
}

// Using promises
getUser(100).then(getServices).then(getServiceCost).then(console.log);

// Using async/await
async function showServiceCost() {
  let user = await getUser(100);
  let services = await getServices(user);
  let cost = await getServiceCost(services);
  console.log(`The service cost is ${cost}`);
}

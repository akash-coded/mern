function showOk() {
  alert("You agreed.");
}

function showCancel() {
  alert("You disagreed.");
}

function ask(question, yes, no) {
  // Function declaration
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
}

function callback(data) {
  console.log("Callback function: data=" + data);
}

function outer(param1, param2) {
  console.log("Outer function: data=" + param1);
  param2(200); // callback(200)
}

outer(100, callback);

export { showOk, showCancel, ask };

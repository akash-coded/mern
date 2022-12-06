function showOk() {
  console.log("You agreed.");
}

function showCancel() {
  console.log("You disagreed.");
}

function ask(answer, yesCallback, noCallback) {
  // Function declaration
  if (answer == "yes") {
    yesCallback();
  } else {
    noCallback();
  }
}

ask("yes", showOk, showCancel);
ask("no", showOk, showCancel);

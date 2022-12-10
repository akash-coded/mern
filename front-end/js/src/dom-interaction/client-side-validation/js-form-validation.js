function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Assuming there are no dots in the personal info part of the email
 * */
function validateEmail(email) {
  if (email == null || email == "") {
    return false;
  }

  let atSymbolPos = email.indexOf("@");
  if (atSymbolPos < 1) {
    return false;
  }

  let dotPos = email.indexOf(".");
  if (dotPos <= atSymbolPos + 2) {
    return false;
  }

  return dotPos !== email.length - 1;
}

function validateEmailWithRegex(email) {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return !!email && typeof email === "string" && email.match(emailRegex);
}

function checkInputEmail(email) {
  let isValidEmail = validateEmail(email);
  let emailInput = document.getElementById("email");
  let emailErrorSpan = document.getElementById("emailError");
  if (!isValidEmail) {
    emailErrorSpan.innerText = "Invalid email!";
    emailInput.valid = false;
    return false;
  }
  emailErrorSpan.remove();
  alert("Valid email!");
  return true;
}

document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  window.history.back();

  let email = document.getElementById("email").value;

  // input sanitization
  email = email.trim();
  email = escapeHtml(email);

  // input validation
  console.log(checkInputEmail(email));
});

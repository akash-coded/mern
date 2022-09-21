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

  if (dotPos === email.length - 1) {
    return false;
  }

  return true;
}

function validateEmailWithRegex(email) {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return !!email && typeof email === "string" && email.match(emailRegex);
}

function checkInputEmail(email) {
  let isValidEmail = validateEmail(email);
  if (!isValidEmail) {
    document.getElementById("emailHelp").innerText = "Invalid email!";
    return false;
  }
  document.getElementById("emailHelp").remove();
  alert("Valid email!");
  return true;
}

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function validateFormInputs() {
  let email = document.getElementById("email").value;

  // input sanitization
  email = email.trim();
  email = escapeHtml(email);

  // input validation
  return checkInputEmail(email);
}

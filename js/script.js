function checkPassword() {
  var passwordInput = document.getElementById("passwordInput").value;
  var hashedInput = hashPassword(passwordInput);

  var expectedHash =
    "b8c3118f46d25f912340d5434a38d8a3762ec0b1310010254a3adaf5a6aa8bd5";

  var passwordMessage = document.getElementById("passwordMessage");
  var secretComponent = document.getElementById("secretComponent");

  if (hashedInput === expectedHash) {
    passwordMessage.innerHTML = "Password is correct!";
    secretComponent.style.display = "block";
  } else {
    passwordMessage.innerHTML = "Incorrect password!";
    secretComponent.style.display = "none";
  }
}

function hashPassword(password) {
  var hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
  return hashedPassword;
}

function filterInput(input) {
  var filteredInput = input.replace(
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    ""
  );
  filteredInput = filteredInput.replace(/\bon\w+="[^"]*"/g, "");
  filteredInput = filteredInput.replace(/[\u00A0-\u9999<>&]/gim, function (i) {
    return "&#" + i.charCodeAt(0) + ";";
  });

  return filteredInput;
}

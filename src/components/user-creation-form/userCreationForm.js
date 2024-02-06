export default function () {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");

  emailInput.addEventListener("input", () => {
    if (emailInput.validity === false) {
      showError();
    } else {
      emailError.textContent = "";
    }
  });

  const countryInput = document.getElementById("country");
  const countryError = document.getElementById("country-error");

  const zipCodeInput = document.getElementById("zip-code");
  const zipCodeError = document.getElementById("zip-code-error");

  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("password-error");

  password.addEventListener("input", () => console.log(password.value));

  const passwordConfirmError = document.getElementById(
    "password-confirm-error",
  );

  function showError() {
    console.log("working");
  }
}

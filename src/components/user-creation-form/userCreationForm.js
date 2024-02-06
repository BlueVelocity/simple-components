import countriesList from "./countriesList.json";
const countries = countriesList.countries;
const errorIndicator = "*";

export default function () {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");

  emailInput.addEventListener("change", () => {
    if (emailInput.validity.valid === false) {
      showEmailError();
    } else {
      emailError.textContent = "";
    }
  });

  function showEmailError() {
    if (emailInput.validity.valueMissing === true) {
      emailError.textContent = errorIndicator + "Email address is required";
    } else if (emailInput.validity.typeMismatch) {
      emailError.textContent = errorIndicator + "Invalid email address";
    }
  }

  const countryInput = document.getElementById("country");
  const countryError = document.getElementById("country-error");

  countryInput.addEventListener("input", () => {
    countryInput.setCustomValidity("");
    if (
      countryInput.validity.valid === false ||
      countries.includes(countryInput.value.toLowerCase()) === false
    ) {
      showCountryError();
    } else {
      countryError.textContent = "";
    }
  });

  function showCountryError() {
    if (countryInput.validity.valueMissing === true) {
      countryError.textContent = errorIndicator + "Country is required";
    } else if (countries.includes(countryInput.value.toLowerCase()) === false) {
      countryInput.setCustomValidity("Invalid field.");
      countryError.textContent = errorIndicator + "Invalid country name";
    }
  }

  const postalCodeInput = document.getElementById("postal-code");
  const postalCodeError = document.getElementById("postal-code-error");
  const postalRegex = new RegExp(
    /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i,
  );

  postalCodeInput.addEventListener("change", () => {
    postalCodeInput.setCustomValidity("");
    if (
      postalCodeInput.validity.valid === false ||
      !postalRegex.test(postalCodeInput.value)
    ) {
      showPostalCodeError();
    } else {
      postalCodeError.textContent = "";
    }
  });

  function showPostalCodeError() {
    if (postalCodeInput.validity.valueMissing === true) {
      postalCodeError.textContent = errorIndicator + "Postal code is required";
    } else if (!postalRegex.test(postalCodeInput.value)) {
      postalCodeInput.setCustomValidity("Invalid field.");
      postalCodeError.textContent = errorIndicator + "Invalid postal code";
    }
  }

  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("password-error");

  password.addEventListener("input", () => console.log(password.value));

  const passwordConfirmInput = document.getElementById("password-confirm");
  const passwordConfirmError = document.getElementById(
    "password-confirm-error",
  );
}

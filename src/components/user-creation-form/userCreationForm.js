const countries = [
  "afghanistan",
  "albania",
  "algeria",
  "andorra",
  "angola",
  "antigua and barbuda",
  "argentina",
  "armenia",
  "austria",
  "azerbaijan",
  "bahrain",
  "bangladesh",
  "barbados",
  "belarus",
  "belgium",
  "belize",
  "benin",
  "bhutan",
  "bolivia",
  "bosnia and herzegovina",
  "botswana",
  "brazil",
  "brunei",
  "bulgaria",
  "burkina faso",
  "burundi",
  "cabo verde",
  "cambodia",
  "cameroon",
  "canada",
  "central african republic",
  "chad",
  "channel islands",
  "chile",
  "china",
  "colombia",
  "comoros",
  "congo",
  "costa rica",
  "côte d'ivoire",
  "croatia",
  "cuba",
  "cyprus",
  "czech republic",
  "denmark",
  "djibouti",
  "dominica",
  "dominican republic",
  "dr congo",
  "ecuador",
  "egypt",
  "el salvador",
  "equatorial guinea",
  "eritrea",
  "estonia",
  "eswatini",
  "ethiopia",
  "faeroe islands",
  "finland",
  "france",
  "french guiana",
  "gabon",
  "gambia",
  "georgia",
  "germany",
  "ghana",
  "gibraltar",
  "greece",
  "grenada",
  "guatemala",
  "guinea",
  "guinea-bissau",
  "guyana",
  "haiti",
  "holy see",
  "honduras",
  "hong kong",
  "hungary",
  "iceland",
  "india",
  "indonesia",
  "iran",
  "iraq",
  "ireland",
  "isle of man",
  "israel",
  "italy",
  "jamaica",
  "japan",
  "jordan",
  "kazakhstan",
  "kenya",
  "kuwait",
  "kyrgyzstan",
  "laos",
  "latvia",
  "lebanon",
  "lesotho",
  "liberia",
  "libya",
  "liechtenstein",
  "lithuania",
  "luxembourg",
  "macao",
  "madagascar",
  "malawi",
  "malaysia",
  "maldives",
  "mali",
  "malta",
  "mauritania",
  "mauritius",
  "mayotte",
  "mexico",
  "moldova",
  "monaco",
  "mongolia",
  "montenegro",
  "morocco",
  "mozambique",
  "myanmar",
  "namibia",
  "nepal",
  "netherlands",
  "nicaragua",
  "niger",
  "nigeria",
  "north korea",
  "north macedonia",
  "norway",
  "oman",
  "pakistan",
  "panama",
  "paraguay",
  "peru",
  "philippines",
  "poland",
  "portugal",
  "qatar",
  "réunion",
  "romania",
  "russia",
  "rwanda",
  "saint helena",
  "saint kitts and nevis",
  "saint lucia",
  "saint vincent and the grenadines",
  "san marino",
  "sao tome & principe",
  "saudi arabia",
  "senegal",
  "serbia",
  "seychelles",
  "sierra leone",
  "singapore",
  "slovakia",
  "slovenia",
  "somalia",
  "south africa",
  "south korea",
  "south sudan",
  "spain",
  "sri lanka",
  "state of palestine",
  "sudan",
  "suriname",
  "sweden",
  "switzerland",
  "syria",
  "taiwan",
  "tajikistan",
  "tanzania",
  "thailand",
  "the bahamas",
  "timor-leste",
  "togo",
  "trinidad and tobago",
  "tunisia",
  "turkey",
  "turkmenistan",
  "uganda",
  "ukraine",
  "united arab emirates",
  "united kingdom",
  "united states",
  "uruguay",
  "uzbekistan",
  "venezuela",
  "vietnam",
  "western sahara",
  "yemen",
  "zambia",
  "zimbabwe",
];

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
      emailError.textContent = errorIndicator + "Email address invalid";
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
      countryError.textContent = errorIndicator + "Enter a valid country";
    }
  }

  const zipCodeInput = document.getElementById("zip-code");
  const zipCodeError = document.getElementById("zip-code-error");

  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("password-error");

  password.addEventListener("input", () => console.log(password.value));

  const passwordConfirmError = document.getElementById(
    "password-confirm-error",
  );
}

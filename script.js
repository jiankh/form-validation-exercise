

const email = document.getElementById("email");
const country = document.getElementById("country");
const zipcode = document.getElementById("zipcode");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const submit = document.getElementById("submit")

function checkZIP() {
    // For each country, defines the pattern that the ZIP has to follow
    const constraints = {
      ch: [
        "^(CH-)?\\d{4}$",
        "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950",
      ],
      fr: [
        "^(F-)?\\d{5}$",
        "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012",
      ],
      de: [
        "^(D-)?\\d{5}$",
        "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
      ],
      nl: [
        "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
        "Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
      ],
      us: [
        "^\\d{5}(?:-\\d{4})?$",
        "United States ZIPs must have 5 digits, or 5 digits with a dash and 4 digits"
      ]
    };
  
    // Read the country id
    const country = document.getElementById("country").value;
  
    // Get the NPA field
    const ZIPField = document.getElementById("zipcode");
  
    // Build the constraint checker
    const constraint = new RegExp(constraints[country][0], "");
    console.log(constraint);
  
    // Check it!
    if (constraint.test(ZIPField.value)) {
      // The ZIP follows the constraint, we use the ConstraintAPI to tell it
      ZIPField.setCustomValidity("");
    } else {
      // The ZIP doesn't follow the constraint, we use the ConstraintAPI to
      // give a message about the format required for this country
      ZIPField.setCustomValidity(constraints[country][1]);
    }
}

function checkEmail() {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter a valid email address");
    } else {
        email.setCustomValidity("");
    }
}

function checkPasswordReq() {
    if (!password.checkValidity()) {
        password.setCustomValidity(password.validationMessage())
    }
}

function checkPasswordMatch() {
    if (password.value !== password2.value) {
        password2.setCustomValidity("Passwords do not match!")
    }
}


submit.addEventListener("click", (e)=> {
    checkZIP()
    checkEmail()
    checkPasswordReq()
    checkPasswordMatch()
})
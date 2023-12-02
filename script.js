function validateForm() {
    // Get the form elements
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
  
    // Validate the name
    if (name.value.trim() === "") {
      alert("Name cannot be empty");
      return false;
    }
  
    // Validate the email
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\. [^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\. [0-9]{1,3}\. [0-9]{1,3}\. [0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email.value)) {
      alert("Invalid email address");
      return false;
    }
  
    // Validate the password
const passwordValue = password.value.trim();
if (passwordValue === "") {
    alert("Password cannot be empty");
    return false;
}

// Check if the password is at least 8 characters long
if (passwordValue.length < 8) {
    alert("Password must be at least 8 characters long");
    return false;
}

// Check if the password contains an uppercase letter
const uppercaseRegex = /[A-Z]/;
if (!uppercaseRegex.test(passwordValue)) {
    alert("Password must contain at least one uppercase letter");
    return false;
}

// Check if the password contains a special character
const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
if (!specialCharacterRegex.test(passwordValue)) {
    alert("Password must contain at least one special character");
    return false;
}

 // If all the conditions are met, the password is valid
    // Proceed with form submission or additional logic
    alert("Form submitted successfully!");
    return true;
}

// Prevent default form submission behavior
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
});
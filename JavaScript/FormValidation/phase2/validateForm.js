// Query the form element
// Add a submit event listener
// Call e.preventDefault() as the first line
// Query both inputs and use checkValidity() on each
// If either is invalid, set a custom error message with setCustomValidity()
// If valid, clear the error with setCustomValidity("")

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fullName = document.querySelector('[name="fullName"]');
  const email = document.querySelector('[name="email"]');

  if (!fullName.checkValidity()) {
    fullName.setCustomValidity("Full name is required");
  } else {
    fullName.setCustomValidity("");
  }

  if (!email.checkValidity()) {
    email.setCustomValidity(
      "You must use a company email address that ends in @codehunter.com",
    );
  } else {
    email.setCustomValidity("");
  }

});
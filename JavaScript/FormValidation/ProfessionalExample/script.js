const form = document.getElementById("contact-form");
const fullNameInput = document.getElementById("full-name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const fullNameError = document.getElementById("full-name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const formStatus = document.getElementById("form-status");

function validateFullName() {
  if (fullNameInput.value.trim() === "") {
    fullNameInput.setCustomValidity("Full name is required.");
    fullNameError.textContent = "Full name is required.";
  } else {
    fullNameInput.setCustomValidity("");
    fullNameError.textContent = "";
  }
}

function validateEmail() {
  if (!emailInput.checkValidity()) {
    emailInput.setCustomValidity("Please enter a valid .com email address.");
    emailError.textContent = "Please enter a valid .com email address.";
  } else {
    emailInput.setCustomValidity("");
    emailError.textContent = "";
  }
}

function validateMessage() {
  if (!messageInput.checkValidity()) {
    messageInput.setCustomValidity("Message must be at least 10 characters.");
    messageError.textContent = "Message must be at least 10 characters.";
  } else {
    messageInput.setCustomValidity("");
    messageError.textContent = "";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateFullName();
  validateEmail();
  validateMessage();

  if (form.checkValidity()) {
    formStatus.textContent = "Message sent successfully!";
    formStatus.style.color = "green";
    form.reset();
  } else {
    formStatus.textContent = "Please fix the errors above.";
    formStatus.style.color = "red";
  }
});

const form = document.getElementById('form');
const fullNameInput = document.getElementById('full-name');
const emailInput = document.getElementById('email');
const textArea = document.getElementById('text-area');
const messageBox = document.getElementById("message-box");

function validateFullName() {
  const isFullNameValid = fullNameInput.value.trim() !== "";

  if (!isFullNameValid) {
    fullNameInput.setCustomValidity("name is required");
  } else {
    fullNameInput.setCustomValidity("");
  }
};

function validateEmail() {
  const isEmailValid = emailInput.checkValidity();

  if (!isEmailValid) {
    emailInput.setCustomValidity('email must have @ and .com');
  } else {
    emailInput.setCustomValidity('');
  }
}

function validateMessage() {
  const isMessageValid = textArea.checkValidity();

  if (!isMessageValid) {
    textArea.setCustomValidity('Message must be 10 characters long');
  } else {
    textArea.setCustomValidity('');
  }
}


form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateFullName();
  validateEmail();
  validateMessage();
  const isFormValid = form.checkValidity();

if (isFormValid) {
  messageBox.textContent = "Form submitted successfully!";
  messageBox.style.color = "green";
} else {
  messageBox.textContent = "Please fix the errors above.";
  messageBox.style.color = "red";
}
});
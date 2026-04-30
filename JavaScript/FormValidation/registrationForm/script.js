const registerForm = document.getElementById('register-form');
const inputUserName = document.getElementById('username');
const inputEmail = document.getElementById('email-address');
const inputPassword = document.getElementById('password');
const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById("password-error");
const sucessMessage = document.getElementById('success-message');

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // submit handler goes here
  const userValidated = validateUsername(inputUserName.value);
  const emailValidated = validateEmail(inputEmail.value);
  const passwordValidated = validatePassword(inputPassword.value);

  if (userValidated) {
    usernameError.textContent = userValidated;
  } else {
    usernameError.textContent = '';
  }
  
  if (emailValidated) {
    emailError.textContent = emailValidated;
  } else {
    emailError.textContent = "";
  }
  
  if (passwordValidated) {
    passwordError.textContent = passwordValidated;
  } else {
    passwordError.textContent = "";
  }

  if (!userValidated && !emailValidated && !passwordValidated) {
    sucessMessage.textContent = "Registration successful";
    registerForm.reset();
  }
});

function validateUsername(username) {
  if (username === '') {
    return 'Username is required';
  }

  if (username.length < 3) {
    return "Username must be at least 3 characters";
  }

  return null;
}

function validateEmail(email) {
  if (email === '') {
    return 'Email is required';
  }

  if (!email.includes('@')) {
    return 'Email must contain @';
  }

  return null;

}

function validatePassword(password) {
  if (password === "") {
    return "Password is required";
  }

  if (password.length < 8) {
    return "Password must be at least 8 characters";
  }

  return null;
}
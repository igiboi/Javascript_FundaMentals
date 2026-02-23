/*
You're building a registration form. Validate the user data meets ALL requirements.
Return an object with { valid: true/false, errors: [...] }
*/

function validateRegistration(user) {
  // 1. Start with empty errors array
  const errors = [];
  
  // 2. Check each requirement - if fails, add error message
  if (user.username.length < 3) {
    errors.push("Username must be at least 3 characters");
  }
  
  if (!user.email.includes("@")) {
    errors.push("Email must contain @");
  }
  
  if (user.password.length < 8) {
    errors.push("Password must be at least 8 characters");
  }
  
  if (user.age < 18) {
    errors.push("Must be 18 or older");
  }
  
  // 3. Build and return result
  return {
    valid: errors.length === 0,  // valid if no errors
    errors: errors
  };
}


// TEST CASES
console.log(
  validateRegistration({
    username: "alice123",
    email: "alice@example.com",
    password: "securepass",
    age: 25,
  }),
);
// Expected: { valid: true, errors: [] }

console.log(
  validateRegistration({
    username: "ab",
    email: "invalid-email",
    password: "short",
    age: 16,
  }),
);
// Expected: { valid: false, errors: [
//   "Username must be at least 3 characters",
//   "Email must contain @",
//   "Password must be at least 8 characters",
//   "Must be 18 or older"
// ]}

console.log(
  validateRegistration({
    username: "",
    email: "",
    password: "",
    age: 0,
  }),
);
// Expected: { valid: false, errors: [...] } - all 4 errors


function validateRegistration(user) {
  const rules = [
    {
      test: user.username.length >= 3,
      message: "Username must be at least 3 characters",
    },
    {
      test: user.email.includes("@"),
      message: "Email must contain @",
    },
    {
      test: user.password.length >= 8,
      message: "Password must be at least 8 characters",
    },
    {
      test: user.age >= 18,
      message: "Must be 18 or older",
    },
  ];

  const errors = [];

  for (const rule of rules) {
    if (!rule.test) {
      errors.push(rule.message);
    }
  }

  return {
    valid: errors.length === 0,
    errors: errors,
  };
}

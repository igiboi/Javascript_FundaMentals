function allPositive(numbers) {
  for (const number of numbers) {
    if (number <= 0) {
      return false;
    }
  }
  return true;
}

console.log(allPositive([1, 2, 3, 4]));      // Expected: true
console.log(allPositive([1, -2, 3]));        // Expected: false
console.log(allPositive([0, 1, 2]));         // Expected: false (0 is not positive)
console.log(allPositive([]));                // Expected: true (nothing fails)

function hasNegative(numbers) {
  for (const number of numbers) {
    if (number < 0) {
      return true;
    }
  }
  return false;
}

// TEST CASES
console.log(hasNegative([1, 2, -3, 4]));     // Expected: true
console.log(hasNegative([1, 2, 3]));         // Expected: false
console.log(hasNegative([-1]));              // Expected: true
console.log(hasNegative([]));                // Expected: false (nothing found)


const users = [
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@test.com" },
  { name: "Charlie", email: "" },
  { name: "Diana", email: "diana@example.com" },
];

function allHaveEmail(users) {
  for (const user of users) {
    if (!user.email) {
      return false;
    }
  }
  return true;
}

// TEST CASES
console.log(allHaveEmail(users));  // Expected: false (Charlie has empty email)

console.log(allHaveEmail([
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@test.com" }
]));  // Expected: true

console.log(allHaveEmail([]));  // Expected: true (no failures)
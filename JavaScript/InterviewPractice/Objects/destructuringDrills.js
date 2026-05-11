/*
  Destructuring Drills
  ---------------------
  Practice extracting values from objects and arrays
  using destructuring syntax.
*/

const user = {
  id: 1,
  name: "Alice",
  age: 28,
  role: "Engineer"
};

// ---- DRILL 1: Basic object destructuring ----
// Extract name and age from user into variables
// your code here
const { name, age } = user
console.log(name); // expected: "Alice"
console.log(age);  // expected: 28


// ---- DRILL 2: Destructure with a different variable name ----
// Extract role from user but store it in a variable called jobTitle
// Hint: const { role: jobTitle } = user
// your code here

const { role: jobTitle } = user;
console.log(jobTitle); // expected: "Engineer"


// ---- DRILL 3: Destructure with a default value ----
// Extract a property called "city" from user — it doesn't exist
// Give it a default value of "Unknown"
// Hint: const { city = "Unknown" } = user
// your code here

const { city = "Unknown" } = user;

console.log(city); // expected: "Unknown"


// ---- DRILL 4: Nested object destructuring ----
const employee = {
  name: "Bob",
  address: {
    city: "Chicago",
    zip: "60601"
  }
};

// Extract city from employee.address using destructuring
// Hint: const { address: { city } } = employee
// your code here
const {
  address: { city },
} = employee;

console.log(city); // expected: "Chicago"


// ---- DRILL 5: Destructure in a function parameter ----
// Rewrite this function using destructuring in the parameter
// instead of accessing properties inside the function body


const user = {
  id: 1,
  name: "Alice",
  age: 28,
  role: "Engineer",
};

// Original:
function greet(person) {
  return `Hello, ${person.name}. You are ${person.age} years old.`;
}

// Rewrite using destructuring:
function greetDestructured({ name, age } = user) {
  return `Hello, ${name}. You are ${age} years old.`;
}

console.log(greetDestructured(user)); // expected: "Hello, Alice. You are 28 years old."


// ---- DRILL 6: Array destructuring ----
const colors = ["red", "green", "blue"];

// Extract first and second into variables called first and second
// your code here
const [first, second] = colors;

console.log(first);  // expected: "red"
console.log(second); // expected: "green"

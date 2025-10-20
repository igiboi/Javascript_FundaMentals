// ============================================
// JAVASCRIPT OBJECTS - CHALLENGES
// ============================================

// Instructions:
// 1. Read each challenge carefully
// 2. Write your solution in the designated area
// 3. Run this file with: node challenges.js
// 4. Check if your solution passes the tests

// ============================================
// EXAMPLE - How to approach these challenges
// ============================================

console.log("=== EXAMPLE ===");
// Create a function that takes a person object and returns their full name

// YOUR SOLUTION:
function getFullName(person) {
  return `${person.firstName} ${person.lastName}`;
}

// TESTS:
const testPerson = { firstName: "John", lastName: "Doe", age: 30 };
console.log("Test 1:", getFullName(testPerson) === "John Doe" ? "✓ PASS" : "✗ FAIL");
console.log("Test 2:", getFullName({ firstName: "Jane", lastName: "Smith" }) === "Jane Smith" ? "✓ PASS" : "✗ FAIL");

// ============================================
// CHALLENGE 1: Create a User Profile
// ============================================

console.log("\n=== CHALLENGE 1: Create User Profile ===");
// Create a function createUser that takes username, email, and age
// Returns an object with those properties plus a property isActive set to true

// YOUR SOLUTION HERE:
function createUser(username, email, age) {
  // Write your code here

}

// TESTS:
const user1 = createUser("luigi_dev", "luigi@example.com", 25);
console.log("Test 1:", user1.username === "luigi_dev" ? "✓ PASS" : "✗ FAIL");
console.log("Test 2:", user1.email === "luigi@example.com" ? "✓ PASS" : "✗ FAIL");
console.log("Test 3:", user1.age === 25 ? "✓ PASS" : "✗ FAIL");
console.log("Test 4:", user1.isActive === true ? "✓ PASS" : "✗ FAIL");

// ============================================
// CHALLENGE 2: Update Product Price
// ============================================

console.log("\n=== CHALLENGE 2: Update Product Price ===");
// Create a function updatePrice that takes a product object and a new price
// The function should update the price property and return the updated product

// YOUR SOLUTION HERE:
function updatePrice(product, newPrice) {
  // Write your code here

}

// TESTS:
const product = { name: "Laptop", price: 1000, category: "Electronics" };
const updated = updatePrice(product, 899);
console.log("Test 1:", updated.price === 899 ? "✓ PASS" : "✗ FAIL");
console.log("Test 2:", updated.name === "Laptop" ? "✓ PASS" : "✗ FAIL");
console.log("Test 3:", product.price === 899 ? "✓ PASS (modified original)" : "✗ FAIL");

// ============================================
// CHALLENGE 3: Count Properties
// ============================================

console.log("\n=== CHALLENGE 3: Count Properties ===");
// Create a function countProperties that takes an object
// Returns the number of properties it has

// YOUR SOLUTION HERE:
function countProperties(obj) {
  // Write your code here

}

// TESTS:
console.log("Test 1:", countProperties({ a: 1, b: 2, c: 3 }) === 3 ? "✓ PASS" : "✗ FAIL");
console.log("Test 2:", countProperties({ name: "John" }) === 1 ? "✓ PASS" : "✗ FAIL");
console.log("Test 3:", countProperties({}) === 0 ? "✓ PASS" : "✗ FAIL");

// ============================================
// CHALLENGE 4: Merge User Data
// ============================================

console.log("\n=== CHALLENGE 4: Merge User Data ===");
// Create a function mergeUserData that takes two objects: defaults and userData
// Return a new object that combines both, with userData overriding defaults
// Don't modify the original objects!

// YOUR SOLUTION HERE:
function mergeUserData(defaults, userData) {
  // Write your code here

}

// TESTS:
const defaults = { theme: "light", notifications: true, language: "en" };
const userData = { theme: "dark", language: "es" };
const merged = mergeUserData(defaults, userData);
console.log("Test 1:", merged.theme === "dark" ? "✓ PASS" : "✗ FAIL");
console.log("Test 2:", merged.language === "es" ? "✓ PASS" : "✗ FAIL");
console.log("Test 3:", merged.notifications === true ? "✓ PASS" : "✗ FAIL");
console.log("Test 4:", defaults.theme === "light" ? "✓ PASS (didn't modify original)" : "✗ FAIL");

// ============================================
// CHALLENGE 5: Get Nested Value
// ============================================

console.log("\n=== CHALLENGE 5: Get Nested Value ===");
// Create a function getCityName that takes a user object
// The user has an address object with a city property
// Return the city name, or "Unknown" if it doesn't exist
// Use optional chaining!

// YOUR SOLUTION HERE:
function getCityName(user) {
  // Write your code here

}

// TESTS:
const user2 = { name: "Alice", address: { city: "Boston", state: "MA" } };
const user3 = { name: "Bob" };  // No address
console.log("Test 1:", getCityName(user2) === "Boston" ? "✓ PASS" : "✗ FAIL");
console.log("Test 2:", getCityName(user3) === "Unknown" ? "✓ PASS" : "✗ FAIL");
console.log("Test 3:", getCityName({ name: "Charlie", address: {} }) === "Unknown" ? "✓ PASS" : "✗ FAIL");

// ============================================
// CHALLENGE 6: Filter Object by Value
// ============================================

console.log("\n=== CHALLENGE 6: Filter Object by Value ===");
// Create a function filterByPrice that takes an object of products
// Each value is a price (number)
// Return a new object with only items that cost more than 50

// Example input: { apple: 30, laptop: 1000, mouse: 60 }
// Expected output: { laptop: 1000, mouse: 60 }

// YOUR SOLUTION HERE:
function filterByPrice(products) {
  // Write your code here

}

// TESTS:
const products = { apple: 30, laptop: 1000, mouse: 60, pen: 5, keyboard: 80 };
const expensive = filterByPrice(products);
console.log("Test 1:", expensive.laptop === 1000 ? "✓ PASS" : "✗ FAIL");
console.log("Test 2:", expensive.mouse === 60 ? "✓ PASS" : "✗ FAIL");
console.log("Test 3:", expensive.apple === undefined ? "✓ PASS" : "✗ FAIL");
console.log("Test 4:", expensive.keyboard === 80 ? "✓ PASS" : "✗ FAIL");

// ============================================
// CHALLENGE 7: Add Method to Object
// ============================================

console.log("\n=== CHALLENGE 7: Add Method to Object ===");
// Create a calculator object with properties: num1 and num2
// Add methods: add(), subtract(), multiply(), divide()
// Each method should return the result of the operation

// YOUR SOLUTION HERE:
const calculator = {
  num1: 0,
  num2: 0,

  // Add your methods here

};

// TESTS:
calculator.num1 = 10;
calculator.num2 = 5;
console.log("Test 1:", calculator.add() === 15 ? "✓ PASS" : "✗ FAIL");
console.log("Test 2:", calculator.subtract() === 5 ? "✓ PASS" : "✗ FAIL");
console.log("Test 3:", calculator.multiply() === 50 ? "✓ PASS" : "✗ FAIL");
console.log("Test 4:", calculator.divide() === 2 ? "✓ PASS" : "✗ FAIL");

// ============================================
// CHALLENGE 8: Object Destructuring
// ============================================

console.log("\n=== CHALLENGE 8: Object Destructuring ===");
// Create a function getUserInfo that takes a user object
// Use destructuring to extract: username, email, and age (default to 18 if not provided)
// Return a string: "username (email) - Age: age"

// YOUR SOLUTION HERE:
function getUserInfo(user) {
  // Use destructuring here

}

// TESTS:
const user4 = { username: "john_doe", email: "john@example.com", age: 25 };
const user5 = { username: "jane_smith", email: "jane@example.com" };
console.log("Test 1:", getUserInfo(user4) === "john_doe (john@example.com) - Age: 25" ? "✓ PASS" : "✗ FAIL");
console.log("Test 2:", getUserInfo(user5) === "jane_smith (jane@example.com) - Age: 18" ? "✓ PASS" : "✗ FAIL");

// ============================================
// CHALLENGE 9: Convert Array to Object
// ============================================

console.log("\n=== CHALLENGE 9: Convert Array to Object ===");
// Create a function arrayToObject that takes an array of objects
// Each object has: id, name
// Return a single object where keys are IDs and values are names

// Example input: [{id: 1, name: "Alice"}, {id: 2, name: "Bob"}]
// Expected output: {1: "Alice", 2: "Bob"}

// YOUR SOLUTION HERE:
function arrayToObject(array) {
  // Write your code here

}

// TESTS:
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];
const userObj = arrayToObject(users);
console.log("Test 1:", userObj[1] === "Alice" ? "✓ PASS" : "✗ FAIL");
console.log("Test 2:", userObj[2] === "Bob" ? "✓ PASS" : "✗ FAIL");
console.log("Test 3:", userObj[3] === "Charlie" ? "✓ PASS" : "✗ FAIL");

// ============================================
// CHALLENGE 10: Deep Clone Object
// ============================================

console.log("\n=== CHALLENGE 10: Deep Clone Object ===");
// Create a function deepClone that takes an object
// Return a deep copy of the object (nested objects should also be copied)
// Use JSON methods

// YOUR SOLUTION HERE:
function deepClone(obj) {
  // Write your code here

}

// TESTS:
const original = { name: "Test", nested: { value: 100 } };
const cloned = deepClone(original);
cloned.nested.value = 200;
console.log("Test 1:", cloned.name === "Test" ? "✓ PASS" : "✗ FAIL");
console.log("Test 2:", cloned.nested.value === 200 ? "✓ PASS" : "✗ FAIL");
console.log("Test 3:", original.nested.value === 100 ? "✓ PASS (original unchanged)" : "✗ FAIL");

// ============================================
// CHALLENGE 11: Shopping Cart Total
// ============================================

console.log("\n=== CHALLENGE 11: Shopping Cart Total ===");
// Create a function calculateTotal that takes a cart object
// The cart has an items array, where each item has: name, price, quantity
// Return the total cost (price * quantity for all items)

// YOUR SOLUTION HERE:
function calculateTotal(cart) {
  // Write your code here

}

// TESTS:
const cart = {
  items: [
    { name: "Apple", price: 2, quantity: 5 },
    { name: "Banana", price: 1, quantity: 10 },
    { name: "Orange", price: 3, quantity: 3 }
  ]
};
console.log("Test 1:", calculateTotal(cart) === 29 ? "✓ PASS" : "✗ FAIL");
console.log("Test 2:", calculateTotal({ items: [] }) === 0 ? "✓ PASS" : "✗ FAIL");

// ============================================
// CHALLENGE 12: Find Highest Score
// ============================================

console.log("\n=== CHALLENGE 12: Find Highest Score ===");
// Create a function getTopStudent that takes a grades object
// Keys are student names, values are their scores
// Return the name of the student with the highest score

// YOUR SOLUTION HERE:
function getTopStudent(grades) {
  // Write your code here

}

// TESTS:
const grades1 = { Alice: 95, Bob: 88, Charlie: 92, Diana: 98 };
const grades2 = { John: 75, Jane: 85, Jake: 90 };
console.log("Test 1:", getTopStudent(grades1) === "Diana" ? "✓ PASS" : "✗ FAIL");
console.log("Test 2:", getTopStudent(grades2) === "Jake" ? "✓ PASS" : "✗ FAIL");

// ============================================
// BONUS CHALLENGE: Create a Bank Account
// ============================================

console.log("\n=== BONUS CHALLENGE: Bank Account ===");
// Create an object called bankAccount with:
// - Property: balance (starting at 0)
// - Method: deposit(amount) - adds to balance, returns new balance
// - Method: withdraw(amount) - subtracts from balance if sufficient funds
//   Returns new balance, or "Insufficient funds" if not enough money
// - Method: getBalance() - returns current balance

// YOUR SOLUTION HERE:
const bankAccount = {
  // Write your code here

};

// TESTS:
console.log("Test 1:", bankAccount.deposit(100) === 100 ? "✓ PASS" : "✗ FAIL");
console.log("Test 2:", bankAccount.deposit(50) === 150 ? "✓ PASS" : "✗ FAIL");
console.log("Test 3:", bankAccount.withdraw(30) === 120 ? "✓ PASS" : "✗ FAIL");
console.log("Test 4:", bankAccount.withdraw(200) === "Insufficient funds" ? "✓ PASS" : "✗ FAIL");
console.log("Test 5:", bankAccount.getBalance() === 120 ? "✓ PASS" : "✗ FAIL");

// ============================================
// FINAL SUMMARY
// ============================================

console.log("\n========================================");
console.log("Finished! Check your results above.");
console.log("✓ = Passed, ✗ = Failed");
console.log("If a test fails, review your code and try again!");
console.log("========================================");

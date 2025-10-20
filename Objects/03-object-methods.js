// ============================================
// OBJECT METHODS & ITERATION
// ============================================

// Note: This file is meant to be run independently
// Variables here won't conflict with other tutorial files when running separately

// JavaScript provides built-in methods to work with objects
// These are ESSENTIAL for real-world programming!

// ============================================
// 1. Object.keys() - Get all property names
// ============================================

const user = {
  username: "john_doe",
  email: "john@example.com",
  age: 28,
  isActive: true
};

console.log("--- Object.keys() ---");
const keys = Object.keys(user);
console.log("Keys:", keys);  // ["username", "email", "age", "isActive"]

// Common use: Loop through all keys
keys.forEach(key => {
  console.log(`Key: ${key}`);
});

// ============================================
// CHALLENGE 1: Object.keys()
// ============================================
console.log("\n--- Challenge 1: Object.keys() ---");
// TODO: Create a car object with at least 4 properties (brand, model, year, color)
// Use Object.keys() to count how many properties it has
// Print: "This car object has X properties"


// ============================================
// 2. Object.values() - Get all property values
// ============================================

console.log("\n--- Object.values() ---");
const values = Object.values(user);
console.log("Values:", values);  // ["john_doe", "john@example.com", 28, true]

// Example: Sum all numeric values
const scores = {
  math: 95,
  science: 88,
  english: 92,
  history: 85
};

const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
const average = totalScore / Object.values(scores).length;
console.log("Average score:", average);

// ============================================
// CHALLENGE 2: Object.values()
// ============================================
console.log("\n--- Challenge 2: Object.values() ---");
// TODO: Create an object with product prices (at least 5 products)
// Use Object.values() to find the maximum and minimum price
// Hint: Use Math.max(...values) and Math.min(...values)


// ============================================
// 3. Object.entries() - Get key-value pairs
// ============================================

console.log("\n--- Object.entries() ---");
const entries = Object.entries(user);
console.log("Entries:", entries);
// [["username", "john_doe"], ["email", "john@example.com"], ...]

// Most useful for iteration with both key and value
entries.forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// Convert to Map
const userMap = new Map(entries);
console.log("As Map:", userMap);

// ============================================
// CHALLENGE 3: Object.entries()
// ============================================
console.log("\n--- Challenge 3: Object.entries() ---");
// TODO: Create an inventory object with items and quantities
// Use Object.entries() to print each item
// Format: "We have 50 apples in stock"


// ============================================
// 4. Object.assign() - Copy/Merge objects
// ============================================

console.log("\n--- Object.assign() ---");

const defaults = {
  theme: "light",
  fontSize: 14,
  notifications: true
};

const userSettings = {
  theme: "dark",
  fontSize: 16
};

// Merge objects (later objects override earlier ones)
const finalSettings = Object.assign({}, defaults, userSettings);
console.log("Final settings:", finalSettings);
// { theme: "dark", fontSize: 16, notifications: true }

// Modern way: Spread operator (more common)
const merged = { ...defaults, ...userSettings };
console.log("Merged with spread:", merged);

// ============================================
// CHALLENGE 4: Object.assign()
// ============================================
console.log("\n--- Challenge 4: Object.assign() ---");
// TODO: Create a 'defaultConfig' object and a 'userConfig' object
// Merge them so user settings override defaults
// The merged object should have at least 5 properties total


// ============================================
// 5. Object.freeze() - Make immutable
// ============================================

console.log("\n--- Object.freeze() ---");

const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000
};

Object.freeze(config);

// These won't work (fails silently in normal mode, throws error in strict mode)
config.apiUrl = "https://hacker.com";  // Doesn't change
config.newProp = "test";  // Doesn't add
console.log("Config (frozen):", config);  // Original values intact

// Check if frozen
console.log("Is frozen:", Object.isFrozen(config));  // true

// ============================================
// CHALLENGE 5: Object.freeze()
// ============================================
console.log("\n--- Challenge 5: Object.freeze() ---");
// TODO: Create a constants object with important values (API key, max attempts, etc.)
// Freeze it, then try to modify it
// Verify the object hasn't changed


// ============================================
// 6. Object.seal() - Prevent adding/removing
// ============================================

console.log("\n--- Object.seal() ---");

const product = {
  name: "Laptop",
  price: 999
};

Object.seal(product);

// Can modify existing properties
product.price = 899;  // Works!
console.log("Modified price:", product.price);

// Cannot add or delete
product.stock = 10;  // Doesn't add
delete product.price;  // Doesn't delete
console.log("Product (sealed):", product);

// ============================================
// CHALLENGE 6: Object.seal()
// ============================================
console.log("\n--- Challenge 6: Object.seal() ---");
// TODO: Create a user profile object
// Seal it, try to add a new property (should fail)
// Modify an existing property (should work)
// Verify the results


// ============================================
// 7. LOOPING THROUGH OBJECTS
// ============================================

console.log("\n--- Looping Through Objects ---");

const inventory = {
  apples: 50,
  oranges: 30,
  bananas: 40,
  grapes: 25
};

// Method 1: for...in loop
console.log("\nUsing for...in:");
for (let fruit in inventory) {
  console.log(`${fruit}: ${inventory[fruit]}`);
}

// Method 2: Object.keys() with forEach
console.log("\nUsing Object.keys():");
Object.keys(inventory).forEach(fruit => {
  console.log(`${fruit}: ${inventory[fruit]}`);
});

// Method 3: Object.entries() (best for most cases)
console.log("\nUsing Object.entries():");
Object.entries(inventory).forEach(([fruit, quantity]) => {
  console.log(`${fruit}: ${quantity}`);
});

// Method 4: for...of with Object.entries()
console.log("\nUsing for...of:");
for (const [fruit, quantity] of Object.entries(inventory)) {
  console.log(`${fruit}: ${quantity}`);
}

// ============================================
// CHALLENGE 7: Looping
// ============================================
console.log("\n--- Challenge 7: Looping ---");
// TODO: Create an object with student grades (at least 4 students)
// Use Object.entries() to loop and print each student's grade
// Format: "Alice scored 95"


// ============================================
// 8. TRANSFORMING OBJECTS
// ============================================

console.log("\n--- Transforming Objects ---");

const prices = {
  laptop: 1000,
  mouse: 50,
  keyboard: 100
};

// Convert to array, map, convert back to object
const discountedPrices = Object.fromEntries(
  Object.entries(prices).map(([item, price]) => [item, price * 0.9])
);

console.log("Original:", prices);
console.log("10% off:", discountedPrices);

// Filter object properties
const expensiveItems = Object.fromEntries(
  Object.entries(prices).filter(([item, price]) => price > 75)
);
console.log("Expensive items:", expensiveItems);

// ============================================
// CHALLENGE 8: Transforming Objects
// ============================================
console.log("\n--- Challenge 8: Transforming ---");
// TODO: Create an object with employee salaries
// Create a new object with all salaries increased by 15%
// Create another object with only employees earning over 60k


// ============================================
// 9. CHECKING OBJECT PROPERTIES
// ============================================

console.log("\n--- Checking Properties ---");

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2024
};

// Check if property exists
console.log("Has 'brand':", "brand" in car);  // true
console.log("Has 'color':", "color" in car);  // false

// Own property vs inherited
console.log("Own 'brand':", car.hasOwnProperty("brand"));  // true
console.log("Own 'toString':", car.hasOwnProperty("toString"));  // false

// Get property descriptor
const descriptor = Object.getOwnPropertyDescriptor(car, "brand");
console.log("Brand descriptor:", descriptor);

// ============================================
// CHALLENGE 9: Checking Properties
// ============================================
console.log("\n--- Challenge 9: Property Checking ---");
// TODO: Create a function that takes an object and a property name
// Return true if the property exists AND is not undefined
// Test it with an object that has some undefined properties


// ============================================
// REAL-WORLD EXAMPLE: Data Processing
// ============================================

console.log("\n--- Real World Example: Analytics ---");

const pageViews = {
  home: 1500,
  about: 300,
  products: 800,
  contact: 150,
  blog: 600
};

// Get total views
const totalViews = Object.values(pageViews).reduce((sum, views) => sum + views, 0);
console.log("Total views:", totalViews);

// Find most popular page
const mostPopular = Object.entries(pageViews).reduce((max, [page, views]) =>
  views > max.views ? { page, views } : max
, { page: "", views: 0 });
console.log("Most popular page:", mostPopular);

// Get pages with > 500 views
const popularPages = Object.fromEntries(
  Object.entries(pageViews).filter(([page, views]) => views > 500)
);
console.log("Popular pages:", popularPages);

// Calculate percentages
const viewPercentages = Object.fromEntries(
  Object.entries(pageViews).map(([page, views]) =>
    [page, `${((views / totalViews) * 100).toFixed(1)}%`]
  )
);
console.log("View percentages:", viewPercentages);

// ============================================
// FINAL CHALLENGE: Combine Everything
// ============================================

console.log("\n--- FINAL CHALLENGE ---");
// TODO: Create a gradebook object with student names and their test scores (array of numbers)
// Write code to:
// 1. Calculate each student's average score
// 2. Create a new object with student names and their averages
// 3. Find the student with the highest average
// 4. Filter students who have an average above 85
// 5. Print a report showing all the results

// Example structure:
// const gradebook = {
//   "Alice": [90, 85, 92],
//   "Bob": [78, 82, 80],
//   ...
// };

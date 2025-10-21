// ============================================
// OBJECT METHODS & ITERATION
// ============================================

// Note: This file is meant to be run independently
// Variables here won't conflict with other tutorial files when running separately

// ============================================
// WHY OBJECT METHODS MATTER - THE BIGGER PICTURE
// ============================================

// JavaScript provides built-in methods to work with objects
// These are ESSENTIAL for real-world programming!

// THE PROBLEM THEY SOLVE:
// Objects aren't like arrays - you can't use .map(), .filter(), .forEach() directly
// But you NEED to loop through objects, transform them, and extract data!

// THESE METHODS ARE THE SOLUTION:
// Object.keys() → Get all property names (to loop)
// Object.values() → Get all values (to sum, find max, etc.)
// Object.entries() → Get key-value pairs (to transform objects)

// REAL-WORLD USES (You'll use these DAILY):
// - Converting API responses to different formats
// - Calculating totals from price objects
// - Filtering object properties
// - Validating form data
// - Redux state management
// - Data transformations

// Professional JavaScript developers use these methods in almost EVERY file!

// ============================================
// 1. Object.keys() - Get all property names
// ============================================

// CONCEPT: Get an array of all property names (keys) from an object
// WHY IT'S IMPORTANT: You need to loop through object properties!
// REAL-WORLD USE: Validate forms, count properties, check what data exists

// PROBLEM: How do you loop through an object?
// SOLUTION: Convert keys to an array, then use array methods!

// Examples of when you need this:
// - Check if all required form fields are filled
// - Count how many settings a user has configured
// - List all available product colors
// - Validate API response has expected fields

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

// WHY IS THIS USEFUL?
// Objects don't have .forEach(), .map(), .filter() like arrays do
// So we convert the keys to an array FIRST, then use array methods!

// REAL-WORLD EXAMPLE:
// Check if user filled out all required form fields
const formData = {
  username: "john",
  email: "john@example.com",
  password: "secret",
  confirmPassword: ""  // Oops! Empty
};

const requiredFields = ["username", "email", "password", "confirmPassword"];
const missingFields = requiredFields.filter(field => !formData[field]);
console.log("Missing fields:", missingFields);  // ["confirmPassword"]

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

// CONCEPT: Get an array of all values from an object (ignore the keys)
// WHY IT'S IMPORTANT: Calculate totals, find max/min, check if value exists
// REAL-WORLD USE: Shopping cart totals, grade averages, price comparisons

// Examples of when you need this:
// - Calculate total price of shopping cart
// - Find the highest/lowest grade in a class
// - Sum up all inventory quantities
// - Check if any value is missing (undefined/null)

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

// THE PATTERN:
// Object.values(obj) → convert to array of values
// .reduce() → sum them up / find max / etc.

// MORE REAL-WORLD EXAMPLES:
const cart = {
  laptop: 999,
  mouse: 25,
  keyboard: 75
};

// Calculate total cart price
const total = Object.values(cart).reduce((sum, price) => sum + price, 0);
console.log("Cart total:", total);  // 1099

// Find most expensive item
const maxPrice = Math.max(...Object.values(cart));
console.log("Most expensive:", maxPrice);  // 999

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

// CONCEPT: Get an array of [key, value] pairs - THE MOST POWERFUL METHOD!
// WHY IT'S IMPORTANT: Transform objects, filter properties, build new objects
// REAL-WORLD USE: Apply discounts, filter data, convert formats

// This is the SWISS ARMY KNIFE of object methods!
// Use it when you need BOTH the key AND the value

// Examples of when you need this:
// - Apply 10% discount to all prices: {laptop: 900, mouse: 45}
// - Filter out expensive items: only items under $100
// - Convert snake_case keys to camelCase
// - Transform API response to match your app's format

console.log("\n--- Object.entries() ---");
const entries = Object.entries(user);
console.log("Entries:", entries);
// [["username", "john_doe"], ["email", "john@example.com"], ...]

// Most useful for iteration with both key and value
entries.forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// Convert to Map (advanced - you can skip this for now)
const userMap = new Map(entries);
console.log("As Map:", userMap);

// THE MOST COMMON USE: Loop with both key AND value
// When you need BOTH the property name AND its value

// REAL-WORLD EXAMPLE:
// Display settings to user
const appSettings = {
  darkMode: true,
  fontSize: 16,
  language: "en",
  notifications: false
};

console.log("\nYour Settings:");
Object.entries(appSettings).forEach(([setting, value]) => {
  console.log(`${setting}: ${value}`);
});
// Output:
// darkMode: true
// fontSize: 16
// language: en
// notifications: false

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

// CONCEPT: Combine multiple objects into one (later values override earlier ones)
// WHY IT'S IMPORTANT: Merge configs, apply user settings, combine data sources
// REAL-WORLD USE: Default settings + user preferences, Redux reducers

// THE PROBLEM: You have default settings, user wants to override some
// THE SOLUTION: Object.assign() or spread operator {...}

// Examples of when you need this:
// - App has default theme, user chooses dark mode → merge them
// - Form has pre-filled values, user changes some → merge updates
// - API returns partial data, need to fill in defaults
// - Redux: merge state updates without mutating original

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

// Modern way: Spread operator (more common and cleaner!)
const merged = { ...defaults, ...userSettings };
console.log("Merged with spread:", merged);

// HOW IT WORKS:
// { ...defaults, ...userSettings }
//   ↑ spread all properties from defaults
//                ↑ then spread all properties from userSettings
//                  (overwrites any duplicates from defaults)

// THINK OF IT LIKE LAYERS:
// Layer 1: defaults (theme: "light", fontSize: 14, notifications: true)
// Layer 2: userSettings (theme: "dark", fontSize: 16)
// Result: Layer 2 covers Layer 1 where they overlap
//         → theme: "dark" (from Layer 2)
//         → fontSize: 16 (from Layer 2)
//         → notifications: true (only in Layer 1)

// REAL-WORLD USE:
// Every app has default settings + user preferences
// Redux state updates
// API default options + custom options

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

// CONCEPT: Convert object → array → transform → back to object
// WHY IT'S IMPORTANT: Objects don't have .map(), .filter() - but you need them!
// REAL-WORLD USE: Apply discounts, filter data, transform formats

// THE PATTERN (memorize this!):
// 1. Object.entries(obj) → convert to array of [key, value] pairs
// 2. .map() or .filter() → transform the array
// 3. Object.fromEntries() → convert back to object

// This is how professionals transform object data!

// Examples of what you can do:
// - Apply 20% discount to all prices
// - Filter out out-of-stock items
// - Convert all prices from USD to EUR
// - Add tax to all product prices

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

// MEMORIZE THIS PATTERN - You'll use it CONSTANTLY:
//
// Step 1: Object.entries(obj)
//         → Convert object to array: [[key, value], [key, value], ...]
//
// Step 2: .map() or .filter()
//         → Transform or filter the array
//
// Step 3: Object.fromEntries()
//         → Convert array back to object
//
// VISUAL EXAMPLE:
// { laptop: 1000, mouse: 50 }
//         ↓ Object.entries()
// [["laptop", 1000], ["mouse", 50]]
//         ↓ .map(([item, price]) => [item, price * 0.9])
// [["laptop", 900], ["mouse", 45]]
//         ↓ Object.fromEntries()
// { laptop: 900, mouse: 45 }

// THIS IS HOW PROFESSIONALS WORK WITH OBJECTS!
// You can't use .map() or .filter() directly on objects
// So you convert → transform → convert back

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

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
console.log("--- forEach loop ---");
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

// This is an ARRAY of strings (field names we want to check)
const requiredFields = ["username", "email", "password", "confirmPassword"];

// .filter() loops through the ARRAY above
// Each iteration, 'field' is one string from the array
const missingFields = requiredFields.filter(field => {
  
  // ITERATION 1: field = "username"
  // formData[field] → formData["username"] → "john" (truthy)
  // !formData[field] → !("john") → false
  // FALSE = don't include "username" in result
  
  // ITERATION 2: field = "email"  
  // formData[field] → formData["email"] → "john@example.com" (truthy)
  // !formData[field] → false
  // FALSE = don't include "email" in result
  
  // ITERATION 3: field = "password"
  // formData[field] → formData["password"] → "secret" (truthy)
  // !formData[field] → false
  // FALSE = don't include "password" in result
  
  // ITERATION 4: field = "confirmPassword"
  // formData[field] → formData["confirmPassword"] → "" (FALSY!)
  // !formData[field] → !("") → true
  // TRUE = INCLUDE "confirmPassword" in result
  
  return !formData[field];  // Return true if field is empty/missing
});

// missingFields now contains: ["confirmPassword"]
console.log("Missing fields:", missingFields);

// ============================================
// CHALLENGE 1: Object.keys()
// ============================================
console.log("\n--- Challenge 1: Object.keys() ---");
// TODO: Create a car object with at least 4 properties (brand, model, year, color)
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2023,
  color: "silver"
};

console.log(car);
// Output: { brand: 'Toyota', model: 'Camry', year: 2023, color: 'silver' }

// Access individual properties
console.log(car.brand);  // "Toyota"
console.log(car.year);   // 2023

// Use Object.keys() to count how many properties it has

const carObjectKeys = Object.keys(car);

console.log(carObjectKeys); // [ 'brand', 'model', 'year', 'color' ]


// Print: "This car object has X properties"

const lengthProperties = carObjectKeys.length;

console.log(`This car object has ${lengthProperties} properties`); // This car object has 4 properties

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

const productPrices = {
  laptop: 999.99,
  mouse: 24.99,
  keyboard: 79.99,
  monitor: 299.99,
  headphones: 149.99
};

console.log(productPrices);

// Use Object.values() to find the maximum and minimum price
const maxProductPrice = Math.max(...Object.values(productPrices));
console.log("Most expensive:", maxProductPrice); // Most expensive: 999.9

const minProductPrice = Math.min(...Object.values(productPrices));
console.log("The least expensive:", minProductPrice); // The least expensive: 24.99


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
const inventory = {
  apples: 50,
  bananas: 30,
  oranges: 25,
  grapes: 15,
  watermelons: 10,
};

// Use Object.entries() to print each item
const entries = Object.entries(inventory);
console.log('Inventory', entries);
// Format: "We have 50 apples in stock"

console.log(`We have ${inventory.apples}`);


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
//            ↑    ↑         ↑
//         target  1st       2nd (overwrites 1st if keys match)

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
const defaultConfig = {
  theme: "light",
  language: "en",
  autoSave: true,
  timeout: 5000,
  notificationsEnabled: true,
  soundEnabled: true,
};

const userConfig = {
  theme: "dark",
  language: "es",
  soundEnabled: false,
};

// Merge them so user settings override defaults by spread operator
const mergedConfig = { ...defaultConfig, ...userConfig };

// Object Assign 
const objectMerged = Object.assign({}, defaultConfig, userConfig);
// The merged object should have at least 5 properties total
console.log('spread operator', mergedConfig);
console.log('ObjectAssign', objectMerged);

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
const studentGrades = {
  john: 85,
  sarah: 92,
  michael: 78,
  emma: 95,
  david: 88,
};

// Use Object.entries() to loop and print each student's grade
Object.entries(studentGrades).forEach(([studentName, grades]) => {
    console.log(`${studentName} scored ${grades}`);
})
// Format: "Alice scored 95"
// john scored 85
// sarah scored 92
// michael scored 78
// emma scored 95
// david scored 88

// ============================================
// 8. TRANSFORMING OBJECTS
// ============================================

// CONCEPT: Convert object → array → transform → back to object
// WHY IT'S IMPORTANT: Objects don't have .map(), .filter() - but you need them!
// REAL-WORLD USE: Apply discounts, filter data, transform formats

// THE PATTERN (memorize this!):
// prices (object)
//     ↓
// Object.entries()      ← Convert to array (FIRST)
//     ↓
// [["laptop", 1000], ["mouse", 50]]
//     ↓
// .map()               ← Transform array (SECOND)
//     ↓
// [["laptop", 900], ["mouse", 45]]
//     ↓
// Object.fromEntries() ← Convert back to object (THIRD/LAST)
//     ↓
// { laptop: 900, mouse: 45 }


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

// ============================================
// CHALLENGE 8: Transforming Objects
// ============================================
console.log("\n--- Challenge 8: Transforming ---");
// TODO: Create an object with employee salaries
const employeeSalaries = {
  john: 50000,
  sarah: 65000,
  michael: 55000,
  emma: 70000,
  david: 48000,
};
// Create a new object with all salaries increased by 15%
const increaseSalary = Object.fromEntries(
    Object.entries(employeeSalaries).map(([employee, salary]) => [employee, salary * .15])
);
// Create another object with only employees earning over 60k
const employeeSalaryOverSixty = Object.fromEntries(
    Object.entries(employeeSalaries).filter(([employee, salary]) => salary > 60000)
);

console.log(increaseSalary);
console.log(employeeSalaryOverSixty);

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
function propertyCheck(obj, propName) {
  // Need to check BOTH:
  // 1. Property exists (hasOwnProperty)
  const hasProperty = obj.hasOwnProperty(propName);
  // 2. Value is not undefined
  const isNotUndefined = obj[propName] !== undefined;

  return hasProperty && isNotUndefined;
}

console.log(propertyCheck(car, "brand"));
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

// The Simple Rule:
// // Want to keep it as an OBJECT?
// Object.fromEntries(Object.entries(obj).transform(...))
//        ↑                                              ↑
//     Use both!

// // Want it as ARRAY/NUMBER/BOOLEAN/ONE VALUE?
// Object.entries(obj).transform(...)
//        ↑
//     Use only this!

// console.log("\n--- FINAL CHALLENGE ---");

// Create a gradebook object with student names and their test scores
const gradebook = {
  "Alice": [90, 85, 92, 88, 95],
  "Bob": [78, 82, 80, 75, 79],
  "Charlie": [95, 92, 98, 96, 94],
  "Diana": [88, 86, 90, 85, 87],
  "Ethan": [72, 75, 70, 68, 73],
  "Fiona": [91, 89, 93, 90, 92]
};

// Write code to:
// 1. Calculate each student's average score
const studentAverages = Object.fromEntries(
  Object.entries(gradebook).map(([student, scores]) => {
    const average =
      scores.reduce((sum, score) => sum + score, 0) / scores.length;
    return [student, average];
  })
);

// 2. Create a new object with student names and their averages
console.log(studentAverages);

// 3. Find the student with the highest average
const highestAverage = Object.entries(studentAverages).reduce((highest, [student, average]) => {
    if (average > highest.average) {
        return { student, average };
    }

    return highest;
})

console.log(highestAverage);
// 4. Filter students who have an average above 85

const studentsAboveEightyFive = Object.fromEntries(
  Object.entries(studentAverages).filter(([student, average]) => {
    return average > 85;
  })
);


console.log(studentsAboveEightyFive);
// 5. Print a report showing all the results

// ============================================
// OBJECT DESTRUCTURING - MODERN JAVASCRIPT
// ============================================

// Note: This file is meant to be run independently
// Variables here won't conflict with other tutorial files when running separately

// ============================================
// WHY DESTRUCTURING MATTERS - THE BIGGER PICTURE
// ============================================

// Destructuring is a clean way to extract values from objects
// You'll see this EVERYWHERE in modern JavaScript!

// THE PROBLEM IT SOLVES:
// Old way: Repetitive and verbose
// const name = user.name;
// const email = user.email;
// const age = user.age;

// New way: Clean and concise
// const { name, email, age } = user;

// WHY IT'S SO IMPORTANT:
// 1. Every modern codebase uses destructuring
// 2. React components use it constantly (props destructuring)
// 3. Makes code cleaner and easier to read
// 4. Allows setting default values easily
// 5. Professional code standard in 2024+

// WHERE YOU'LL SEE IT:
// - React: function MyComponent({ name, email, age }) { ... }
// - Node.js: const { port, host } = config;
// - APIs: const { data, status, error } = response;
// - Everywhere: It's the modern JavaScript standard!

// If you don't learn destructuring, you'll struggle to read modern code!

// ============================================
// 1. BASIC DESTRUCTURING
// ============================================

const user = {
  username: "maria_dev",
  email: "maria@example.com",
  age: 27,
  country: "Spain"
};

// Old way
console.log("--- Old Way ---");
const username = user.username;
const email = user.email;
console.log(username, email);

// New way with destructuring
console.log("\n--- Destructuring Way ---");
const { username: userName2, email: userEmail } = user;
console.log(userName2, userEmail);

// If variable names match property names, even simpler:
const { age, country } = user;
console.log(age, country);

// ============================================
// CHALLENGE 1: Basic Destructuring
// ============================================
console.log("\n--- Challenge 1: Basic Destructuring ---");
// TODO: Create a car object with: brand, model, year, color
// Destructure all four properties in one line
// Print all the values


// ============================================
// 2. DEFAULT VALUES
// ============================================

// CONCEPT: Set fallback values for properties that might not exist
// WHY IT'S IMPORTANT: API data is often incomplete - prevents undefined errors
// REAL-WORLD USE: API responses, user settings, optional form fields

// THE PROBLEM: What if the property doesn't exist?
// const { language } = settings; // language is undefined!
// console.log(language.toUpperCase()); // CRASH!

// THE SOLUTION: Set a default value
// const { language = "en" } = settings; // language is "en"
// console.log(language.toUpperCase()); // Works!

console.log("\n--- Default Values ---");

const settings = {
  theme: "dark",
  fontSize: 16
  // No language property
};

// Set defaults for missing properties
const { theme, fontSize, language = "en", notifications = true } = settings;
console.log("Theme:", theme);           // "dark"
console.log("Font size:", fontSize);    // 16
console.log("Language:", language);     // "en" (default)
console.log("Notifications:", notifications);  // true (default)

// ============================================
// CHALLENGE 2: Default Values
// ============================================
console.log("\n--- Challenge 2: Default Values ---");
// TODO: Create a config object with only 2 properties
// Destructure it with default values for 4 properties (2 existing, 2 with defaults)
// Print all 4 values to verify defaults work


// ============================================
// 3. RENAMING VARIABLES
// ============================================

console.log("\n--- Renaming Variables ---");

const response = {
  data: { id: 123 },
  status: 200
};

// Rename 'data' to 'responseData' and 'status' to 'statusCode'
const { data: responseData, status: statusCode } = response;
console.log("Response data:", responseData);
console.log("Status code:", statusCode);

// Combine renaming with defaults
const config = {
  port: 3000
};

const { port: serverPort = 8080, host: serverHost = "localhost" } = config;
console.log("Server port:", serverPort);    // 3000
console.log("Server host:", serverHost);    // "localhost" (default)

// ============================================
// CHALLENGE 3: Renaming Variables
// ============================================
console.log("\n--- Challenge 3: Renaming Variables ---");
// TODO: Create a user object with: firstName, lastName, age
// Destructure and rename them to: fName, lName, years
// Print all renamed variables


// ============================================
// 4. NESTED DESTRUCTURING
// ============================================

console.log("\n--- Nested Destructuring ---");

const employee = {
  name: "John Smith",
  position: "Developer",
  address: {
    city: "New York",
    state: "NY",
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  },
  salary: 85000
};

// Destructure nested objects
const {
  name,
  address: {
    city,
    state,
    coordinates: { lat, lng }
  }
} = employee;

console.log("Name:", name);
console.log("City:", city);
console.log("State:", state);
console.log("Coordinates:", lat, lng);

// ============================================
// CHALLENGE 4: Nested Destructuring
// ============================================
console.log("\n--- Challenge 4: Nested Destructuring ---");
// TODO: Create a restaurant object with nested location and menu
// Use nested destructuring to extract: restaurant name, city, and first pizza option
// Print all three values


// ============================================
// 5. REST OPERATOR (...)
// ============================================

console.log("\n--- Rest Operator ---");

const product = {
  id: 789,
  name: "Laptop",
  price: 1200,
  stock: 5,
  category: "Electronics",
  brand: "Dell"
};

// Extract some properties, collect the rest
const { id, name, ...otherDetails } = product;
console.log("ID:", id);
console.log("Name:", name);
console.log("Other details:", otherDetails);
// { price: 1200, stock: 5, category: "Electronics", brand: "Dell" }

// ============================================
// CHALLENGE 5: Rest Operator
// ============================================
console.log("\n--- Challenge 5: Rest Operator ---");
// TODO: Create an object with at least 6 properties
// Destructure 2 specific properties, collect the rest with ...
// Print both the specific properties and the rest object


// ============================================
// 6. DESTRUCTURING IN FUNCTION PARAMETERS
// ============================================

// CONCEPT: Destructure objects directly in function parameters
// WHY IT'S IMPORTANT: This is THE way React components receive props!
// REAL-WORLD USE: React, API functions, clean function signatures

// This is THE MOST IMPORTANT destructuring pattern!
// Every React component you see uses this:
// function MyComponent({ name, email, age }) { ... }

// WHY IT'S BETTER:
// Old: function createUser(userObj) { const name = userObj.name; ... }
// New: function createUser({ name, email, age }) { ... }
// ↑ Instantly see what the function expects!

console.log("\n--- Function Parameters ---");

// Without destructuring
function createUserOld(userObj) {
  console.log(`${userObj.name} is ${userObj.age} years old`);
}

// With destructuring (cleaner!)
function createUser({ name, age, email = "no-email@example.com" }) {
  console.log(`${name} is ${age} years old`);
  console.log(`Email: ${email}`);
}

createUser({ name: "Alice", age: 30 });
createUser({ name: "Bob", age: 25, email: "bob@example.com" });

// Real-world example: API function
function fetchUserData({
  userId,
  includeOrders = false,
  limit = 10
}) {
  console.log(`Fetching user ${userId}`);
  console.log(`Include orders: ${includeOrders}`);
  console.log(`Limit: ${limit}`);
}

fetchUserData({ userId: 123, includeOrders: true });

// ============================================
// CHALLENGE 6: Function Parameters
// ============================================
console.log("\n--- Challenge 6: Function Parameters ---");
// TODO: Write a function that accepts a destructured object parameter
// The function should calculate and return total price (price * quantity)
// Include default values for optional tax rate (default 0.08)
// Test with: { price: 100, quantity: 2, tax: 0.1 }


// ============================================
// 7. DESTRUCTURING WITH ARRAYS IN OBJECTS
// ============================================

console.log("\n--- Objects with Arrays ---");

const blogPost = {
  title: "JavaScript Tips",
  author: "Jane",
  tags: ["javascript", "webdev", "tutorial"],
  comments: [
    { user: "John", text: "Great post!" },
    { user: "Alice", text: "Very helpful" }
  ]
};

// Destructure array elements
const {
  title,
  tags: [firstTag, secondTag],
  comments: [firstComment]
} = blogPost;

console.log("Title:", title);
console.log("First tag:", firstTag);
console.log("Second tag:", secondTag);
console.log("First comment:", firstComment);

// ============================================
// CHALLENGE 7: Arrays in Destructuring
// ============================================
console.log("\n--- Challenge 7: Arrays in Destructuring ---");
// TODO: Create an object with a property that's an array of at least 3 items
// Destructure to get the first two array items
// Print them


// ============================================
// 8. PRACTICAL PATTERNS
// ============================================

console.log("\n--- Practical Patterns ---");

// Pattern 1: API response handling
function handleApiResponse({
  data,
  status,
  error = null,
  message = "Success"
}) {
  if (status === 200) {
    console.log(message);
    return data;
  } else {
    console.error("Error:", error);
  }
}

handleApiResponse({
  data: { users: [] },
  status: 200
});

// Pattern 2: Configuration objects
function initializeApp({
  apiUrl = "https://api.example.com",
  timeout = 5000,
  retries = 3,
  debug = false
} = {}) {  // Note the = {} for default empty object
  console.log("Initializing app...");
  console.log(`API: ${apiUrl}`);
  console.log(`Timeout: ${timeout}ms`);
  console.log(`Retries: ${retries}`);
  console.log(`Debug: ${debug}`);
}

initializeApp({ debug: true });
initializeApp();  // Works with no arguments!

// Pattern 3: Swapping variables
let a = 5;
let b = 10;
console.log("Before swap:", { a, b });

[a, b] = [b, a];  // Array destructuring for swap
console.log("After swap:", { a, b });

// Pattern 4: Multiple return values
function getMinMax(numbers) {
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers),
    average: numbers.reduce((a, b) => a + b) / numbers.length
  };
}

const { min, max, average } = getMinMax([5, 10, 15, 20]);
console.log("Min:", min, "Max:", max, "Average:", average);

// ============================================
// CHALLENGE 8: Practical Patterns
// ============================================
console.log("\n--- Challenge 8: Practical Patterns ---");
// TODO: Write a function that returns an object with: sum, product, count
// Destructure the return value to get all three values
// Test with an array of numbers: [2, 3, 4, 5]


// ============================================
// REAL-WORLD EXAMPLE: React Component
// ============================================

console.log("\n--- Real World: Component Props ---");

// This is how React components receive props
function UserCard({
  name,
  email,
  avatar = "/default-avatar.png",
  isOnline = false,
  ...otherProps
}) {
  console.log("Rendering UserCard...");
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Avatar: ${avatar}`);
  console.log(`Online: ${isOnline}`);
  console.log("Other props:", otherProps);
}

UserCard({
  name: "Maria Garcia",
  email: "maria@example.com",
  isOnline: true,
  role: "Admin",
  joinedDate: "2024-01-15"
});

// ============================================
// REAL-WORLD EXAMPLE: Express Route Handler
// ============================================

console.log("\n--- Real World: Route Handler ---");

// Simulating Express.js route handler
function handlePostRequest({ body, params, query }) {
  const { title, content } = body;
  const { id } = params;
  const { sortBy = "date" } = query;

  console.log(`Creating post ${id}`);
  console.log(`Title: ${title}`);
  console.log(`Content: ${content}`);
  console.log(`Sort by: ${sortBy}`);
}

handlePostRequest({
  body: { title: "New Post", content: "Hello world" },
  params: { id: "123" },
  query: {}
});

// ============================================
// FINAL CHALLENGE: Combine Everything
// ============================================
console.log("\n--- FINAL CHALLENGE ---");
// TODO: Create a function called 'processOrder' that accepts a destructured parameter:
// {
//   customer: { name, email },
//   items: [first item, ...rest of items],
//   shipping: { address, city, zip, express = false },
//   discount = 0
// }
// The function should:
// 1. Print customer name and email
// 2. Print the first item and count of remaining items
// 3. Print shipping city and whether it's express shipping
// 4. Return an object with: total items count, customer name, express shipping status
// Test it with a sample order object

// ============================================
// JSON - JavaScript Object Notation
// ============================================

// Note: This file is meant to be run independently
// Variables here won't conflict with other tutorial files when running separately

// ============================================
// WHY JSON MATTERS - THE BIGGER PICTURE
// ============================================

// JSON is THE data format for the web
// 99.9% of APIs you work with will use JSON
// It looks like JavaScript objects but with strict rules

// WHY JSON EXISTS:
// Problem: How do we send data between different systems?
// - JavaScript objects only exist in JavaScript
// - Other languages (Python, Java, etc.) can't read JS objects
// - We need a UNIVERSAL format that works everywhere

// Solution: JSON!
// - Text-based format (can be sent over the internet)
// - Language-independent (works in Python, Java, C#, etc.)
// - Easy for humans to read
// - Easy for computers to parse

// WHERE YOU'LL USE JSON EVERY SINGLE DAY:
// 1. fetch() API calls → Response is JSON
// 2. Saving to localStorage → Must convert to JSON
// 3. Sending data to servers → Convert to JSON first
// 4. Configuration files → package.json, config.json, etc.
// 5. API documentation → Shows JSON examples

// THE TWO CRITICAL METHODS:
// JSON.parse() → Convert JSON string TO JavaScript object (receiving data)
// JSON.stringify() → Convert JavaScript object TO JSON string (sending data)

// Master these two methods = Master working with APIs!

// ============================================
// 1. WHAT IS JSON?
// ============================================

console.log("--- What is JSON? ---");

// This is a JavaScript object (NOT JSON)
const jsObject = {
  name: "John",
  age: 30,
  isActive: true
};

// This is JSON (a string representation)
const jsonString = '{"name":"John","age":30,"isActive":true}';

console.log("JS Object:", jsObject);
console.log("JSON String:", jsonString);
console.log("Type of object:", typeof jsObject);
console.log("Type of JSON:", typeof jsonString);

// ============================================
// CHALLENGE 1: Understanding JSON
// ============================================
console.log("\n--- Challenge 1: Understanding JSON ---");
// TODO: Create a JS object with 3 properties
// Convert it to a JSON string using JSON.stringify()
// Print both and their types


// ============================================
// 2. JSON RULES (Important!)
// ============================================

console.log("\n--- JSON Rules ---");

// VALID JSON
const validJSON = `{
  "name": "Alice",
  "age": 25,
  "isStudent": true,
  "courses": ["Math", "Science"],
  "address": {
    "city": "Boston",
    "zip": "02101"
  },
  "score": null
}`;

// INVALID JSON examples (these would cause errors):
// ❌ Single quotes: {'name': 'Alice'}
// ❌ No quotes on keys: {name: "Alice"}
// ❌ Trailing commas: {"name": "Alice",}
// ❌ Functions: {"greet": function() {}}
// ❌ Undefined: {"value": undefined}
// ❌ Comments: {"name": "Alice" /* comment */}

console.log("Valid JSON:", validJSON);

// ============================================
// CHALLENGE 2: JSON Rules
// ============================================
console.log("\n--- Challenge 2: JSON Rules ---");
// TODO: Try to parse an invalid JSON string (use try-catch)
// Then parse a valid one
// Print whether each succeeded or failed


// ============================================
// 3. JSON.parse() - String to Object
// ============================================

// CONCEPT: Convert JSON string (from API) into JavaScript object (you can use)
// WHY IT'S IMPORTANT: APIs send text, you need objects to work with
// REAL-WORLD USE: EVERY fetch() call, receiving API responses

// THE FLOW:
// 1. Server sends JSON string: '{"name":"John","age":30}'
// 2. You parse it: JSON.parse(jsonString)
// 3. Now you have a usable object: { name: "John", age: 30 }
// 4. Access properties: object.name → "John"

console.log("\n--- JSON.parse() ---");

// Convert JSON string to JavaScript object
const userData = '{"username":"john_doe","email":"john@example.com","age":28}';
const userObject = JSON.parse(userData);

console.log("Parsed object:", userObject);
console.log("Username:", userObject.username);
console.log("Type:", typeof userObject);

// WHAT JUST HAPPENED:
// 1. We had a JSON string (text): '{"username":"john_doe",...}'
// 2. JSON.parse() converted it to an actual JavaScript object
// 3. Now we can use dot notation: userObject.username

// WHY THIS MATTERS:
// When you call an API with fetch(), the response is TEXT (JSON string)
// You MUST parse it before you can use it:
// fetch('https://api.example.com/user')
//   .then(response => response.json())  ← This calls JSON.parse() internally
//   .then(data => console.log(data.username))  ← Now it's an object!

// Real-world example: API response
const apiResponse = `{
  "status": "success",
  "data": {
    "users": [
      {"id": 1, "name": "Alice"},
      {"id": 2, "name": "Bob"}
    ]
  }
}`;

const parsed = JSON.parse(apiResponse);
console.log("First user:", parsed.data.users[0].name);

// ============================================
// CHALLENGE 3: JSON.parse()
// ============================================
console.log("\n--- Challenge 3: JSON.parse() ---");
// TODO: Create a JSON string representing a product with: id, name, price, inStock
// Parse it and access each property
// Print all the values


// ============================================
// 4. JSON.stringify() - Object to String
// ============================================

// CONCEPT: Convert JavaScript object into JSON string (to send to server/save)
// WHY IT'S IMPORTANT: Can't send objects directly - must be text first
// REAL-WORLD USE: POST requests, saving to localStorage, sending data to APIs

// THE FLOW:
// 1. You have an object: { name: "John", age: 30 }
// 2. You stringify it: JSON.stringify(object)
// 3. Now you have JSON string: '{"name":"John","age":30}'
// 4. Send to server: fetch(url, { body: jsonString })

console.log("\n--- JSON.stringify() ---");

const product = {
  id: 123,
  name: "Laptop",
  price: 999.99,
  inStock: true,
  specs: {
    cpu: "Intel i7",
    ram: "16GB"
  }
};

// Convert to JSON string
const productJSON = JSON.stringify(product);
console.log("JSON string:", productJSON);
console.log("Type:", typeof productJSON);

// Pretty print with indentation (for debugging/display)
const prettyJSON = JSON.stringify(product, null, 2);
console.log("\nPretty JSON:\n", prettyJSON);

// THE THREE PARAMETERS:
// JSON.stringify(object, replacer, spaces)
//                  ↑         ↑        ↑
//               what to  filter    how many
//              convert  function   spaces to
//                       (or null)   indent

// COMMON USES:
// JSON.stringify(obj)          → Compact (for sending to server)
// JSON.stringify(obj, null, 2) → Pretty (for debugging/display)

// REAL-WORLD EXAMPLE:
// Sending data to API:
// fetch('https://api.example.com/users', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({ name: "John", email: "john@example.com" })
//            ↑
//     Convert object to JSON string before sending!
// })

// ============================================
// CHALLENGE 4: JSON.stringify()
// ============================================
console.log("\n--- Challenge 4: JSON.stringify() ---");
// TODO: Create a movie object with nested properties
// Stringify it with 2-space indentation
// Print the pretty formatted JSON


// ============================================
// 5. HANDLING NESTED DATA
// ============================================

console.log("\n--- Working with Nested JSON ---");

const blogPostJSON = `{
  "id": "post-123",
  "title": "Learning JavaScript",
  "author": {
    "name": "Jane Developer",
    "email": "jane@example.com",
    "social": {
      "twitter": "@jane_dev",
      "github": "janedev"
    }
  },
  "tags": ["javascript", "tutorial", "coding"],
  "comments": [
    {
      "user": "Alice",
      "text": "Great article!",
      "likes": 5
    },
    {
      "user": "Bob",
      "text": "Very helpful",
      "likes": 3
    }
  ]
}`;

const blogPost = JSON.parse(blogPostJSON);
console.log("Post title:", blogPost.title);
console.log("Author name:", blogPost.author.name);
console.log("Twitter handle:", blogPost.author.social.twitter);
console.log("First tag:", blogPost.tags[0]);
console.log("First comment:", blogPost.comments[0].text);

// ============================================
// CHALLENGE 5: Nested JSON
// ============================================
console.log("\n--- Challenge 5: Nested JSON ---");
// TODO: Parse the blogPostJSON above and:
// 1. Get the author's GitHub username
// 2. Get the total likes across all comments
// 3. Check if "tutorial" is in the tags array


// ============================================
// 6. ERROR HANDLING
// ============================================

// CONCEPT: JSON.parse() throws errors on invalid JSON
// WHY IT'S IMPORTANT: External data might be corrupted - your app shouldn't crash!
// REAL-WORLD USE: Always wrap JSON.parse() in try-catch for external data

// THE PROBLEM:
// API sends bad JSON → JSON.parse() throws error → your app crashes → users angry!

// THE SOLUTION:
// Always use try-catch when parsing external/user-provided JSON!

console.log("\n--- Error Handling ---");

// Invalid JSON will throw an error
const invalidJSON = '{name: "John"}';  // Missing quotes on key

try {
  const obj = JSON.parse(invalidJSON);
  console.log(obj);
} catch (error) {
  console.log("Error parsing JSON:", error.message);
}

// Always use try-catch when parsing external JSON
function safeJSONParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Failed to parse JSON:", error.message);
    return null;
  }
}

const result = safeJSONParse('{"valid": true}');
console.log("Safe parse result:", result);

// WHY THIS IS CRITICAL:
// Without try-catch:
// - Bad JSON from API → Your entire app crashes → Users see error page
// - User enters invalid JSON → App crashes → Bad user experience

// With try-catch:
// - Bad JSON → Caught gracefully → Show error message to user
// - App keeps running → Professional behavior

// RULE OF THUMB:
// - Parsing YOUR OWN data (you created it)? Try-catch optional
// - Parsing EXTERNAL data (API, user input, file)? ALWAYS use try-catch!

// ============================================
// CHALLENGE 6: Error Handling
// ============================================
console.log("\n--- Challenge 6: Error Handling ---");
// TODO: Write a function that safely parses JSON and returns a default object on error
// The default should be { error: true, message: "Invalid JSON" }
// Test with both valid and invalid JSON strings


// ============================================
// 7. FILTERING WHAT GETS STRINGIFIED
// ============================================

console.log("\n--- Selective Stringification ---");

const userWithPassword = {
  username: "alice",
  email: "alice@example.com",
  password: "secret123",  // Don't want to send this!
  age: 25,
  role: "admin"
};

// Method 1: Use replacer function
const safeJSON = JSON.stringify(userWithPassword, (key, value) => {
  if (key === "password") return undefined;  // Exclude password
  return value;
});
console.log("Without password:", safeJSON);

// Method 2: Specify which keys to include
const selectedJSON = JSON.stringify(
  userWithPassword,
  ["username", "email", "role"]
);
console.log("Selected fields:", selectedJSON);

// ============================================
// CHALLENGE 7: Filtering Properties
// ============================================
console.log("\n--- Challenge 7: Filtering ---");
// TODO: Create an object with sensitive data (password, ssn, etc.)
// Stringify it while excluding all sensitive fields
// Use the replacer function approach


// ============================================
// 8. DEEP COPYING WITH JSON
// ============================================

// CONCEPT: Use JSON to create true copies of nested objects
// WHY IT'S IMPORTANT: Prevents accidental mutations of original data
// REAL-WORLD USE: Redux (immutable state), duplicating complex data

// THE PROBLEM:
// Spread operator {...obj} only does SHALLOW copy
// Nested objects still reference the original!

// THE SOLUTION:
// JSON.parse(JSON.stringify(obj)) creates a DEEP copy
// Every nested object is truly independent

// WARNING: This method loses:
// - Functions (methods)
// - Dates (become strings)
// - undefined values
// - Symbols
// Use it only for plain data objects!

console.log("\n--- Deep Copying ---");

const original = {
  name: "Original",
  nested: {
    value: 100
  }
};

// Shallow copy (doesn't copy nested objects)
const shallowCopy = { ...original };
shallowCopy.nested.value = 200;
console.log("Original after shallow copy:", original.nested.value);  // 200 (changed!)

// Deep copy using JSON (common trick)
const original2 = {
  name: "Original",
  nested: {
    value: 100
  }
};

const deepCopy = JSON.parse(JSON.stringify(original2));
deepCopy.nested.value = 300;
console.log("Original after deep copy:", original2.nested.value);  // 100 (unchanged!)

// THE TRICK:
// JSON.stringify() → converts object to string
// JSON.parse() → converts string back to NEW object
// Result: Completely independent copy!

// WHEN TO USE THIS:
// - Redux (need immutable state updates)
// - Duplicating complex configuration objects
// - Creating independent copies of nested data

// WHEN NOT TO USE:
// - Objects with methods (functions won't survive)
// - Objects with Dates (they become strings)
// - Objects with special types (Maps, Sets, etc.)

// Warning: JSON deep copy limitations
const problematic = {
  date: new Date(),
  func: () => console.log("hello"),
  undef: undefined,
  symbol: Symbol("test")
};

console.log("Before stringify:", problematic);
const copied = JSON.parse(JSON.stringify(problematic));
console.log("After parse:", copied);
// Lost function, undefined, symbol; date became string

// ============================================
// CHALLENGE 8: Deep Copying
// ============================================
console.log("\n--- Challenge 8: Deep Copying ---");
// TODO: Create a nested object with at least 3 levels
// Make a deep copy using JSON methods
// Modify the copy and verify the original is unchanged


// ============================================
// 9. REAL-WORLD EXAMPLES
// ============================================

console.log("\n--- Real World Examples ---");

// Example 1: Local Storage (browser)
const saveToLocalStorage = (key, data) => {
  const jsonString = JSON.stringify(data);
  console.log(`Saving to localStorage: ${key}`);
  // In browser: localStorage.setItem(key, jsonString);
  return jsonString;
};

const loadFromLocalStorage = (key, jsonString) => {
  console.log(`Loading from localStorage: ${key}`);
  // In browser: const jsonString = localStorage.getItem(key);
  return JSON.parse(jsonString);
};

const settings = {
  theme: "dark",
  language: "en",
  notifications: true
};

const saved = saveToLocalStorage("settings", settings);
const loaded = loadFromLocalStorage("settings", saved);
console.log("Loaded settings:", loaded);

// THE FLOW IN A REAL APP:
// 1. User changes settings in your app
// 2. You stringify the settings object → JSON string
// 3. Save JSON string to localStorage
// 4. User closes browser and comes back later
// 5. Load JSON string from localStorage
// 6. Parse it back to object → User's settings restored!

// THIS IS HOW APPS REMEMBER YOUR PREFERENCES!

// Example 2: API Request
const makeAPIRequest = (endpoint, data) => {
  const jsonData = JSON.stringify(data);
  console.log(`POST ${endpoint}`);
  console.log("Request body:", jsonData);

  // In real code:
  // fetch(endpoint, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: jsonData
  // });
};

makeAPIRequest("/api/users", {
  name: "New User",
  email: "user@example.com",
  role: "member"
});

// REAL fetch() EXAMPLE:
// fetch('https://api.example.com/users', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     name: "New User",
//     email: "user@example.com"
//   })
// })
// .then(response => response.json())  ← Parse response JSON
// .then(data => console.log(data))
//
// THE PATTERN:
// Sending: Object → JSON.stringify() → Send to server
// Receiving: Get from server → JSON.parse() → Object

// Example 3: API Response
const handleAPIResponse = (responseText) => {
  try {
    const data = JSON.parse(responseText);

    if (data.status === "success") {
      console.log("Success:", data.message);
      return data.data;
    } else {
      console.error("Error:", data.error);
      return null;
    }
  } catch (error) {
    console.error("Invalid JSON response:", error.message);
    return null;
  }
};

const response1 = '{"status":"success","data":{"id":123},"message":"User created"}';
const response2 = '{"status":"error","error":"User already exists"}';

handleAPIResponse(response1);
handleAPIResponse(response2);

// ============================================
// CHALLENGE 9: Real-World Application
// ============================================
console.log("\n--- Challenge 9: Real-World ---");
// TODO: Simulate saving and loading user preferences
// Create a preferences object with: theme, fontSize, language, notifications
// "Save" it by converting to JSON
// "Load" it by parsing the JSON
// Verify all data is preserved


// ============================================
// COMMON PITFALLS
// ============================================

console.log("\n--- Common Pitfalls ---");

// 1. Forgetting to parse
const wrongWay = '{"value": 42}';
// console.log(wrongWay.value);  // undefined! It's a string!

const rightWay = JSON.parse('{"value": 42}');
console.log(rightWay.value);  // 42

// 2. Circular references
const circular = { name: "Test" };
circular.self = circular;  // Points to itself

try {
  JSON.stringify(circular);  // Error!
} catch (error) {
  console.log("Can't stringify circular reference:", error.message);
}

// 3. Not handling parse errors
// Always use try-catch for external data!

// ============================================
// FINAL CHALLENGE: Complete JSON Workflow
// ============================================
console.log("\n--- FINAL CHALLENGE ---");
// TODO: Create a complete workflow:
// 1. Create a shopping cart object with items array (each item has: name, price, quantity)
// 2. Add a method to calculate total (this won't survive JSON conversion!)
// 3. Stringify the cart to "save" it
// 4. Parse it back to "load" it
// 5. Notice the method is gone - recreate the calculation without the method
// 6. Create a safe parse function that validates the cart has required properties
// 7. Test the entire workflow with console.logs at each step

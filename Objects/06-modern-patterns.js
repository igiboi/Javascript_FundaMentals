// ============================================
// MODERN OBJECT PATTERNS - ES6+
// ============================================

// Note: This file is meant to be run independently
// Variables here won't conflict with other tutorial files when running separately

// ============================================
// WHY THESE PATTERNS MATTER - THE BIGGER PICTURE
// ============================================

// These are MODERN JavaScript patterns introduced in ES6 (2015)
// You'll see them in EVERY professional codebase!

// THE THREE PATTERNS YOU MUST KNOW:
// 1. Property Shorthand → Cleaner object creation
// 2. Computed Property Names → Dynamic object keys
// 3. Arrays of Objects → The data structure you'll use most

// WHY LEARN THESE NOW?
// - Property shorthand: Used in React, APIs, every modern codebase
// - Computed properties: Essential for dynamic forms, mapping data
// - Arrays of objects: Bridges to array methods (your next topic!)

// These patterns make your code:
// ✅ More concise
// ✅ More readable
// ✅ More professional
// ✅ Match modern standards

// ============================================
// 1. PROPERTY SHORTHAND
// ============================================

// CONCEPT: When variable name = property name, use shorthand
// WHY IT'S IMPORTANT: Makes code cleaner, less repetitive
// REAL-WORLD USE: Creating objects from variables (everywhere!)

console.log("--- Property Shorthand ---");

// THE OLD WAY (verbose and repetitive):
const name = "John";
const age = 30;
const email = "john@example.com";

const userOld = {
  name: name,      // property: variable (same name - redundant!)
  age: age,        // property: variable (same name - redundant!)
  email: email     // property: variable (same name - redundant!)
};

console.log("Old way:", userOld);

// THE MODERN WAY (clean and concise):
const userName = "Jane";
const userAge = 25;
const userEmail = "jane@example.com";

const user = {
  name: userName,     // Different names - write it out
  age: userAge,       // Different names - write it out
  email: userEmail    // Different names - write it out
};

// But when names match:
const firstName = "Bob";
const lastName = "Smith";
const city = "NYC";

const person = {
  firstName,    // Same as firstName: firstName
  lastName,     // Same as lastName: lastName
  city          // Same as city: city
};

console.log("Modern way:", person);

// HOW IT WORKS:
// JavaScript sees 'firstName' without a colon
// It creates a property named 'firstName' with the value of the firstName variable
// firstName → { firstName: firstName }

// REAL-WORLD EXAMPLE 1: Creating objects from form data
const title = "Inception";
const director = "Christopher Nolan";
const year = 2010;
const rating = 8.8;

const movie = { title, director, year, rating };
console.log("Movie:", movie);

// REAL-WORLD EXAMPLE 2: API request body
const username = "johndoe";
const password = "secret123";

// Sending to server:
const loginData = { username, password };
console.log("Login data:", loginData);
// fetch('/api/login', {
//   method: 'POST',
//   body: JSON.stringify({ username, password })  ← Shorthand!
// });

// YOU CAN MIX SHORTHAND AND REGULAR:
const productName = "Laptop";
const price = 999;

const product = {
  name: productName,  // Different name - write it out
  price,              // Same name - shorthand!
  inStock: true,      // Regular property
  discount: 0.1       // Regular property
};

console.log("Product:", product);

// ============================================
// CHALLENGE 1: Property Shorthand
// ============================================
console.log("\n--- Challenge 1: Property Shorthand ---");
// TODO: Create variables for a book: title, author, year, pages
// Create a book object using property shorthand
// Print the book object


// ============================================
// 2. COMPUTED PROPERTY NAMES
// ============================================

// CONCEPT: Use a variable's VALUE as a property name (dynamic keys)
// WHY IT'S IMPORTANT: Essential for dynamic forms, mapping data from one format to another
// REAL-WORLD USE: Form handling, data transformation, dynamic object creation

console.log("\n--- Computed Property Names ---");

// THE PROBLEM:
// Sometimes you don't know the property name until runtime
// Example: User selects which field to update

// OLD WAY: Create object, then add property
const fieldName = "email";
const fieldValue = "user@example.com";

const userData = {};
userData[fieldName] = fieldValue;  // Add property after creation
console.log("Old way:", userData);  // { email: "user@example.com" }

// MODERN WAY: Use computed property name in object literal
const field = "username";
const value = "john_doe";

const userInfo = {
  [field]: value  // Use the VALUE of 'field' as the property name
};

console.log("Modern way:", userInfo);  // { username: "john_doe" }

// THE SYNTAX:
// [variableName]: value
//  ↑
// Square brackets mean "use the value of this variable as the property name"

// VISUAL BREAKDOWN:
const key1 = "firstName";
const key2 = "lastName";

const data = {
  [key1]: "Alice",    // key1 = "firstName", so property is firstName
  [key2]: "Johnson"   // key2 = "lastName", so property is lastName
};

console.log("Data:", data);  // { firstName: "Alice", lastName: "Johnson" }

// REAL-WORLD EXAMPLE 1: Form field updates
function updateField(fieldName, newValue) {
  return {
    [fieldName]: newValue  // Dynamic property name!
  };
}

console.log(updateField("email", "new@example.com"));
// { email: "new@example.com" }

console.log(updateField("age", 30));
// { age: 30 }

// REAL-WORLD EXAMPLE 2: API response mapping
// Convert API field names to your app's format
const apiFieldName = "user_email";
const appFieldName = "email";

const mappedData = {
  [appFieldName]: "user@example.com"  // Creates { email: "user@example.com" }
};

// REAL-WORLD EXAMPLE 3: Building objects from arrays
const keys = ["name", "age", "city"];
const values = ["John", 25, "NYC"];

// Create object from parallel arrays
const combined = {
  [keys[0]]: values[0],  // name: "John"
  [keys[1]]: values[1],  // age: 25
  [keys[2]]: values[2]   // city: "NYC"
};

console.log("Combined:", combined);

// YOU CAN USE EXPRESSIONS:
const prefix = "user";
const suffix = "Name";

const obj = {
  [prefix + suffix]: "Alice"  // Concatenate to create "userName"
};

console.log("Expression:", obj);  // { userName: "Alice" }

// COMBINING WITH PROPERTY SHORTHAND:
const id = 123;
const status = "active";
const dynamicKey = "role";
const role = "admin";

const fullUser = {
  id,              // Shorthand
  status,          // Shorthand
  [dynamicKey]: role  // Computed property
};

console.log("Full user:", fullUser);
// { id: 123, status: "active", role: "admin" }

// ============================================
// CHALLENGE 2: Computed Property Names
// ============================================
console.log("\n--- Challenge 2: Computed Properties ---");
// TODO: Create a function that takes two parameters: propertyName and propertyValue
// Return an object with that property
// Test it with different property names
// Example: createDynamicObject("color", "blue") → { color: "blue" }


// ============================================
// 3. ARRAYS OF OBJECTS - THE MOST IMPORTANT!
// ============================================

// CONCEPT: Arrays where each element is an object
// WHY IT'S IMPORTANT: This is what 90% of API data looks like!
// REAL-WORLD USE: User lists, product catalogs, orders, posts, comments, EVERYTHING

console.log("\n--- Arrays of Objects ---");

// THIS IS THE DATA STRUCTURE YOU'LL WORK WITH MOST:
const users = [
  { id: 1, name: "John", age: 25, active: true },
  { id: 2, name: "Jane", age: 30, active: false },
  { id: 3, name: "Bob", age: 35, active: true }
];

console.log("Users:", users);

// WHY ARRAYS OF OBJECTS?
// - Each item has the SAME STRUCTURE (same properties)
// - But DIFFERENT VALUES
// - Perfect for lists of similar things (users, products, orders)

// ACCESSING DATA:
console.log("\nAccessing data:");
console.log("First user:", users[0]);           // { id: 1, name: "John", ... }
console.log("First user's name:", users[0].name);  // "John"
console.log("Second user's age:", users[1].age);   // 30

// THINK OF IT LIKE A TABLE:
// | id | name  | age | active |
// |----|-------|-----|--------|
// | 1  | John  | 25  | true   |
// | 2  | Jane  | 30  | false  |
// | 3  | Bob   | 35  | true   |

// Each row = one object in the array

// LOOPING THROUGH ARRAYS OF OBJECTS:
console.log("\nLooping through users:");

// Method 1: forEach (most common)
users.forEach(user => {
  console.log(`${user.name} is ${user.age} years old`);
});

// Method 2: for...of (also good)
console.log("\nUsing for...of:");
for (const user of users) {
  console.log(`ID: ${user.id}, Name: ${user.name}`);
}

// Method 3: Traditional for loop (when you need index)
console.log("\nWith index:");
for (let i = 0; i < users.length; i++) {
  console.log(`User ${i + 1}: ${users[i].name}`);
}

// REAL-WORLD EXAMPLE 1: Products from an API
const products = [
  { id: 101, name: "Laptop", price: 999, category: "Electronics" },
  { id: 102, name: "Mouse", price: 25, category: "Accessories" },
  { id: 103, name: "Keyboard", price: 75, category: "Accessories" },
  { id: 104, name: "Monitor", price: 350, category: "Electronics" }
];

console.log("\nProduct catalog:");
products.forEach(product => {
  console.log(`${product.name} - $${product.price}`);
});

// REAL-WORLD EXAMPLE 2: Shopping cart items
const cart = [
  { productId: 101, name: "Laptop", quantity: 1, price: 999 },
  { productId: 102, name: "Mouse", quantity: 2, price: 25 }
];

// Calculate total
let total = 0;
cart.forEach(item => {
  total += item.price * item.quantity;
});

console.log("\nCart total:", total);  // 1049

// REAL-WORLD EXAMPLE 3: Blog posts
const posts = [
  {
    id: 1,
    title: "Learning JavaScript",
    author: "John",
    likes: 42,
    comments: ["Great!", "Very helpful"]
  },
  {
    id: 2,
    title: "Understanding Objects",
    author: "Jane",
    likes: 38,
    comments: ["Thanks!", "Clear explanation"]
  }
];

console.log("\nBlog posts:");
posts.forEach(post => {
  console.log(`"${post.title}" by ${post.author} - ${post.likes} likes`);
});

// FINDING ITEMS (preview of array methods):
console.log("\nFinding items:");

// Find user with id 2
const foundUser = users.find(user => user.id === 2);
console.log("Found user:", foundUser);

// Find product by name
const foundProduct = products.find(p => p.name === "Mouse");
console.log("Found product:", foundProduct);

// COMMON OPERATIONS YOU'LL DO:
// 1. Display all items (loop and show)
// 2. Find specific item (by id, name, etc.)
// 3. Filter items (show only active users, electronics, etc.)
// 4. Calculate totals (sum prices, count items, etc.)
// 5. Transform data (extract just names, format for display, etc.)

// CREATING ARRAYS OF OBJECTS:
const students = [
  { name: "Alice", grade: 95 },
  { name: "Bob", grade: 87 },
  { name: "Charlie", grade: 92 }
];

// Add a new student
students.push({ name: "David", grade: 88 });
console.log("\nAfter adding David:", students);

// NESTED ARRAYS OF OBJECTS (common in real APIs):
const orders = [
  {
    orderId: "ORD001",
    customer: "John",
    items: [
      { name: "Laptop", price: 999, quantity: 1 },
      { name: "Mouse", price: 25, quantity: 2 }
    ]
  },
  {
    orderId: "ORD002",
    customer: "Jane",
    items: [
      { name: "Keyboard", price: 75, quantity: 1 }
    ]
  }
];

console.log("\nOrders:");
orders.forEach(order => {
  console.log(`Order ${order.orderId} by ${order.customer}:`);
  order.items.forEach(item => {
    console.log(`  - ${item.name} x${item.quantity} = $${item.price * item.quantity}`);
  });
});

// ============================================
// CHALLENGE 3: Arrays of Objects
// ============================================
console.log("\n--- Challenge 3: Arrays of Objects ---");
// TODO: Create an array of at least 4 movies
// Each movie should have: title, director, year, rating
// Loop through and print each movie in this format:
// "Inception (2010) directed by Christopher Nolan - Rating: 8.8"


// ============================================
// 4. COMBINING ALL PATTERNS
// ============================================

console.log("\n--- Combining Modern Patterns ---");

// REAL-WORLD SCENARIO: Form submission
function createUser(firstName, lastName, email, role = "user") {
  // Using property shorthand
  return {
    firstName,
    lastName,
    email,
    role,
    createdAt: new Date().toISOString()
  };
}

const newUser1 = createUser("Alice", "Johnson", "alice@example.com");
const newUser2 = createUser("Bob", "Smith", "bob@example.com", "admin");

console.log("New user 1:", newUser1);
console.log("New user 2:", newUser2);

// REAL-WORLD SCENARIO: Dynamic form updates
function updateUserField(user, fieldName, newValue) {
  // Using computed property names + spread operator
  return {
    ...user,              // Copy all existing properties
    [fieldName]: newValue  // Update the dynamic field
  };
}

const currentUser = { name: "John", email: "john@example.com", age: 30 };
const updatedUser = updateUserField(currentUser, "email", "newemail@example.com");

console.log("Original:", currentUser);
console.log("Updated:", updatedUser);

// REAL-WORLD SCENARIO: Building data from arrays
const formFields = ["username", "password", "remember"];
const formValues = ["john_doe", "secret123", true];

const formData = {};
formFields.forEach((field, index) => {
  formData[field] = formValues[index];
});

console.log("Form data:", formData);

// Or using computed properties in a loop:
const betterFormData = formFields.reduce((obj, field, index) => {
  return {
    ...obj,
    [field]: formValues[index]
  };
}, {});

console.log("Better form data:", betterFormData);

// ============================================
// CHALLENGE 4: Combining Patterns
// ============================================
console.log("\n--- Challenge 4: Combining Patterns ---");
// TODO: Create a function called 'buildUserProfile' that takes:
//   - firstName, lastName, email (parameters)
//   - An object with optional fields (like { age: 25, city: "NYC" })
//   - A fieldName and fieldValue for a dynamic property
// Return an object combining all of these using:
//   - Property shorthand for firstName, lastName, email
//   - Spread operator for optional fields
//   - Computed property for the dynamic field
// Test with: buildUserProfile("John", "Doe", "john@example.com",
//                              { age: 30, city: "NYC" },
//                              "role", "admin")


// ============================================
// REAL-WORLD EXAMPLE: Todo List Manager
// ============================================

console.log("\n--- Real World: Todo List ---");

// Array of objects with modern patterns
const todoList = [];
let nextId = 1;

// Add todo (using property shorthand)
function addTodo(text, priority = "medium") {
  const todo = {
    id: nextId++,
    text,           // Shorthand
    priority,       // Shorthand
    completed: false,
    createdAt: new Date().toISOString()
  };

  todoList.push(todo);
  return todo;
}

// Update todo (using computed property)
function updateTodo(id, fieldName, newValue) {
  const todo = todoList.find(t => t.id === id);
  if (todo) {
    todo[fieldName] = newValue;  // Computed property access
  }
  return todo;
}

// Test the todo list
addTodo("Learn Objects", "high");
addTodo("Learn Arrays", "high");
addTodo("Build Project", "medium");

console.log("All todos:");
todoList.forEach(todo => {
  const status = todo.completed ? "✓" : "○";
  console.log(`${status} [${todo.priority}] ${todo.text}`);
});

updateTodo(1, "completed", true);

console.log("\nAfter completing first todo:");
todoList.forEach(todo => {
  const status = todo.completed ? "✓" : "○";
  console.log(`${status} [${todo.priority}] ${todo.text}`);
});

// ============================================
// FINAL CHALLENGE: Product Inventory System
// ============================================

console.log("\n--- FINAL CHALLENGE ---");
// TODO: Create a product inventory system with these features:
//
// 1. Create an array to store products
// 2. Create a function 'addProduct' that takes (name, price, category, stock)
//    - Use property shorthand
//    - Generate a unique id
//    - Add to the products array
//
// 3. Create a function 'updateProduct' that takes (id, fieldName, newValue)
//    - Use computed property to update the field dynamically
//
// 4. Create a function 'getProductsByCategory' that takes (category)
//    - Return array of products matching that category
//
// 5. Create a function 'getTotalValue'
//    - Calculate total value of inventory (price * stock for all products)
//
// 6. Test it:
//    - Add 5 products in different categories
//    - Update one product's stock
//    - Get all products in a specific category
//    - Calculate total inventory value
//    - Print results


// ============================================
// KEY TAKEAWAYS
// ============================================

console.log("\n--- KEY TAKEAWAYS ---");

// 1. PROPERTY SHORTHAND
console.log("1. Property Shorthand:");
const x = 10, y = 20;
const point = { x, y };  // Instead of { x: x, y: y }
console.log("   ", point);

// 2. COMPUTED PROPERTY NAMES
console.log("2. Computed Properties:");
const dynamicField = "color";
const obj1 = { [dynamicField]: "blue" };  // Property name from variable
console.log("   ", obj1);

// 3. ARRAYS OF OBJECTS
console.log("3. Arrays of Objects:");
const items = [
  { name: "Item 1", value: 10 },
  { name: "Item 2", value: 20 }
];
console.log("   ", items);

console.log("\n✅ You now know all the modern object patterns!");
console.log("✅ You're ready to move to Array Methods!");
console.log("✅ Arrays + Objects = Most of JavaScript development!");

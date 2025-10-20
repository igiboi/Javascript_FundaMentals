// ============================================
// JAVASCRIPT OBJECTS - THE BASICS
// ============================================

// Note: This file is meant to be run independently
// Variables here won't conflict with other tutorial files when running separately

// What are objects?
// Objects store related data and functionality together using key-value pairs
// Think of them as containers that group related information

// ============================================
// 1. CREATING OBJECTS
// ============================================

// Method 1: Object literal (most common)
const person = {
  name: "Luigi",
  age: 25,
  city: "New York"
};

// Method 2: Using new Object() (rarely used)
const car = new Object();
car.brand = "Toyota";
car.model = "Camry";

// Method 3: Empty object, add properties later
const emptyObject = {};

console.log("Person:", person);
console.log("Car:", car);

// ============================================
// CHALLENGE 1: Creating Objects
// ============================================
console.log("\n--- Challenge 1: Creating Objects ---");
// TODO: Create a 'movie' object with properties: title, director, year, rating
// Create it using the object literal syntax (most common way)


// ============================================
// 2. ACCESSING PROPERTIES
// ============================================

// Dot notation (use when you know the property name)
console.log("\n--- Dot Notation ---");
console.log(person.name);  // "Luigi"
console.log(person.age);   // 25

// Bracket notation (use for dynamic access or special characters)
console.log("\n--- Bracket Notation ---");
console.log(person["name"]);  // "Luigi"
console.log(person["city"]);  // "New York"

// When to use bracket notation:
const propertyName = "age";
console.log(person[propertyName]);  // 25 (using a variable)

const user = {
  "first-name": "John",  // has a hyphen
  "email address": "john@email.com"  // has a space
};
console.log(user["first-name"]);  // Must use brackets!
// console.log(user.first-name);  // This would cause an error

// ============================================
// CHALLENGE 2: Accessing Properties
// ============================================
console.log("\n--- Challenge 2: Accessing Properties ---");
// TODO: Create an object with at least one property that has spaces or hyphens in the key
// Access that property using bracket notation
// Then create a variable with a property name and use it to access another property


// ============================================
// 3. MODIFYING PROPERTIES
// ============================================

console.log("\n--- Modifying Properties ---");

// Update existing property
person.age = 26;
console.log("Updated age:", person.age);

// Add new property
person.country = "USA";
console.log("Added country:", person.country);

// Delete property
delete person.city;
console.log("After deleting city:", person);

// ============================================
// CHALLENGE 3: Modifying Properties
// ============================================
console.log("\n--- Challenge 3: Modifying Properties ---");
// TODO: Create a product object with: name, price, inStock
// Update the price
// Add a new property: category
// Delete the inStock property
// Print the object after each change


// ============================================
// 4. CHECKING IF PROPERTY EXISTS
// ============================================

console.log("\n--- Checking Properties ---");

// Method 1: Using 'in' operator
console.log("name" in person);      // true
console.log("city" in person);      // false (we deleted it)

// Method 2: Using hasOwnProperty
console.log(person.hasOwnProperty("name"));  // true
console.log(person.hasOwnProperty("city"));  // false

// Method 3: Check if undefined
console.log(person.country !== undefined);  // true
console.log(person.city !== undefined);     // false

// ============================================
// CHALLENGE 4: Checking Properties
// ============================================
console.log("\n--- Challenge 4: Checking Properties ---");
// TODO: Create a config object with some properties
// Write code to check if 'theme' property exists
// Try all three methods: 'in' operator, hasOwnProperty(), and !== undefined


// ============================================
// 5. METHODS (Functions in Objects)
// ============================================

console.log("\n--- Object Methods ---");

const calculator = {
  brand: "Casio",
  add: function(a, b) {
    return a + b;
  },
  // Shorthand syntax (modern way)
  multiply(a, b) {
    return a * b;
  }
};

console.log("5 + 3 =", calculator.add(5, 3));
console.log("5 * 3 =", calculator.multiply(5, 3));

// ============================================
// CHALLENGE 5: Object Methods
// ============================================
console.log("\n--- Challenge 5: Object Methods ---");
// TODO: Create a 'rectangle' object with properties: width, height
// Add a method 'getArea' that returns width * height
// Add a method 'getPerimeter' that returns 2 * (width + height)
// Test both methods


// ============================================
// 6. THE 'this' KEYWORD (IMPORTANT!)
// ============================================

console.log("\n--- The 'this' Keyword ---");

const student = {
  firstName: "Maria",
  lastName: "Garcia",
  grade: 95,

  // 'this' refers to the student object
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  },

  getInfo() {
    return `${this.firstName} ${this.lastName} scored ${this.grade}%`;
  }
};

console.log(student.getFullName());  // "Maria Garcia"
console.log(student.getInfo());      // "Maria Garcia scored 95%"

// ============================================
// CHALLENGE 6: The 'this' Keyword
// ============================================
console.log("\n--- Challenge 6: The 'this' Keyword ---");
// TODO: Create a 'bankAccount' object with: owner, balance
// Add a method 'deposit(amount)' that adds to the balance and returns new balance
// Add a method 'withdraw(amount)' that subtracts from balance and returns new balance
// Add a method 'getInfo()' that returns a string like: "Account owner: John, Balance: $500"
// Test all methods


// ============================================
// REAL-WORLD EXAMPLE: User Profile
// ============================================

const userProfile = {
  username: "luigi_dev",
  email: "luigi@example.com",
  isVerified: true,
  posts: 142,
  followers: 1523,

  getDisplayName() {
    return `@${this.username}`;
  },

  canPost() {
    return this.isVerified && this.posts < 10000;
  }
};

console.log("\n--- Real World Example ---");
console.log("Display name:", userProfile.getDisplayName());
console.log("Can post:", userProfile.canPost());
console.log("Profile:", userProfile);

// ============================================
// FINAL CHALLENGE: Build a Complete Object
// ============================================
console.log("\n--- FINAL CHALLENGE ---");
// TODO: Create a 'library' object that represents a book library
// Properties: name, location, books (number), isOpen (boolean)
// Methods:
//   - getInfo() - returns a string with library name and location
//   - addBooks(number) - adds to the books count
//   - removeBooks(number) - subtracts from books count
//   - toggleOpen() - switches isOpen between true and false
// Test all the methods to make sure they work!

/*
  Object Access Drills
  ---------------------
  Practice accessing object properties using dot notation,
  bracket notation, and variables.

  Complete each exercise without skipping — these build on each other.
*/

const user = {
  id: 1,
  name: "Alice",
  age: 28,
  role: "Engineer"
};

// ---- DRILL 1: Dot notation ----
// Access the name property using dot notation
const name1 = user.name;

// Access the role property using dot notation
const role1 = user.role;

console.log(name1); // expected: "Alice"
console.log(role1); // expected: "Engineer"


// ---- DRILL 2: Bracket notation with a string ----
// Access the name property using bracket notation
const name2 = user["name"];

// Access the age property using bracket notation
const age2 = user["age"];

console.log(name2); // expected: "Alice"
console.log(age2);  // expected: 28


// ---- DRILL 3: Bracket notation with a variable ----
const key1 = "name";
const key2 = "age";

// Access the property that key1 points to
const name3 = user[key1]// your code here

// Access the property that key2 points to
const age3 = user[key2]// your code here

console.log(name3); // expected: "Alice"
console.log(age3);  // expected: 28


// ---- DRILL 4: Dynamic access inside a function ----
// Write a function called getProp that takes an object and a key,
// and returns the value at that key
function getProp(obj, key) {
  // your code here
  return obj[key];
}

console.log(getProp(user, "name")); // expected: "Alice"
console.log(getProp(user, "role")); // expected: "Engineer"
console.log(getProp(user, "age"));  // expected: 28


// ---- DRILL 5: Access inside a loop ----
const keys = ["id", "name", "age", "role"];

// Loop through the keys array and log the value of each key on the user object
for (const key of keys) {
  // your code here — one line
  
}

// expected output:
// 1
// Alice
// 28
// Engineer

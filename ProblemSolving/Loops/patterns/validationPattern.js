/*
Problem: Check if ALL objects in an array have a specific property

examples:

hasProperty([
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
], "age")
// returns: true (all objects have "age" property)

hasProperty([
  { name: "Alice", age: 25 },
  { name: "Bob" },
  { name: "Charlie", age: 35 }
], "age")
// returns: false (Bob doesn't have "age" property)

hasProperty([
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@example.com" }
], "email")
// returns: true

hasProperty([], "name")
// returns: true (empty array - all zero items have the property!)

hasProperty([
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" }
], "author")
// returns: false


TRACE by hand:

This is a VALIDATION pattern - we need to check if ALL items meet a condition

VALIDATION Pattern (check if ALL meet condition):
function validateAll(items, condition) {
  for (let item of items) {
    if (!condition(item)) {
      return false;  // Found one that doesn't meet condition!
    }
  }
  return true;  // All items passed the check
}

For this problem:
- Loop through each object
- Check if the object has the property (use the "in" operator or hasOwnProperty)
- If ANY object is missing the property, return false immediately
- If we finish the loop, all objects have it, return true

*/

function hasProperty(objects, propertyName) {
  for (let object of objects) {
    if (!object.hasOwnProperty(propertyName)) {
      return false;
    }
  }
  return true;
}

// Test cases
console.log("Test 1:", hasProperty([
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
], "age"));
// Expected: true

console.log("Test 2:", hasProperty([
  { name: "Alice", age: 25 },
  { name: "Bob" },
  { name: "Charlie", age: 35 }
], "age"));
// Expected: false

console.log("Test 3:", hasProperty([
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@example.com" }
], "email"));
// Expected: true

console.log("Test 4:", hasProperty([], "name"));
// Expected: true

console.log("Test 5:", hasProperty([
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" }
], "author"));
// Expected: false
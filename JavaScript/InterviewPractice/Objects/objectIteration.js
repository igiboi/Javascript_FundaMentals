/*
  Object Iteration Drills
  ------------------------
const user = {
  id: 1,
  name: "Alice",
  age: 28,
  role: "Engineer"
};

Object.keys(user)    // ["id", "name", "age"]
Object.values(user)  // [1, "Alice", 28]
Object.entries(user) // [["id", 1], ["name", "Alice"], ["age", 28]]

  Practice looping over objects using Object.keys(),
  Object.values(), and Object.entries().
*/

const product = {
  name: "Laptop",
  category: "Electronics",
  price: 999,
  inStock: true
};

// ---- DRILL 1: Object.keys() ----
// Log each key of the product object
// Step 1: call Object.keys(product) and store it in a variable called keys
// Step 2: loop over keys with for...of and log each key
const keys = Object.keys(product);

for (const key of keys) {
  console.log(key);
}

// your code here

// expected output: name, category, price, inStock


// ---- DRILL 2: Object.values() ----
// Log each value of the product object
// Step 1: call Object.values(product) and store it in a variable called values
// Step 2: loop over values with for...of and log each value

// your code here
const values = Object.values(product);

for (const value of values) {
  console.log('value', value);
}

// expected output: "Laptop", "Electronics", 999, true


// ---- DRILL 3: Object.entries() ----
// Log each key AND value on the same line like: "name: Laptop"
// Step 1: call Object.entries(product) and store it in a variable called entries
// Step 2: loop over entries — each entry is [key, value] as a two-element array
// Step 3: access entry[0] for the key and entry[1] for the value

// your code here

// expected output:
// name: Laptop
// category: Electronics
// price: 999
// inStock: true

const product = {
  name: "Laptop",
  category: "Electronics",
  price: 999,
  inStock: true,
};

const entries = Object.entries(product);

// for (const entry of entries) {
//   console.log(`${entry[0]}: ${entry[1]}`);

// }


// ---- DRILL 4: Object.entries() with destructuring ----
// Same as drill 3 but instead of entry[0] and entry[1],
// destructure directly in the for...of like: for (const [key, value] of ...)

// your code here
for (const [key, value] of entries) {
  console.log(`${key}: ${value}`);
}

// expected output: same as drill 3


// ---- DRILL 5: Build a new object from an existing one ----

const product = {
  name: "Laptop",
  category: "Electronics",
  price: 999,
  inStock: true,
};
// Using Object.entries(), create a new object called stringified
// where every value is converted to a string using String()
// Hint: loop over entries, and for each pair assign stringified[key] = String(value)

// your code here
const stringified = {};

const entries = Object.entries(product);

for (const [key, value] of entries) {
  stringified[key] = String(value);
}

console.log(stringified);
// expected: { name: "Laptop", category: "Electronics", price: "999", inStock: "true" }

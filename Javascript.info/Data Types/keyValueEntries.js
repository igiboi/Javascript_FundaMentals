// Object.keys, values, entries
// For plain objects, the following methods are available:

// Object.keys(obj) – returns an array of keys.
// Object.values(obj) – returns an array of values.
// Object.entries(obj) – returns an array of [key, value] pairs.

// 🧪 Practice 1: Object.keys
//  Write a function that takes an object and returns the number of keys it has.
function countKeys(obj) {
    return Object.keys(obj).length;
}

console.log(countKeys({ a: 1, b: 2, c: 3 })); // 3

// 🧪 Practice 2: Object.values
// Write a function that takes an object and returns the sum of all its numeric values.
function sumValues(obj) {
    return Object.values(obj).reduce((sum, value) => sum + value, 0);
  }
  
  // Test
  console.log(sumValues({ apples: 5, oranges: 10, bananas: 2 })); // 17
  

// 🧪 Practice 3: Object.entries
// Write a function that takes an object and logs each key-value pair in the format: "key: value".
  function logEntries(obj) {
    for (const [key, value] of Object.entries(obj)) {
      console.log(`${key}: ${value}`);
    }
  }
  
  // Test
  logEntries({ name: 'Luigi', age: 30 });
  // name: Luigi
  // age: 30
  

//   Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.
// If salaries is empty, then the result must be 0.

function sumSalaries(salaries) {
    let sum = 0;
    const entries = Object.values(salaries);
  for (let salary of entries) {
    sum += salary;
  }

  return sum; // 650
}

let salaries = {
  'John': 100,
  'Pete': 300,
  'Mary': 250,
};

console.log(sumSalaries(salaries)); // 650

function filterHighScores(scores) {
    const filteredEntries = Object.entries(scores)
      .filter(([key, value]) => value >= 80); // only keep high scores
  
    return Object.fromEntries(filteredEntries); // convert back to object
  }
  
  console.log(filterHighScores({ Alice: 95, Bob: 75, Charlie: 85 }));
// Output: { Alice: 95, Charlie: 85 }
  
function filterAdults(obj) {
  const filteredEntries = Object.entries(obj).filter(([_, age]) => age >= 18);
  return Object.fromEntries(filteredEntries);
}

function flip(obj) {
  const flippedEntries = Object.entries(obj).map(([key, value]) => [
    value,
    key,
  ]);

  return Object.fromEntries(flippedEntries);
}

// Test
console.log(flip({ a: 1, b: 2 }));
// // { 1: 'a', 2: 'b' }

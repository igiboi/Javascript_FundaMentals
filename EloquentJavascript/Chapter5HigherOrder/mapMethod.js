// sample data: an array of script‐style objects
const scripts = [
  { name: 'Adlam', living: true, year: 1980 },
  { name: 'Old Italic', living: false, year: -700 },
  { name: 'Cyrillic', living: true, year: 900 },
  { name: 'Egyptian', living: false, year: -3200 },
];

function map(array, transform) {
  let mapped = []; // 1. Start with empty result
  for (let element of array) {
    // 2. For each element in the input…
    // 3. Call transform on it, then push the returned value
    mapped.push(transform(element));
  }
  return mapped; // 4. Return the new array
}

// EXAMPLE 1: get an array of names
const names = map(scripts, s => s.name);
console.log(names); // [ 'Adlam', 'Old Italic', 'Cyrillic', 'Egyptian' ]

// EXAMPLE 2: format each as "Name (year)"
const labels = map(scripts, (s) => `${s.name} (${s.year})`);
console.log(labels);

// EXAMPLE 3: get only the launch years as numbers
const years = map(scripts, s => s.year);
console.log(years); // [ 1980, -700, 900, -3200 ]

// EXAMPLE 4: make an array of "living?" booleans
const living = map(scripts, s => s.living);
console.log(living); // [ true, false, true, false ]

// Combine with filter to only get living 
const livingNames = map(scripts.filter(s => s.living), s => s.name);
console.log(livingNames);

//  Exercise 1: Double every number
// const nums = [2, 4, 6, 8];
// const double = nums.map(n => n * 2);

// console.log(double);

//  Exercise 2: Convert to strings
const nums = [1, 2, 3];

const string = nums.map(n => n + '');

console.log(string); // [ '1', '2', '3' ]

// Exercise 3: Add “Hello” to each name
const namesHello = ['Alice', 'Bob', 'Charlie'];

const hello = namesHello.map(n => 'Hello ' + n);

console.log(hello);

// Exercise 4: Get name from array of objects
const users = [
  { name: 'Luigi', age: 29 },
  { name: 'Peach', age: 25 },
];

const fetchName = users.map((user) => user.name);

console.log(fetchName);

// Exercise 5: Return lengths of words
const words = ['apple', 'banana', 'kiwi'];

const wordLengths = words.map(word => word.length);

console.log(wordLengths);
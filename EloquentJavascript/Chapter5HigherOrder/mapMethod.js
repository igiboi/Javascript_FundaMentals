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
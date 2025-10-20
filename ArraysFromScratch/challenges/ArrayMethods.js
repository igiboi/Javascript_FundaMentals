// ========================================
// ARRAY METHODS CHALLENGES
// ========================================
// Work through each challenge in order.
// Write your solution, then run the file with Node.js to test it.
// Uncomment the test function for each challenge when you're ready.

console.log("🚀 Array Methods Challenges\n");

// ========================================
// CHALLENGE 1: Double the Numbers [EASY]
// ========================================
// Take an array of numbers and return a new array with each number doubled.
// Expected output: [2, 4, 6, 8, 10]

function challenge1() {
  const numbers = [1, 2, 3, 4, 5];

  // YOUR CODE HERE
  const result = numbers.map((num) => num * 2);

  console.log("Challenge 1:", result);
  console.log("Expected:   ", [2, 4, 6, 8, 10]);
  console.log("---");
}

// Hint: Use map() to transform each element
// map() takes a callback function that runs on each element
// The callback receives the current element as a parameter
// Example: array.map(element => /* do something with element */)

challenge1();

// ========================================
// CHALLENGE 2: Filter Adults [EASY]
// ========================================
// Get only the people who are 18 or older.
// Expected output: [18, 21, 30, 25]

function challenge2() {
  const ages = [12, 18, 7, 21, 16, 30, 14, 25];

  // YOUR CODE HERE
  const result = ages.filter((num) => num >= 18);

  console.log("Challenge 2:", result);
  console.log("Expected:   ", [18, 21, 30, 25]);
  console.log("---");
}

// Hint: Use filter() to keep only elements that pass a test
// filter() takes a callback that returns true or false
// If true, the element is kept; if false, it's removed
// Example: array.filter(element => /* return true or false */)

challenge2();

// ========================================
// CHALLENGE 3: Sum All Numbers [EASY]
// ========================================
// Calculate the total sum of all numbers in the array.
// Expected output: 40.49

function challenge3() {
  const prices = [10.99, 5.5, 3.25, 8.0, 12.75];

  // YOUR CODE HERE
  const initialValue = 0;
  const result = prices.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  console.log("Challenge 3:", result);
  console.log("Expected:   ", 40.49);
  console.log("---");
}

// Hint: Use reduce() to combine all values into a single result
// reduce() takes a callback with two parameters: accumulator and current element
// You also provide a starting value (like 0 for sums)
// Example: array.reduce((accumulator, element) => /* return updated accumulator */, startingValue)
// Think of accumulator as your "running total"

challenge3();

// ========================================
// CHALLENGE 4: Find First Large Number [EASY]
// ========================================
// Find the first number that is greater than 100.
// Expected output: 102

function challenge4() {
  const values = [45, 23, 67, 102, 88, 150, 34];

  // YOUR CODE HERE
  const result = values.find((num) => num > 100);

  console.log("Challenge 4:", result);
  console.log("Expected:   ", 102);
  console.log("---");
}

// Hint: Use find() to locate the first element matching your condition
// find() takes a callback that returns true or false
// It returns the first element where the callback returns true
// Example: array.find(element => /* return true or false */)

challenge4();

// ========================================
// CHALLENGE 5: Get Product Names [MEDIUM]
// ========================================
// Extract just the names from the products array.
// Expected output: ['Laptop', 'Mouse', 'Keyboard']

function challenge5() {
  const products = [
    { name: "Laptop", price: 999 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 },
  ];

  // YOUR CODE HERE
  const result = products.map((product) => product.name);

  console.log("Challenge 5:", result);
  console.log("Expected:   ", ["Laptop", "Mouse", "Keyboard"]);
  console.log("---");
}

// Hint: Use map() to transform each object into something else
// Each product is an object - you want to "extract" just one property
// Access object properties with dot notation: object.propertyName
// Example: array.map(product => /* return just the part you want */)

challenge5();

// ========================================
// CHALLENGE 6: Expensive Products [MEDIUM]
// ========================================
// Get only products that cost more than $50.
// Expected output: Array with Laptop and Keyboard objects

function challenge6() {
  const products = [
    { name: "Laptop", price: 999 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 },
    { name: "USB Cable", price: 10 },
  ];

  // YOUR CODE HERE
  const result = products.filter((product) => product.price > 50);

  console.log("Challenge 6:", result);
  console.log("Expected:   ", [
    { name: "Laptop", price: 999 },
    { name: "Keyboard", price: 75 },
  ]);
  console.log("---");
}

// Hint: Use filter() to keep only products that meet your condition
// Each product is an object, so check the price property
// Example: array.filter(product => /* test the product's price */)

challenge6();

// ========================================
// CHALLENGE 7: Get Unique Values [MEDIUM]
// ========================================
// Remove all duplicate values from the array.
// Expected output: [1, 2, 3, 4, 5, 6]

function challenge7() {
  const numbers = [1, 2, 2, 3, 4, 4, 5, 1, 6, 3];

  // YOUR CODE HERE
  const result = numbers.filter((num, index) => index === numbers.indexOf(num));

  console.log("Challenge 7:", result);
  console.log("Expected:   ", [1, 2, 3, 4, 5, 6]);
  console.log("---");
}

// Hint: Use filter() with the index parameter
// filter() callback can take a second parameter: the current index
// Use indexOf() to find where the number FIRST appears
// Keep only numbers where their first appearance index equals their current index
// Example: array.filter((element, index) => /* compare index with indexOf */)
// indexOf() finds the first occurrence of a value in an array

challenge7();

// ========================================
// CHALLENGE 8: Average Score [MEDIUM]
// ========================================
// Calculate the average score of all students.
// Expected output: 87.5

function challenge8() {
  const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 },
    { name: "Diana", score: 95 },
  ];

  // YOUR CODE HERE
  const result =
    students.reduce(
      (accumulator, currentValue) => accumulator + currentValue.score,
      0
    ) / students.length;

  console.log("Challenge 8:", result);
  console.log("Expected:   ", 87.5);
  console.log("---");
}

// Hint: Two steps - first sum all scores, then divide by count
// Use reduce() to sum all the scores (access each student's score property)
// Then divide by students.length to get the average
// Remember: average = sum / count

challenge8();

// ========================================
// CHALLENGE 9: Chain Methods [HARD]
// ========================================
// Get all odd numbers, square them, then sum the results. Do it in one chain.
// Expected output: 165 (1² + 3² + 5² + 7² + 9² = 1+9+25+49+81)

function challenge9() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // YOUR CODE HERE
  const result = numbers
    .filter((num) => num % 2 !== 0)
    .map((num) => num * num)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  console.log("Challenge 9:", result);
  console.log("Expected:   ", 165);
  console.log("---");
}

// Hint: Chain three methods together - each method's output becomes the next method's input
// Step 1: filter() to get only odd numbers (use modulo % to check if odd)
// Step 2: map() to square each number (multiply it by itself)
// Step 3: reduce() to sum all the squared numbers
// Example: array.filter(...).map(...).reduce(...)
// A number is odd if: number % 2 !== 0

challenge9();

// ========================================
// CHALLENGE 10: Group by Category [HARD]
// ========================================
// Transform the array into an object where keys are categories
// and values are arrays of product names.
// Expected output: { Fruit: ['Apple', 'Banana'], Vegetable: ['Carrot', 'Broccoli'] }

function challenge10() {
  const items = [
    { name: "Apple", category: "Fruit" },
    { name: "Carrot", category: "Vegetable" },
    { name: "Banana", category: "Fruit" },
    { name: "Broccoli", category: "Vegetable" },
  ];

  // YOUR CODE HERE
    const result = items.reduce((accumulator, item) => {
      if (!accumulator[item.category]) {
        // Create the category only if it doesn't exist
        accumulator[item.category] = [];
      }
      // This line runs EVERY time (whether category is new or old)
      accumulator[item.category].push(item.name);

      return accumulator;
    }, {}); 

  console.log("Challenge 10:", result);
  console.log("Expected:    ", {
    Fruit: ["Apple", "Banana"],
    Vegetable: ["Carrot", "Broccoli"],
  });
  console.log("---");
}

// Hint: Use reduce() starting with an empty object {}
// For each item, check if that category exists in your object yet
// If not, create it as an empty array
// Then push the item's name into that category's array
// Remember to return the accumulator at the end
// Example structure:
// items.reduce((accumulator, item) => {
//   // check if accumulator[item.category] exists
//   // if not, create it: accumulator[item.category] = []
//   // push item.name into accumulator[item.category]
//   // return accumulator
// }, {})

 challenge10();

// ========================================
// CHALLENGE 11: Top 3 Scores [HARD]
// ========================================
// Get the names of the top 3 students by score.
// Expected output: ['Diana', 'Bob', 'Eve']

function challenge11() {
  const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 },
    { name: "Diana", score: 95 },
    { name: "Eve", score: 88 },
  ];

  // YOUR CODE HERE
    const result = students
        .sort((a, b) => b.score - a.score)
        .slice(0, 3)
        .map(student => student.name);

  console.log("Challenge 11:", result);
  console.log("Expected:    ", ["Diana", "Bob", "Eve"]);
  console.log("---");
}

// Hint: Chain three methods together
// Step 1: sort() the array by score in descending order (highest first)
//   - sort() takes a compare function: (a, b) => b.score - a.score
//   - returning negative means "a comes first", positive means "b comes first"
// Step 2: slice() to get only the first 3 elements
//   - slice(startIndex, endIndex) - slice(0, 3) gets first 3 items
// Step 3: map() to extract just the names
// Example: students.sort(...).slice(...).map(...)

 challenge11();

// ========================================
// CHALLENGE 12: Word Frequency [HARD]
// ========================================
// Count how many times each word appears in the array.
// Expected output: { apple: 3, banana: 2, orange: 1 }

function challenge12() {
  const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

  // YOUR CODE HERE
  const result = words.reduce((counts, word) => {

    counts[word] = (counts[word] || 0) + 1;

    // MUST return the accumulator so it's passed to the next iteration
    return counts;
  }, {}); // Starting value: empty object {}

  console.log("Challenge 12:", result);
  console.log("Expected:    ", { apple: 3, banana: 2, orange: 1 });
  console.log("---");
}

// Hint: Use reduce() starting with an empty object {}
// For each word, you need to either:
//   - Create it with a count of 1 (if it doesn't exist yet)
//   - Increment its count (if it already exists)
// Use this pattern: accumulator[word] = (accumulator[word] || 0) + 1
// This works because:
//   - If accumulator[word] exists, use its value
//   - If it doesn't exist (undefined), use 0 instead
//   - Then add 1 to that value
// Don't forget to return the accumulator

 challenge12();

// ========================================
// RUN YOUR TESTS
// ========================================
// Uncomment the challenge functions above as you complete them!
// Then run: node challenges.js

console.log("\n✅ Uncomment challenge functions to test your solutions!");

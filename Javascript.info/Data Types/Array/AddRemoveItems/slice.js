// what slice() Does
// Returns a shallow copy of a portion of an array without modifying the original array.

//arr.slice(startIndex, endIndex) // endIndex is not included

// Task 1
// Slice the first three elements from the array.

const fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];
const result = fruits.slice(0, 3);

console.log(result); // ['apple', 'banana', 'cherry']
console.log(fruits); // original array unchanged


// Task 2
// Slice out banana and cherry
const fruits1 = ['apple', 'banana', 'cherry', 'date', 'fig'];
const result1 = fruits1.slice(1, 3);

console.log(result1); // ['banana', 'cherry']


// Exercises

// Task 1: Extract Middle Elements
// From the array below, use .slice() to get only ['dog', 'elephant'].

const animals = ['ant', 'dog', 'elephant', 'fox', 'giraffe'];

let extractAnimals = animals.slice(1, 3);

console.log(extractAnimals); // [ 'dog', 'elephant' ]
console.log(animals); // [ 'ant', 'dog', 'elephant', 'fox', 'giraffe' ]


// Task 2: Get the Last 3 Numbers
// Use .slice() with a negative index to get [7, 8, 9].

const numbers = [3, 4, 5, 6, 7, 8, 9];

let removeLastNumbers = numbers.slice(-3);

console.log(removeLastNumbers);
console.log(numbers);

// Task 3: Copy the Array
// Use .slice() to make a shallow copy of the colors array.

const colors = ['red', 'green', 'blue'];

const copyColors = colors.slice();

console.log(copyColors);

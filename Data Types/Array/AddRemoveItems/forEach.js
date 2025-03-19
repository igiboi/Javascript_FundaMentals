// array.forEach(function(item, index, array) {
// ... do something with item
// });

// item: The current element in the array.
// index: The index (position) of the current element.
// array: The original array that is being iterated over (often not needed unless you want to reference the whole array).

let fruits = ['apple', 'banana', 'cherry'];

fruits.forEach(function (item, index, array) {
    console.log(`Fruit at index ${index} is ${item}`);
});

// Example 2 
let numbers = [1, 2, 3, 4, 5];
let sum = 0;

numbers.forEach(function (item) {
    sum += item;
});

console.log('Sum:', sum); // Output: Sum: 15


// Example 3
let numbersArr = [1, 2, 3, 4];
let doubled = [];

numbers.forEach(function (item) {
    doubled.push(item * 2);
});

console.log(doubled);

// Problem 1: Log Elements and Their Indices
// Task:
// Given the array ['dog', 'cat', 'rabbit'], write code using forEach that prints each animal along with its index.
let animals = ['dog', 'cat', 'rabbit'];

animals.forEach(function (item, index) {
    console.log(`Animals at index ${index} is ${item}`);
});

// Problem 2: Calculate the Product of Array Elements
// Task:
// For the array [2, 3, 4], use forEach to calculate the product (multiplication of all elements) and log the result.
const numbersMultiply = [2, 3, 4];

let product = 1; // 1 because putting multiplying with zero will equal zero
numbers.forEach(function (num) {
    product *= num;
});

console.log('Product:', product);
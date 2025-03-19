// const newArray = originalArray.map((item, index, array) => {
//   // Return the transformed value for each element
// });

// Example 1
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);


// Problem 1: Square Each Number
// Task:
// Write a function squareNumbers(numbers) that accepts an array of numbers and returns a new array with each number squared.

function squareNumbers(numbers) {
    return numbers.map(item => item * 2);
}

console.log(squareNumbers([1, 2, 3, 4])); // Should return [1, 4, 9, 16])

// Problem 2: Convert Strings to Uppercase
// Task:
// Write a function convertToUpper(words) that accepts an array of strings and returns a new array with all the strings converted to uppercase.

function converToUpper(words) {
    return words.map(item => item.toUpperCase());
}

console.log(converToUpper(["apple", "banana", "cherry"])); // Should return ["APPLE", "BANANA", "CHERRY"])

// Problem 3: Format Object Data
// Task:
// Given an array of objects representing people, write a function formatPeople(people)
// that returns an array of strings where each string is formatted as "Name (Age)".

// function formatPeople(people) {
//     return people.map(item => )
// }
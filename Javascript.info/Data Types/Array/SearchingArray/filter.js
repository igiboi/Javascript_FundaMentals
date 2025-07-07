// const newArray = originalArray.filter((item, index, array) => {
  // return true to keep the item, false to filter it out
// });

// Problem 1: Filter Even Numbers
// Task:
// Write a function filterEvenNumbers(numbers) that accepts an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(numbers) {
    const evenNumbers = numbers.filter(item => item % 2 === 0);

    return evenNumbers;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [ 2, 4, 6 ]

// Problem 2: Filter Users by Age
// Task:
// Given an array of user objects, write a function filterAdults(users) that returns a new array of users who are 18 years old or older.

const users = [
  { id: 1, name: 'Alice', age: 17 },
  { id: 2, name: 'Bob', age: 22 },
  { id: 3, name: 'Charlie', age: 19 },
];

function filterAdults(users) {
    const aboveEighteenOrOlder = users.filter(item => item.age > 18);

    return aboveEighteenOrOlder; // this returns a new array
}

console.log(filterAdults(users));
// { id: 2, name: 'Bob', age: 22 },
// { id: 3, name: 'Charlie', age: 19 }
 


// Problem 3: Filter Strings by Length
// Task:
// Write a function filterShortWords(words, minLength) that accepts an array of strings and
// returns a new array containing only the strings with a length greater than or equal to minLength.

function filterShortWords(words, minLength) {
    const newWords = words.filter(item => item.length >= minLength);

    return newWords;
}

console.log(filterShortWords(["apple", "hi", "banana", "ok", "pineapple"], 5));


const numbers = [1, 2, 3, 4, 5, 6];
// Get all even numbers
const filterAllEvenNumbers = numbers.filter(number => number % 2 === 0);

console.log(filterAllEvenNumbers);

let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  const result = arr.filter(number => (number >= a && number <= b));

  return result;
}

let filtered = filterRange(arr, 1, 4);

console.log(filtered);

function groupById(arr) {
  
}
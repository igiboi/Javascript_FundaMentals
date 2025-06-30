// The splice() method is used to:

// Add items to an array

// Remove items from an array

// Replace items in an array

// It directly modifies the original array.


// full syntax of the splice()
Array.splice(start, removeCount, newItem, newItem, newItem,);

let arr = ['I', 'study', 'JavaScript'];

arr.splice(1, 1); // from index 1 remove 1 element

console.log(arr); // // ["I", "JavaScript"]

let arr1 = ['I', 'study', 'JavaScript', 'right', 'now'];

arr1.splice(0, 3, "Let's", "dance");

console.log(arr1); // [ "Let's", 'dance', 'right', 'now' ]

// You can store the removed items 
let arr2 = ['I', 'study', 'JavaScript', 'right', 'now'];

let removed = arr2.splice(0, 2);

console.log(removed); // [ 'I', 'study' ]

// Exercises

// Task 1 
// Remove 'cat' and 'bird' using splice.
const animals = ['dog', 'cat', 'bird', 'fish', 'lion'];

let removeCatAndBird = animals.splice(1, 2);

console.log(removeCatAndBird);
console.log(animals);

// Task 2
// Adding Elements 
// Add 'yellow' and 'purple' right after 'blue'.
const colors = ['red', 'blue', 'green'];

let addColors = colors.splice(2, 0, 'yellow', 'purple');

console.log(addColors);
console.log(colors);

// Task 3
// replace elements 
// Replace 20 and 30 with 25 and 35.

const numbers = [10, 20, 30, 40];

let replaceNumbers = numbers.splice(1, 2, 25, 35);

console.log(replaceNumbers);
console.log(numbers);

// Task 4
// Working from the end
// Using negative indexing, replace the last two fruits with 'kiwi'.

const fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];

let replaceLastIndex = fruits.splice(-2, 2, "kiwi");

console.log(replaceLastIndex);
console.log(fruits);

// Task 5
// Complex Add/Remove
// Starting from 'Tue', remove two elements, then insert 'Holiday' and 'Break'.

const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

let removeDays = weekdays.splice(2, 2, "Holiday", "Break");

console.log(removeDays);
console.log(weekdays);


// Task 6
// Removing without Adding
// remove all letters after 'c'

const letters = ['a', 'b', 'c', 'd', 'e', 'f'];

let removeLetters = letters.splice(3);

console.log(removeLetters);
console.log(letters);

// Task 7
// Remove all string elements and insert the numbers 2, 4, and 6 at their respective positions.

const data = [1, 'two', 3, 'four', 5, 'six'];

let removeStringTwo = data.splice(1, 1, 2);
let removeStringFour = data.splice(3, 1, 4);
let removeStringSix = data.splice(5, 1, 6);

console.log(removeStringTwo);
console.log(removeStringFour);
console.log(removeStringSix);
console.log(data);

// Task 8 
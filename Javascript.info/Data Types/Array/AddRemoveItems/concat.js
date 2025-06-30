// The method arr.concat creates a new array that includes values from other arrays and additional items.

// The syntax is:

// arr.concat(arg1, arg2...)

// Normally, it only copies elements from arrays. Other objects, even if they look like arrays, are added as a whole:

// let arr = [1, 2];

// let arrayLike = {
//   0: "something",
//   length: 1
// };

// console.log( arr.concat(arrayLike) ); // 1,2,[object Object]

// Write a function rotateArray(arr, positions) that returns a new array rotated to the left.
// Use slice to extract parts of the array and concat to combine them.
// Example:

function rotateArray(arr, positions) {
     arr.slice(positions, arr); 
    return arr.conc564at; 
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));

// Task 1 
// Use .concat() to combine arr1 and arr2 into a single array.
const arr1 = ['a', 'b'];
const arr2 = ['c', 'd'];

// Expected result: ['a', 'b', 'c', 'd']
let combine1And2 = arr1.concat(arr2);

console.log(combine1And2); // [ 'a', 'b', 'c', 'd' ]

// Task 2 
// Add the values 3, 4, and 5 to the end of the numbers array using .concat().

const numbers = [0, 1, 2];

let addEnd = numbers.concat(3, 4, 5);

console.log(addEnd);

// 1. Custom Objects That Act Like Arrays

// Normally, it only copies elements from arrays. Other objects, even if they look like arrays, are added as a whole:

let arr = [1, 2];

let arrayLike = {
  0: "something",
  length: 1
};

alert( arr.concat(arrayLike) ); // 1,2,[object Object]

// …But if an array-like object has a special Symbol.isConcatSpreadable property, 
// then it’s treated as an array by concat: its elements are added instead:

// let arr = [1, 2];

// let arrayLike = {
//   0: "something",
//   1: "else",
//   [Symbol.isConcatSpreadable]: true,
//   length: 2
// };

// alert( arr.concat(arrayLike) ); // 1,2,something,else

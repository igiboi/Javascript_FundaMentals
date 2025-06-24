// two syntaxes for creating an empty array
let arr = new Array();
let arr1 = [];

// Queue, FIFO (First-In-First-Out)
// push appends an element to the end.
// shift get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.

// Stacks, LIFO (Last-In-First-Out)
// push adds an element to the end.
// pop takes an element from the end.

// pop 
let fruits = ["Apple", "Orange", "Pear"];

console.log(fruits.pop()); // Pear

console.log(fruits); // [ 'Apple', 'Orange' ]

// Both fruits.pop() and fruits.at(-1) return the last element of the array,
// but fruits.pop() also modifies the array by removing it.

// push
// Append the element to the end of the array:


// JavaScript engines optimize arrays under the hood to make them really fast,
//  but those optimizations stop working if you treat an array like a generic object
// instead of an ordered list of items. Here's what that means:

// let arr = [1, 2, 3, 4];
// [1][2][3][4] → contiguous memory blocks

// Methods push/pop run fast, while shift/unshift are slow.
// Because of no need to shift orders in array
// Time complexity: O(1) — constant time


// Why shift and unshift are slow
//The shift operation must do 3 things:

// Remove the element with the index 0.
// Move all elements to the left, renumber them from the index 1 to 0, from 2 to 1 and so on.
// Update the length property.

// The more elements in the array, the more time to move them, more in-memory operations.

// Use for..in when you're iterating over the keys of a generic object.
// ❌ Avoid it for arrays and array-like structures.

let fruitsTask1 = ['Apples', 'Pear', 'Orange'];

// Array operations task
let styles = ["Jazz", "Blues"];

styles.push("Rock-Roll");
const middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "classics";

console.log(styles);

let removeFirstIndex = styles.shift();

console.log(removeFirstIndex);

styles.unshift("Rap", "Reggae");

console.log(styles);
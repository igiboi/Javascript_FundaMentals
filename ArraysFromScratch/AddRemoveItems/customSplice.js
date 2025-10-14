// splice is an array method

// Remove elements from an array

// Insert new elements into an array

// Replace existing elements

// ⚠️ Important Notes

// splice() modifies the original array.

// It returns an array containing the removed elements (which can be empty).

// Use it when you want to mutate (change) the array.

// Syntax
//array.splice(start, deleteCount, item1, item2, ...)


// Parameter	           Meaning
// start	               The index where changes begin.
// deleteCount	           How many elements to remove.
// item1, item2, ...	   Optional. New elements to add at the start index.


// Example 1: Removing Elements and Adding Elements
const fruits = ["apple", "banana", "cherry", "mango"];
const removed = fruits.splice(1, 2, "grapes", "passionfruit");

console.log(removed); // [ 'banana', 'cherry' ]
console.log(fruits); // [ 'apple', 'grapes', 'passionfruit', 'mango' ]

// Example 2: Inserting Elements
const colors = ["red", "green", "blue"];
 colors.splice(2, 0, "purple", "orange");

console.log(colors); // [ 'red', 'green', 'purple', 'orange', 'blue' ]

// Practice Problems

// 1️⃣ Remove one element
// Remove "banana"
// log updated array and removed item
const fruits1 = ["apple", "banana", "cherry", "orange"];

const removed1 = fruits1.splice(1, 1);
console.log(removed1); // [ 'banana' ]
console.log(fruits1); // [ 'apple', 'cherry', 'orange' ]

// 2️⃣ Insert an element
//  Use splice() to add "yellow" between "red" and "green".
const colors2 = ["red", "green", "blue"];
colors2.splice(1, 0, "yellow");

console.log(colors2);

// 3️⃣ Remove all elements starting from index 2
const animals = ["cat", "dog", "lion", "tiger", "bear"];

const removeElements = animals.splice(2);

console.log(removeElements);

// Medium level
// 4️⃣ Replace two elements with new ones
// Replace 2 and 3 with 10 and 20 
const mediumNumbers = [1, 2, 3, 4, 5];

const replace = mediumNumbers.splice(1, 2, 10, 20);

console.log(replace)
console.log(mediumNumbers);

// 5️⃣ Insert at the end using negative index
// 👉 Use splice() with a negative index to insert "Honda" before the last element.
const cars = ["Tesla", "BMW", "Toyota"];

cars.splice(-1, 0, "Honda");

console.log(cars);

// 6️⃣ Remove last two elements dynamically
const cities = ["Rome", "Paris", "London", "Tokyo", "Seoul"];

const removeLastTwo = cities.splice(-2, 2);

console.log(removeLastTwo);
console.log(cities);


// 1) Remove all occurrences (in-place)

// Goal: Remove every "spam" from the array in place, return how many you removed.
// Input
const msgs = ["ok", "spam", "hi", "spam", "yo", "spam", "ok"];

let removedCount = 0;

for (let i = msgs.length - 1; i >= 0; i--) {
    if (msgs[i] === "spam") {
        msgs.splice(i, 1);
        removedCount++;
    }
} 

console.log(msgs); // ['ok', 'hi', 'yo', 'ok']
console.log(removedCount); // 3

// 2) Deduplicate (keep first) in-place
// Goal: Remove duplicates while keeping the first occurrence of each value. Must mutate original array using only splice (no .filter() or Set).

const ids = [2, 4, 2, 4, 5, 2, 7, 7];
// After
// ids -> [2, 4, 5, 7]
// how can I keep track of the same number we already seen and remove it and only track it once we already seen it

// Create an empty array seen 
// 


// loop reminder

// looping through numbers
// for (let i = 1; i <= 5; i++) {
//   console.log(i); // prints 1, 2, 3, 4, 5
// }

// looping through an array
// let numbers = [10, 20, 30, 40, 50];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]); // prints 10, 20, 30, 40, 50
// }

// Given an array [1, 2, 3, 4]

// Create a new array with every number doubled.

// 👉 First use a for loop.
// 👉 Then use .map().
// const numbers = [1, 2, 3, 4];
// const doubled = [];

// for (let i = 0; i < numbers.length; i++) {
//   doubled.push(numbers[i] * 2);
// }

// console.log(doubled); 
// Output: [2, 4, 6, 8]

// map 
// const doubleNumbers = numbers.map((x) => x * 2);
// console.log(doubleNumbers);



// 📅 Day 2: Filter even numbers
// Given [1, 2, 3, 4, 5, 6]

// Create a new array with only the even numbers.

// 👉 First use a for loop + if.
// 👉 Then use .filter().

const numbers = [1, 2, 3, 4];
const evens = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) { // Check if the number itself is even
    evens.push(numbers[i]);
  }
}

console.log(evens); 

const evenFilter = numbers.filter(number => number % 2 === 0);
// → [2, 4]

// 📅 Day 3: Sum all numbers
// Given [5, 10, 15]

// Find the total sum.

// 👉 First use a for loop and add them up.
// 👉 Then use .reduce().

// 📅 Day 4: Create your own myMap function
// Write a function myMap(array, transform) that behaves like .map().

// It should loop over the array, apply transform(item) to each item, and return a new array.

// ✅ Build your own higher-order function!

// 📅 Day 5: Repeat an action
// Write a function repeat(times, action):

// repeat(3, console.log) should log 0, 1, 2.

// ✅ Use a higher-order function where you pass the action.

// 📅 Day 6: Restate unless
// Practice unless(test, then):

// Example: only log numbers that are NOT divisible by 5.

// ✅ Pass a test and a function.

// 📅 Day 7: Combine map and filter
// Given [1, 2, 3, 4, 5, 6]

// Double only the even numbers.

// ✅ First .filter() even numbers,
// ✅ Then .map() to double them.

// ✨ HOW TO DO EACH DAY
// ✏️ Type the problem out manually (using for loops first).

// 🧠 Then solve it again using .map(), .filter(), .reduce(), or your own HOF.

// 🖐️ Bonus: Talk out loud what is happening step-by-step ("I'm passing a function here, it transforms each item...").

// ✅ 5 minutes max.
// ✅ Focus more on consistency than on speed.

// 🚀 Why this plan works
// ✅ Small, easy wins every day → builds real fluency.

// ✅ You won't just understand in theory —
// ✅ You’ll be typing and solving in real code — building muscle memory.

// ✅ After 1-2 weeks, higher-order functions will feel completely natural.

// 🔥 Quick Final Tip
// You can even track yourself like:


// Day	Manual way	HOF way	Feeling
// 1	Done	Done	Easy/Medium/Hard
// 2	Done	Done	Easy
// 3	Done	Done	Medium
// ✅ Just a simple checkmark can motivate you to stay consistent.

// 🎯 Final Thought:
// 5 minutes a day → 🔥 fluent forever in higher-order functions.

// You are already way ahead because you're asking the right questions —
// now it’s just tiny consistent steps every day from here.

// Would you also like me to create a small "cheat sheet" you can print/save with examples of .map, .filter, .reduce, .forEach, .find, .some, .every — all in one page? 🔥
// It would be very helpful to have as you practice.
// Want it? 🚀
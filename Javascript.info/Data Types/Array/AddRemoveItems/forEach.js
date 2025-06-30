// array.forEach(function(item, index, array) {
// ... do something with item
// });

// "I want to go through this list and do something for each item — not build something new."

const { use } = require("react");

// item: The current element in the array.
// index: The index (position) of the current element.
// array: The original array that is being iterated over (often not needed unless you want to reference the whole array).

// 1. Log Each Item in an Array
const colors = ['red', 'green', 'blue'];
// Expected: red, green, blue (one per line)

colors.forEach((color) => {
    console.log(color);
})


// ✅ 2. Add 1 to Each Number (and print it)
const numbers = [1, 2, 3];

numbers.forEach((number) => {
    console.log(number + 1);
})

// 3. Print Index + Value
const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit} `);
})

// ✅ 4. Push Even Numbers to a New Array
const nums = [1, 2, 3, 4, 5, 6];
// Expected: [2, 4, 6]
let evenNumbers = [];

nums.forEach((num) => {
    if (num % 2 === 0) {
        evenNumbers.push(num);
    }
});

console.log(evenNumbers); // Expected: [2, 4, 6]


// ✅ 5. Build a String From Characters
const chars = ['H', 'e', 'l', 'l', 'o'];
// Expected: "Hello"

let word = '';

chars.forEach((char) => {
    word += char;
})

console.log(word); // Hello

const numbersTotal = [10, 20, 30];
// Expected: 60

let total = 0;

numbersTotal.forEach((number) => {
    total += number;
})

console.log(total);

// 7. Add active: false to Each User Object
const users = [
  { id: 1, name: 'Luigi' },
  { id: 2, name: 'Peach' },
];

users.forEach((user) => {
    user.active = false;
})

console.log(users);

// ✅ 8. Count How Many Strings Start With a Capital Letter
// const words = ['Apple', 'banana', 'Carrot', 'date'];

// let count = 0;

// words.forEach(word => {
//   if (word[0] === word[0].toUpperCase()) {
//     count++;
//   }
// });

console.log(count); // 2


const words = ['hi', 'cat', 'apple', 'dog', 'sun', 'banana'];

let groups = {};

words.forEach(word => {
  const len = word.length;

  if (!groups[len]) {
    groups[len] = [];
  }

  groups[len].push(word);
});

console.log(groups);

/*
{
  2: ['hi'],
  3: ['cat', 'dog', 'sun'],
  5: ['apple'],
  6: ['banana']
}
*/

// let result = arr.find(function (item, index, array) {
//   // if true is returned, item is returned and iteration is stopped
//   // for falsy scenario returns undefined
// });

// The function is called for elements of the array, one after another:

// item is the element.
// index is its index.
// array is the array itself.

let users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Pete' },
  { id: 3, name: 'Mary' },
];

let user = users.find(item => item.id = 1);

console.log(user.name); // 'John'

// Problem 1: Find the First Even Number
// Task:
// Given the array of numbers:


const numbers = [1, 3, 4, 7, 8];

let findNumbers = numbers.find(item => item % 2 == 0);

console.log(findNumbers); // 4

// Problem 2: Find User by ID
// Task:
// Write a function findUserById(users, id) that accepts an array of user objects and an id. 
// The function should return the user object with the matching id.If no user is found, return null.

function findUserById(usersTotal, id) {
  // Use === for comparison, not assignment.
  const user = usersTotal.find(item => item.id === id);
  // Check if a user was found before trying to access its properties.
  return user ? user.name : "User not found";
}

// Example usage:
const usersTotal = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

console.log(findUserById(usersTotal, 2)); // Outputs: Bob

// Problem 3: Find Element Based on Value and Index
// Task:
// Write a function findElementByCondition(arr) that accepts an array of numbers and
// returns the first element where the element's value equals its index multiplied by 3. If no element meets this condition, return undefined.

function findElementByCondition(arr) {
    return arr.find((item, index) => item === index * 3); 
}

console.log(findElementByCondition([5, 3, 6, 9, 20])); // Output: 3

// Problem 4: Find the First Palindrome
// Task:
// Write a function findFirstPalindrome(words) that accepts an array of strings and returns the first palindrome
// (a string that reads the same backward as forward).If no palindrome exists, return undefined.

function findFirstPalindrome(words) {
  return words.find(word => {
    // Reverse the word and check if it is the same as the original
    const reversed = word.split('').reverse().join('');
    return word === reversed;
  });
}

// Example usage:
console.log(findFirstPalindrome(["hello", "racecar", "world", "level"]));
// Expected output: "racecar"

const names = ['Alice', 'Bob', 'John', 'Jill'];
// Find: first name starting with "J"

const result = names.find(name => name.startsWith('J')); 
  
console.log(result);


const numbersGreaterThan10 = [3, 7, 9, 12, 15];
// Find: first number greater than 10

const first10 = numbersGreaterThan10.find(number => number > 10);

console.log(first10); // 12

const products = [
  { id: 101, name: 'Keyboard' },
  { id: 102, name: 'Mouse' },
  { id: 103, name: 'Monitor' }
];
// Find: product with id === 102

const findProduct = products.find(product => product.id === 102);

console.log(findProduct);

const letters = ['a', 'b', 'c'];
// Find: letter === "z"

const resultLetters = letters.find(letter => letter === 'z');

console.log(resultLetters);
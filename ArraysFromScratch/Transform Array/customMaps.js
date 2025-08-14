function customMap(arr, callback) {
    let result = [];

  for (let i = 0; i < arr.length; i++) {
    let transformed = callback(arr[i], i, arr);
    result.push(transformed);
  }
    return result;
}

let fruits = ["apple", "banana", "cherry"];
let firstLetters = [];

for (let i = 0; i < fruits.length; i++) {
  let fruit = fruits[i];
  console.log(`Step ${i}: word is "${fruit}", first letter is "${fruit[0]}"`);
  firstLetters.push(fruit[0]);
}
console.log("Problem 5 (first letters):", firstLetters); // ["a", "b", "c"]


let names = ['Luigi', 'Mario', 'Peach'];

console.log(names.map((name, index) => {
  return { name, index };
}));

let words = ['javascript', 'map', 'function'];

console.log(words.map(word => word.length)); // 10, 3, 8


let numbers = [5, 10, 15];

let multiplyIndex = numbers.map((num, index) => num * index);

console.log(multiplyIndex);

const pricesUSD = [10, 20, 50, 100];
// Expected output example: ["€9.00", "€18.00", ...]

const pricesEUR = pricesUSD
  .map((price) => price * 0.9)
  .map((price) => `€${price.toFixed(2)}`);     // Step 2: format as string

console.log(pricesEUR);

// Problem 2 
const people = [
  { firstName: 'Alice', lastName: 'Smith' },
  { firstName: 'Bob', lastName: 'Jones' }
];
// Expected: ["ALICE", "BOB"]

const extractFirstName = people
  .map(person => person.firstName)
  .map(name => name.toUpperCase());

console.log(extractFirstName);

// Problem 3
// Problem 3
const scores = [5, 10, 15];

// Your turn: chain two maps
const tagged = scores
  .map(s => s + 10)
  .map(s => `Score: ${s}`);

console.log(tagged);
// Expected: ["Score: 15", "Score: 20", "Score: 25"]



function customFind(array, callback) {
  for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        return array[i];
      } 
  }
  return undefined;
}
  
const nums = [5, 8, 11, 20];

//callback = function (num) { return num > 10; }

const result = customFind(nums,
  function (num) {
  return num > 10;
});

console.log(result); // 11

// Use customFind to find the first even number in this array:

const numsPractice1 = [7, 13, 9, 6, 10];

const firstEvenResult = customFind(numsPractice1,
  function (num) {
  return num % 2 === 0;
});

console.log(firstEvenResult); // 6

// Practice 2: Find first word longer than 5 letters

const words = ['hi', 'code', 'awesome', 'fun', 'JavaScript'];

const longerThanFiveWords = customFind(words,
  function (word) {
    return word.length > 5;
  })

console.log(longerThanFiveWords); // awesome

// Practice 3: First number that is both even and greater than 10
const numsPractice3 = [3, 7, 11, 8, 14, 9];

const result3 = customFind(numsPractice3, function (num) {
  return num > 10 && num % 2 == 0;
});

// should return: 14

console.log(result3)


// Exercises


// Level 1
// 1.) Find Positive Number

let numbers = [-5, -1, 3, 7];

const findPositiveNumber = numbers.find(num => num > -1);

console.log(findPositiveNumber); // 3

// 2.) Find Even Number 
let numbersTask2 = [1, 3, 7, 8, 10];

const findFirstEvenNumber = numbersTask2.find(num => num % 2 === 0);

console.log(findFirstEvenNumber); // 8

// 3.) Find First string Longer than 5 characters
let strings = ['hi', 'world', 'JavaScript', 'fun'];

const findStringLongerThanFive = strings.find(str => str.length > 5);

console.log(findStringLongerThanFive); // JavaScript


// Level 2
const users = [
  { name: 'Alice', country: 'USA' },
  { name: 'Bob', country: 'Canada' },
  { name: 'Charlie', country: 'UK' },
];


const findCanada = users.find(user => user.country === 'Canada');

console.log(findCanada);


// Find Product out of stock

const products = [
  { name: 'Laptop', stock: 10 },
  { name: 'Phone', stock: 0 },
  { name: 'Tablet', stock: 5 },
];

const findOutOfStock = products.find(prodouct => prodouct.stock === 0);

console.log(findOutOfStock);

// Find Task Past Due Date
const today = new Date();
const tasks = [
  { title: 'Pay bills', dueDate: new Date('2025-08-15') },
  { title: 'Submit report', dueDate: new Date('2025-08-09') },
  { title: 'Buy groceries', dueDate: new Date('2025-08-20') },
];

const findPastDueDate = tasks.find(task => task.dueDate < today);

console.log(findPastDueDate);

// Drill 1
let num = [1, 3, 5, 8, 10];

const findEvenNumber = num.find(num => num % 2 === 0);

console.log(findEvenNumber);

// Drill 2
let object = [
  { id: 1, name: 'Ana' },
  { id: 2, name: 'Ben' },
  { id: 3, name: 'Chen' },
];

const findId = object.find(user => user.id === 3);

console.log(findId);

// Drill 3
let fruits = ['apple', 'banana', 'cherry'];

const findFruit = fruits.includes('banana');

console.log(findFruit); // true

// Drill 4
let fruits1 = ['apple', 'banana', 'cherry'];

const findIndexOfFruit = fruits1.indexOf('cherry');

console.log(findIndexOfFruit); // 2
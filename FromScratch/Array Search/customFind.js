// 👨‍🔧 Your Goal:
// Build a function customFind(array, callback) that returns the first element in the array that passes the callback test.

// Inputs
// An array
// A callback function

// Output
// The first element that satisfies the callback
// or undefined if none do

// callback(currentElement, currentIndex, wholeArray)

// That means you're calling the callback and passing in:

// array[i] → the current element

// i → the current index

// array → the whole array

// 1.) start looping over the array
// 2.) for each item
//  * pass it to the callback function
//  * if the callback returns true, immediately return item
// 3.) if loop finishes and nothing retured, return undefined

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

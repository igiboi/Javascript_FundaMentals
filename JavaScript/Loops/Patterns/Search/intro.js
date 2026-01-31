/* 
use the search pattern when you want to:
  * Find one specific item
  * or check if something exists
  * and stop as soon as you find it

Search only cares about the first match. 

Core Structure: 
  for (let item of collection) {
    if (item matches condition) {
      return item; // or true
    }
  }
  return null; // or false;
*/

function findFirstEven(numbers) {
  for (let number of numbers) {
    if (number % 2 === 0) {
      return number;
    }
  }
  return null;
}

// TEST CASES
console.log(findFirstEven([1, 3, 7, 8, 10]));  // Expected: 8
console.log(findFirstEven([2, 4, 6]));          // Expected: 2
console.log(findFirstEven([1, 3, 5, 7]));       // Expected: null
console.log(findFirstEven([]));                 // Expected: null


function containsFive(numbers) {
  for (let number of numbers) {
    if (number === 5) {
      return true;
    }
  }
  return false;
}

console.log(containsFive([1, 3, 5, 7])) // true
console.log(containsFive([1, 2, 3]))   // false

const numbers = [1, 2, 3, 2, 4];
console.log(numbers.indexOf(2)); // Output: 1 (first occurrence)
console.log(numbers.indexOf(5)); // Output: -1 (not found)
console.log(numbers.indexOf(2, 2)); // Output: 3 (starts searching from index 2)


const numbersIncludes = [1, 2, 3, 2, 4];
console.log(numbersIncludes.includes(3));  // Output: true
console.log(numbersIncludes.includes(5));  // Output: false


// Problem 1: Finding the First Occurrence
// Task:
// Write a snippet that searches for the number 2 in the array [7, 2, 5, 2, 9]
// using indexOf and prints the result. If the number isn't found, print "Not found".

const findAndLogIndex = (array, value) => {
  const index = array.indexOf(value);
  console.log(index !== -1 ? `Found at index ${index}` : 'Not found');
};

findAndLogIndex([7, 2, 5, 2, 9], 2);

// Problem 3: Check for Existence with Includes
// Task:
// Write a function that takes an array and a value.
// The function should use includes to check if the value exists in the array and return true or false.

function ExistenceIncludes(array, value) {
    return array.includes(value);
}

console.log(ExistenceIncludes([1, 2, 3, 4, 5], 10));

function removeItem(array, value) {
  const index = array.indexOf(value);
  if (index !== -1) {
    // Remove one element at the found index.
    // splice returns an array of removed elements.
    return array.splice(index, 1)[0]; 
  }
  return undefined;
}

const arr = [1, 2, 3, 4, 5];
console.log(removeItem(arr, 1)); // Output: 1 (removed element)
console.log(arr); // Output: [2, 3, 4, 5] (array after removal)

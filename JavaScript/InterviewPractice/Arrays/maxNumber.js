// Problem: Write a function called maxNumber that takes an array of numbers as a parameter.
// Return the largest number in the array.
// Example: maxNumber([3, 7, 2, 9, 4, 11, 6]) => 11

const numbers = [3, 7, 2, 9, 4, 11, 6];


function maxNumber(arr) {
  let highestNumber = arr[0]; // start first element incase we have negative numbers

  for (const number of arr) {
    if (number > highestNumber) {
      highestNumber = number;
    }
  }
  return highestNumber;
}

const result = maxNumber(numbers);

console.log(result); // 11
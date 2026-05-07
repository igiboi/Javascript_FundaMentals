// Problem: Write a function called findDuplicates that takes an array of numbers as a parameter.
// Return an array of numbers that appear more than once.
// Example: findDuplicates([1, 2, 3, 2, 4, 3, 5]) => [2, 3]

const numbers = [1, 2, 3, 2, 4, 3, 5];

function findDuplicates(array) {
  let numberCount = array.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  let arrayDuplicates = [];

  for (const number in numberCount) {
    if (numberCount[number] > 1) {
      arrayDuplicates.push(Number(number));
    }
  }

  return arrayDuplicates;
}

const result = findDuplicates(numbers);

console.log(result); 
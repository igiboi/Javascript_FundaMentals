/*
Implement a Range-Based LCM Calculator
In this lab, you will create a function that takes an array of two numbers and returns the least common multiple (LCM) of those two numbers and all the numbers between them.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories

You should have a smallestCommons function that accepts an array of two numbers as an argument.
The smallestCommons function should return the smallest common multiple that is evenly divisible by both numbers and all sequential numbers in the range between them.
The function should handle input where the two numbers are not in numerical order.

*/



function smallestCommons(array) {
  const newArr = [];
  // array = [1, 5] or [5, 1] so  we need to sort smallest number
  array.sort((a, b) => a - b);

  for (let i = array[0]; i <= array[1]; i++) {
    newArr.push(i);
  }

  let result = newArr.reduce((accumulate, current) =>
    (accumulate * current) / gcd(accumulate, current), 1);

  return result;
}

// helper function
function gcd(a, b) {

  while (b !== 0) {
    temp = a;
    a = b;
    b = temp % b;
  }
  return a;
}

console.log(gcd(4, 2));      // should be 2
console.log(smallestCommons([1, 5]));  // should be 60


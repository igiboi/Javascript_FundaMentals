/* 
You have an array of numbers. Write a function sum that returns the 
total sum of all the numbers in the array
*/

const numbers = [10, 20, 30, 40, 50];



/* 
sum is a function that takes one parameter numbers, which is an array of numbers.
The function has a direct return statement that calls .reduce() on the numbers array.
.reduce() takes a callback function with two parameters accumulator and currentValue
and an initial value of 0. The accumulator starts at 0 and on each iteration, the callback 
adds currentValue to it. .reduce() returns a single value the total sum of all numbers in
the array
*/

function sum(numbers) {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
}

const result = sum(numbers);

console.log(result);
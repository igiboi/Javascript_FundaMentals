/*

You have an array of numbers. 
Return true if every number is positive, and 
true if some numbers are greater than 100. 
Log both results.

*/

const numbers = [12, 45, 150, 7, 203];

const allNumbersPositive = numbers.every(number => number > 0);
const someNumbersGreatherThanHundred = numbers.some(number => number > 100);

console.log(allNumbersPositive);
console.log(someNumbersGreatherThanHundred);
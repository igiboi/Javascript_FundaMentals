/*
================================================================================
THE 7-STEP FORMULA FOR WRITING CODE FROM SCRATCH
================================================================================

STEP 1: RESTATE: a function that recieves an array of positive and negative numbers
we must return accumulative number of all the positive numbers 

STEP 2: INPUTS/OUTPUTS

when given a random length of array we must output a positive array of numbers

STEP 3: EXAMPLE

sumPositives([1, 2, 3, 4, 5]) -> 15
sumPositives([1, -4, 7, 12]) -> 20 ex(1 + 7 + 12)
sumPositives([-1, -2, -3]) -> 0 

STEP 4: TOOLS
- for loops to loop through an array
- a variable to hold the total
- check by comnparison  <, >, ===

     
STEP 5: PSEUDOCODE
What is the first thing our code needs to do?

function sumPositives(array) 
  let count = 0;
  let positiveArray = []
  for (let number of array)
     if (number >=0 )
        count += number;
   return count;


 */

function sumPositives(array) {
  let count = 0;

  for (let number of array) {
    if (number > 0) {
      count += number;
    }
  }

  return count;
}

let result = sumPositives([1, 2, 3, 4, 5]); 

let negativeArray = sumPositives([-1, -2, -3]);

console.log(result);
console.log(negativeArray);
console.log(sumPositives([5, 0, 10]));  



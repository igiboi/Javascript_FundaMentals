/*

The Mental Model
 Think of reduce() like this:

 "I'm going through each item in my array, and I'm building up a result piece by piece."

With map():

You transform each item → new array, same length

With reduce():

You accumulate something as you go through each item → whatever you want!


Start with: 0
See 1 → 0 + 1 = 1
See 2 → 1 + 2 = 3
See 3 → 3 + 3 = 6
See 4 → 6 + 4 = 10
See 5 → 10 + 5 = 15

The reduce() Syntax


array.reduce((accumulator, currentItem) => {
    // Do something with accumulator and currentItem

    return accumulator // Pass it to the next iteration
    }, startingValue);


Three key parts:

1. accumulator - The value you're building up (the running total)
2. currentItem - The current element you're processing
3. startingValue - What to begin with (like starting at 0 for addition)

*/

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, number) => {
    return total + number;
}, 0); // Start at 0

console.log(sum); // 15


/* 
Looking at that code, can you tell me:

What is total on the FIRST iteration (when num is 1)? 
 answer = 0

What gets returned on the first iteration? 
 answer = 1

What is total on the SECOND iteration (when num is 2)? 
answer = 1 
*/

// Can you write reduce() to multiply all numbers instead of adding them?
const numbersMultiply = [2, 3, 4];

const product = numbersMultiply.reduce((number, item) => {
    return number * item;
}, 1);

console.log(product);

/* 
Counting Words
*/

const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

const countWords = words.reduce((accumulator, currentWord) => {
    // accumulator = { apple: 2, banana: 1 };
    // currentWord = "apple";
  // accumulator = the object you're building { apple: 1, banana: 2, ... }
    if (accumulator[currentWord]) {
        // add plus + 1 
        accumulator[currentWord] = accumulator[currentWord] + 1;
    } else {
        // when a word doesn't exist in accumaltor
        accumulator[currentWord] = 1;
        
    }
    return accumulator
  // currentWord = the word you're currently looking at ("apple", "banana", etc.)
}, {});

console.log(countWords);

/*
==============================================
CHALLENGE 1: Sum Only Even Numbers
==============================================
Using reduce(), sum only the EVEN numbers from this array
Expected result: 30 (because 2 + 4 + 6 + 8 + 10 = 30)

Questions to think about:
1. What should your starting value be?
2. What's your accumulator building up? (a number? an object?)
3. How do you check if a number is even? (Hint: num % 2 === 0)
4. Should you add to the accumulator for ALL numbers, or only some?
*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumEvens = nums.reduce((accumulator, currentNum) => {
    
    if (currentNum %  2 === 0) {
      return accumulator + currentNum;
    }

    return accumulator;

}, 0); // What should the starting value be?

console.log(sumEvens); // Should print 30


/*
==============================================
CHALLENGE 2: Group People by Age
==============================================
Group these people by their age
Expected result:
{
  25: [{name: "Alice", age: 25}, {name: "Charlie", age: 25}],
  30: [{name: "Bob", age: 30}]
}
*/

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 }
];

const groupedByAge = people.reduce((accumulator, person) => {
    // how to check there age and group them by age
    if (!accumulator[person.age]) {
       accumulator[person.age] = [];
    } 
        accumulator[person.age].push(person);
    
    return accumulator;
}, {}); // What should the starting value be?

console.log(groupedByAge);


/*
==============================================
CHALLENGE 3: Flatten Nested Arrays
==============================================
Turn this nested array into one flat array
Expected result: [1, 2, 3, 4, 5, 6]
*/

const nested = [[1, 2], [3, 4], [5, 6]];

const flattened = nested.reduce((accumulator, currentArray) => {
    // Hint: You can use spread operator or concat
    // Your code here
    const combined = accumulator.concat(currentArray);

    return combined;

}, []); // What should the starting value be?

console.log(flattened);


/*
==============================================
CHALLENGE 4: Find the Maximum Number
==============================================
Find the largest number in the array using reduce()
Expected result: 89
*/

const numbersToMax = [23, 45, 12, 89, 34, 67];

const maxNum = numbersToMax.reduce((accumulator, currentNum) => {
    // Hint: Compare accumulator and currentNum, return the larger one
    // Your code here
    if (currentNum > accumulator) {
       return currentNum;
    }
    return accumulator;

}, -Infinity); // Is 0 the right starting value? Think about it!

console.log(maxNum);
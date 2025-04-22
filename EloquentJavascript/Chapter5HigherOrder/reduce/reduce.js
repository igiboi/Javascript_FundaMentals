function reduce(array, combine, start) {
  let current = start; // 1️⃣ Seed the accumulator
  for (let el of array) {
    // 2️⃣ Loop over each element
    current = combine(current, el); // 3️⃣ Combine old accumulator + this element
    //         	combine(0, 1) ⇒ 0 + 1 = 1
  }
  return current; // 4️⃣ Return the final accumulated value
}

// Example 1 
const numbers = [1, 2, 3, 4];

// Use reduce to sum them
const total = reduce(numbers, (accumulator, value) => accumulator + value, 0);

// start: current = 0

// 1st pass: combine(0, 1) → 1

// 2nd pass: combine(1, 2) → 3

// 3rd pass: combine(3, 3) → 6

// 4th pass: combine(6, 4) → 10

// return: 10

console.log(total); // 10

// reduce to flatten an array of arrays into single array 

// Sample nested array
const nested = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];

const flat = reduce(nested,
    (accumulator, subArray) => accumulator.concat(subArray), []);

console.log(flat);
// → [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Example 1 Goal: Fold an array of numbers into their total.
const nums = [5, 10, 15];
const sum = reduce(nums, (total, n) => total + n, 0);
console.log(sum); // 30

// Example 2 Goal: Find the largest number in an array.
const moreNums = [3, 42, 7, 19];
const max = reduce(
    moreNums, 
   (currentMax, n) => {
  if (n > currentMax) {
    return n;
  } else {
    return currentMax;
  }
},
    moreNums[0]
)

console.log(max); // 42

// different way of writing it

// const max = reduce(
//     moreNums,
//     (currentMax, n) => {
//       // If the new number n is larger than our running max, pick n;
//       // otherwise keep currentMax.
//       return n > currentMax ? n : currentMax;
//     },
//     moreNums[0]
// )

// console.log(max); // 42

// Example 3 Goal: Recreate map using only your reduce.
function mapViaReduce(array, transform) {
    return reduce(
      array,
      (acc, el) => {
        // push the transformed element into acc
        acc.push(transform(el));
        return acc; 
      },
      [] // start with an empty array
    );
}

const doubled = mapViaReduce([1,2,3], n => n*2);
console.log(doubled); // expect [2,4,6]

// Example 4 Goal: Recreate filter from reduce
function filterViaReduce(array, test) {
  return reduce(
    array,
    (acc, el) => {
      if (test(el)) {
        acc.push(el);
      }
      return acc;           // always return the accumulator
    },
    []                      // seed as an empty array, not {}
  );
}

const evens = filterViaReduce([1,2,3,4], n => n % 2 === 0);
console.log(evens); // → [2, 4]

// Example 5 Goal Flatten array 
const nested5 = [[1, 2], [3], [4, 5]];
const flat5 = reduce(
    nested5,
    (acc, arr) => acc.concat(arr),
    []
);

console.log(flat5); // [ 1, 2, 3, 4, 5 ]

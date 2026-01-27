/*
for of works on strings and arrays 

for objects you want to use for... in



const nums = [1, 2, 3, 4, 5];

// get total 
const total = nums.reduce((total, num) => {
  const newTotal = total + num;
  return newTotal;
}, 0);

console.log(total)
*/

// const nums = [1, 2, 3, 4, 5];

// let total = 0;

// for (const num of nums) {
//   const newTotal = total + num;

//   total = newTotal;
// }

// console.log(total);

function reduce(array, callback, initialTotal) {
  let total = initialTotal;
  for (const element of array) {
    const newTotal = callback(total, element)
    total = newTotal;
  }
  return total;
}

const nums = [1, 2, 3, 4, 5];

const total = reduce(nums, (total, num) => {
  return total + num;
}, 0);

console.log(total);
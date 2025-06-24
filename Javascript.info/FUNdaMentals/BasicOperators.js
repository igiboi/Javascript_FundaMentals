
// // let colors = ["red", "green", "blue"];

// // for (let i = 0; i < colors.length; i++) {
// //   console.log(colors);
// // }

// // colors.length is 3, so the loop runs 3 times.

// // But inside the loop, you're logging colors, which is the entire array.

// // So it prints the same array 3 times.


// // var nums = [1, 10, 5, -9, -1];

// // for (var i = 0; i < nums.length; i++) {
// //   console.log('nums[' + i + ']: ' + nums[i]);
// // }


// // var nums = [1, 10, 5, -9, -1];

// // for (var i = nums.length - 1; i >= 0; i--) {
// //   console.log(nums[i]);
// // }

// // for (var i = 0; i < 3; i++) {
// //   for (var j = 0; j < 3; j++) {
// //     console.log(`(${j}), ${i}`);
// //   }
// // }

// // Task 1
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// // ✏️ Task 2: Print only even numbers from 1 to 20
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//       }
// }


// let print = "JavaScript";

// for (let i = 0; i < print.length; i++) {
//   console.log(print[i]);
// }

sum = 0;

for (let i = 1; i < 100; i++) {
  sum += i;

  console.log(sum);
}


let colors = ['red', 'green', 'blue'];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

let count = 0;

for (let i = 1; i < 50; i++) {
  if (i % 3 == 0) {
    count++;
    }
}


// --> Task 1.1
// Given an array of numbers, use a for loop to compute:

// The sum of all even numbers.

// The product of all numbers ≥ 5.

// Example input:
// const nums = [2, 7, 4, 5, 10];

function computerEvenSumAndProductGE5(arr) {
  let sum = 0;
  let product = 1;
  let foundGE5 = false;

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];

    // 1) Add to sum if its even
    if (val % 2 === 0) {
      sum += val;
    }

    // 2) Multiply into product if it’s ≥ 5
    if (val >= 5) {
      product *= val;
      foundGE5 = true;
    }
  }

   // If no number ≥ 5 was found, you might want product = 0 or 1.
  // Here we’ll set product = 0 to signal “nothing ≥ 5”:
  if (!foundGE5) {
    product = 0;
  }

  return { sumEven: sum, productGE5: product };
}


const result = computerEvenSumAndProductGE5(nums);
console.log(result.sumEven);     // 16
console.log(result.productGE5);  // 350






let rows = 5; 
let star = "";

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < rows; j++) {
    star += "#";
  }
  star += "\n";
}

console.log(star);


let nums = [5, 12, 3, 25, 8];

function printAllNumbersOfArray(arr) {
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    resultArr.push(arr[i]);
  }
 
  return resultArr;
}

console.log(printAllNumbersOfArray(nums)); // [ 5, 12, 3, 25, 8 ]


// 🔁 Task 6: Print only the numbers > 10
function printOnlyNumbersGETen(arr) {
  let resultGETen = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      resultGETen.push(arr[i]);
    }
  }

  return resultGETen;
}

console.log(printOnlyNumbersGETen(nums));

// 🔁 Task 7: Create a new array with only the even numbers
function printNewEvenArray(arr) {
  let resultEvenArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      resultEvenArray.push(arr[i]);
    }
  }

  return resultEvenArray;
}

console.log(printNewEvenArray(nums));


// 🔁 Task 8: Find the largest number in the array
function findLargestNumberInArray(arr) {
  let max = arr[0];  // Start with the first value in the array

  for (let i = 0; i < arr.length; i++) { // Start at 1 since 0 is already in max
    if (arr[i] > max) {
      max = arr[i];  // Update max if current item is greater
    }
  }

  return max;
}

let nums1 = [5, 12, 3, 25, 8];
console.log(findLargestNumberInArray(nums1)); // 25


function reverseString(str) {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

console.log(reverseString("Javascript"));


function countVowels(str) {
  
}

console.log(countVowels("Luigi is learning to code")); // 9


for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


// task 10 
function countVowels(str) { 
  let vowels = 'aeiou';

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Luigi is learning to code")); // 10

let rowStar = 5;
let starOutput = '';
for (let i = 1; i <= rowStar; i++) {
  for (let j = 1; j <= i; j++) {
    starOutput += '*';
  }
  starOutput += '\n';
}

console.log(starOutput);


for (i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz ' + i);
  } else if (i % 5 === 0) {
    console.log('Buzz ' + i);
  } else if (i % 3 === 0) {
    console.log('Fizz ' + i);
  } else {
    console.log(i);
  }

}


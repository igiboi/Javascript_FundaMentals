const { use } = require("react");

function mySlice(arr, start, end) {
    let sliced = [];

    if (start === undefined) {
        start = 0;
    }

    if (end === undefined) {
        end = arr.length; 
    }

    // Collected sliced items
    for (let i = start; i < end; i++) {
        sliced.push(arr[i]);
    }
    return sliced;
}

let arr = ['a', 'b', 'c', 'd'];

console.log(mySlice(arr, 1));       // ['b', 'c', 'd']
console.log(mySlice(arr, 0, 2));    // ['a', 'b']
console.log(mySlice(arr, 2, 4));    // ['c', 'd']
console.log(arr);                   // ['a', 'b', 'c', 'd'] (unchanged)

let copyArray = mySlice(arr);

console.log(copyArray); // ['a', 'b', 'c', 'd'] (unchanged)

let nums = [5, 6, 7];

const copyNum = nums.slice(0, 3).reverse();

console.log(copyNum);
console.log(nums);

let arr1 = [1, 2, 3, 4];

const arraySliced = arr1.slice(1, 3);

console.log(arraySliced);

// Drill 2
let arr2a = [1, 2];
let arr2b = [3, 4];
// TODO: use concat
// Expected: [1, 2, 3, 4]

const combineArray = arr2a.concat(arr2b);

console.log(combineArray);

// Drill 3
let arr3a = [10, 20];
let arr3b = [30, 40];
// TODO: use spread
// Expected: [10, 20, 30, 40]

console.log([...arr3a, ...arr3b]); 

let arr4 = [10, 20, 30];
// TODO: use slice to copy
// Expected: [10, 20, 30]
const slicedArray = arr4.slice();

console.log(slicedArray);


let arr5 = [5, 6, 7];
// TODO: copy, then reverse
// Expected: [7, 6, 5]

const reversedArr = arr5.reverse();

console.log(reversedArr);

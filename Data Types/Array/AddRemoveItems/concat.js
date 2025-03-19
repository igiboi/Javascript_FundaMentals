// The method arr.concat creates a new array that includes values from other arrays and additional items.

// The syntax is:

// arr.concat(arg1, arg2...)

// Normally, it only copies elements from arrays. Other objects, even if they look like arrays, are added as a whole:

// let arr = [1, 2];

// let arrayLike = {
//   0: "something",
//   length: 1
// };

// console.log( arr.concat(arrayLike) ); // 1,2,[object Object]

// Write a function rotateArray(arr, positions) that returns a new array rotated to the left.
// Use slice to extract parts of the array and concat to combine them.
// Example:

function rotateArray(arr, positions) {
     arr.slice(positions, arr); 
    return arr.concat; 
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
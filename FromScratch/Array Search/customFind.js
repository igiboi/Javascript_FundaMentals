// customFind: mimics the behavior of Array.prototype.find()
// It takes two arguments:
// 1. arr: the array to search through
// 2. callback: a function used to test each element in the array
function customFind(arr, callback) {
  // Loop through each item in the array
  for (let i = 0; i < arr.length; i++) {
    // Call the callback function, passing in the current array item
    // If the callback returns true, we found our match
    if (callback(arr[i])) {
      // Return the matching item immediately
      return arr[i];
    }
  }

  // If the loop finishes and no item passed the callback test,
  // return undefined (just like the built-in .find() method)
  return undefined;
}


const result = customFind([3, 10, 18, 20], function (num) {
  return num > 15;
});

console.log(result); // Output: 18

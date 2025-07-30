function largestOfAll(array) {
  // Create an empty array to store the largest numbers from each sub-array
  let result = [];

  // Loop through the outer array (each element is a sub-array)
  for (let i = 0; i < array.length; i++) {
    // At each index 'i', array[i] is itself an array (called a sub-array)
    // For example, array[0] = [4, 5, 1, 3]
    // So when i === 0, subArray = [4, 5, 1, 3]
    let subArray = array[i];

    // subArray.length === 4, because there are 4 numbers: 4, 5, 1, and 3

    // Assume the first number in the sub-array is the largest
    // We'll compare all other numbers to this
    let max = subArray[0];

    // Now loop through the sub-array to find the true largest number
    // Even though array[i] is just one "element" of the outer array,
    // that "element" is an array itself — so it has .length, indexes, etc.
    for (let j = 0; j < subArray.length; j++) {
      let num = subArray[j]; // Get the current number from the sub-array

      // If this number is greater than our current max, update max
      if (num > max) {
        max = num;
      }
    }

    // After looping through the sub-array, we've found the largest number
    // Push it to our result array
    result.push(max);
  }

  // Once all sub-arrays have been processed, return the result array
  return result;
}

// Example usage:
console.log(
  largestOfAll([
    [4, 5, 1, 3], // → 5
    [13, 27, 18, 26], // → 27
    [32, 35, 37, 39], // → 39
    [1000, 1001, 857, 1], // → 1001
  ])
);
// Output: [5, 27, 39, 1001]

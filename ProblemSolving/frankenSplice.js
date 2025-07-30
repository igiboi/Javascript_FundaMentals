function frankenSplice(array1, array2, index) {
  // Create a new array to hold the final result
  // (we're not mutating array2 directly)
  let result = [];

  // Step 1: Copy the elements from array2 that come BEFORE the index
  // This ensures we start the result with the first part of array2
  for (let i = 0; i < index; i++) {
    result.push(array2[i]);
  }

  // Step 2: Insert ALL elements from array1
  // These go right after the initial part of array2
  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i]);
  }

  // Step 3: Copy the rest of array2 (from the index to the end)
  // This finishes building the full result array
  for (let i = index; i < array2.length; i++) {
    result.push(array2[i]);
  }

  // Return the new array with array1 inserted into array2 at the correct index
  return result;
}

// Test it out
let output = frankenSplice([1, 2, 3], [4, 5], 1);
console.log(output); // [4, 1, 2, 3, 5]

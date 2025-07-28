const letters = ['b', 'c'];

function customUnshift(arr, value) {
  // Step 1: Loop from the end of the array toward the beginning
  // This is to avoid overwriting values before they're moved
  for (let i = arr.length - 1; i >= 0; i--) {
    // Step 2: Shift each value one step to the right
    // Example: arr[2] = arr[1] (copy 'c' to new position)
    //          arr[1] = arr[0] (copy 'b' to new position)
    arr[i + 1] = arr[i];
  }

  // Step 3: After shifting, place the new value at index 0
  // This inserts 'a' at the front
  arr[0] = value;

  // Step 4: Return the new length of the array (just like .unshift())
  return arr.length;
}

// Logs the original array before insertion
console.log(letters); // ['b', 'c']

// Inserts 'a' at the front and logs the new length
console.log(customUnshift(letters, 'a')); // 3

// Logs the updated array after the insertion
console.log(letters); // ['a', 'b', 'c']
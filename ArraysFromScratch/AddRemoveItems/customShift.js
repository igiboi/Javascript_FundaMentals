const letters = ['x', 'y', 'z'];
 
function customShift(arr) {
  const removeFirstItem = arr[0]; // grab the first value

  for (let i = 0; i < arr.length - 1; i++) {
    //  [ [0]: x, [1]: y, [2]: z]
    //  copy the value at index 1 ('y') and store it at index 0
    arr[i] = arr[i + 1];
    // i = 0: arr[0] = arr[1] → becomes 'y'
    // i = 1: arr[1] = arr[2] → becomes 'z'
    // Output: [y, z, z]
  }

    arr.length = arr.length - 1; // shrink the array
    // [y, z]
  return removeFirstItem;
}

console.log(customShift(letters));
console.log(letters);

// this is a loop to move items to the left
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
}
  
// The left side is always the destination slot (the position),
// The right side is always the value you’re copying into that slot (the element).

// let a = 5;

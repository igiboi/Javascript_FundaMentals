function customIndexOf(arr, start, value) {
  // loop through the array
  for (let i = start; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
  // outside the loop return false
}

console.log(customIndexOf(['a', 'b', 'c'], 1, 'c')); // index of 2 
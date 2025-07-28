function customIndexOf(arr, value) {
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
  // outside the loop return false
}

console.log(customIndexOf(['a', 'b', 'c'], 'b'));
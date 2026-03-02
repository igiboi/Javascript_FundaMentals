function findLargest(array) {
  let largest = array[0];

  for (const num of array) {
    if (num > largest) {
      largest = num;
    }
  }
  return largest;
}

const largestNumber = findLargest([3, 1, 7, 2, 9, 4]); // 9
// findLargest([1, 1, 1, 1])          // 1
// findLargest([-5, -1, -10])         // -1
// findLargest([42])                  // 42

console.log(largestNumber);

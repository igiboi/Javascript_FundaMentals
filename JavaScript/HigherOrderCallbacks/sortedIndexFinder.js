// 1.) You should have a getIndexToIns function 
// that takes two arguments: an array and a number.
function getIndexToIns(array, number) {
  // 2.) You should use the sort method to sort
  // the array in ascending order.
  const sorted = array.sort((a, b) => a - b);

  // 3.) Your getIndexToIns function should return 
  // the lowest index at which the number should be inserted 
  // by using the findIndex method.
  const foundIndex = sorted.findIndex((num) => num >= number);

  if (foundIndex === -1) {
    return sorted.length;
  }
  return foundIndex;
}
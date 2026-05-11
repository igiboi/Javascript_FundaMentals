/*
  Problem: Remove Duplicates from an Array
  -----------------------------------------
  Write a function called removeDuplicates that takes an array
  and returns a new array with all duplicate values removed.
  The order of elements should be preserved.

  Examples:
    removeDuplicates([1, 2, 2, 3, 4, 4, 5])       // [1, 2, 3, 4, 5]
    removeDuplicates(["a", "b", "a", "c", "b"])    // ["a", "b", "c"]
    removeDuplicates([1, 1, 1, 1])                 // [1]
    removeDuplicates([1, 2, 3])                    // [1, 2, 3]
*/

function removeDuplicates(arr) {
  let newArr = [];

  for (const element of arr) {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  }
  return newArr;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));       // expected: [1, 2, 3, 4, 5]
console.log(removeDuplicates(["a", "b", "a", "c", "b"]));   // expected: ["a", "b", "c"]
console.log(removeDuplicates([1, 1, 1, 1]));                 // expected: [1]
console.log(removeDuplicates([1, 2, 3]));                    // expected: [1, 2, 3]

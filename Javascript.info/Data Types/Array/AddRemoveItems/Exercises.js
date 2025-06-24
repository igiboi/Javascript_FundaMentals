// Problem 1: Append Element
// Write a function appendElement(arr, element) that uses the push method to add element to the end of the array, then returns the modified array.
function appendElement(arr, element) {
    arr.push(element)
    return arr;
}

console.log(appendElement([1, 2, 3], 4));

// Problem 2: Remove Last Element
// Write a function removeLast(arr) that uses the pop method to remove the last element.
// Return an object with two properties: the removed element and the updated array.

function removeLast(arr) {
    const removedElement = arr.pop();
  return {  removed: removedElement, array: arr };
}

console.log(removeLast([1, 2, 3])); // Expected output: { removed: 3, array: [1, 2] }

// Problem 3: Prepend Element
// Write a function prependElement(arr, element) that uses the unshift method to add element to the beginning of the array, then returns the new array.
function prependElement(arr, element) {
    arr.unshift(element);
    return arr; 
}

console.log(prependElement([1, 2, 3], 0)); // Expected result: [0, 1, 2, 3]

// Problem 4: Remove First Element
// Write a function removeFirst(arr) that uses the shift method to remove the first element. 
// Return an object with the removed element and the updated array.
function removeFirst(arr, element) {
   const removedFirstItem =  arr.shift(element);
    return { removed: removedFirstItem, array: arr }; 
}

console.log(removeFirst([1, 2, 3])); // Expected result: { removed: 1, array: [2, 3] }

// Write a function getSubarray(arr, start, end) that returns a new array containing the elements
// from the start index up to, but not including, the end index using the slice method.
function getSubarray(arr, start, end) {
   return arr.splice(start, end);
}

console.log(getSubarray([1, 2, 3, 4, 5], 1, 4)); // Expected result: [2, 3, 4])

// Problem 6: Merge Two Arrays
// Write a function mergeArrays(arr1, arr2) that merges two arrays using the concat method, then returns the merged array.
function mergeArrays(arr1, arr2) {
    const combineArr = arr1.concat(arr2);
    return combineArr;
}

console.log(mergeArrays([1, 2], [3, 4]));

// Problem 7: Remove Element at a Given Index
// Write a function removeAtIndex(arr, index) that uses the splice method to remove the element at the specified index.
//  Return an object with the removed element and the updated array.
function removeAtIndex(arr, index) {
    const removeIndex = arr.splice(index);
    return { removed: removeIndex, array: arr}
}

console.log(removeAtIndex([1, 2, 3, 4], 2));
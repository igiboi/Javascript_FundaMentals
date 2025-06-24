function swapFirstLast(arr) {
  // If the array has fewer than two elements, return it unchanged.
  if (arr.length < 2) return arr;

  // Remove and store the first element.
  let removedFirstElement = arr.shift();
  // Remove and store the last element.
  let removedLastElement = arr.pop();

  // Insert the removed last element at the beginning.
  arr.unshift(removedLastElement);
  // Append the removed first element at the end.
  arr.push(removedFirstElement);

  return arr;
}

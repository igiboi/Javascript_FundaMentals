function chunkArrayInGroups(arr, num) {
  // Create an empty array to store all the smaller chunks
  let empty = [];

  // Loop through the array, jumping by 'num' positions each time
  // Instead of i++ (jump by 1), we use i += num (jump by chunk size)
  // Example: if num = 2, we go i = 0, then i = 2, then i = 4, etc.
  for (let i = 0; i < arr.length; i += num) {
    // Slice out a chunk starting at position 'i' and ending at 'i + num'
    // .slice(start, end) extracts items from 'start' up to (but not including) 'end'
    // Example: arr.slice(0, 2) gets items at index 0 and 1
    // The last chunk might be smaller if there aren't enough items left
    const chunk = arr.slice(i, i + num);

    // Add this chunk to our result array
    // This builds a 2D array: [[chunk1], [chunk2], [chunk3]]
    empty.push(chunk);
  }

  // Return the array of chunks
  return empty;
}

/* 
HOW IT WORKS - EXAMPLE:
chunkArrayInGroups([1, 2, 3, 4, 5], 2)

Loop 1: i = 0
  - chunk = arr.slice(0, 2) = [1, 2]
  - empty = [[1, 2]]

Loop 2: i = 2
  - chunk = arr.slice(2, 4) = [3, 4]
  - empty = [[1, 2], [3, 4]]

Loop 3: i = 4
  - chunk = arr.slice(4, 6) = [5]
  - empty = [[1, 2], [3, 4], [5]]

Return: [[1, 2], [3, 4], [5]]


Whenever you need to "split something into groups of N", use this pattern:

let result = [];
for (let i = 0; i < array.length; i += groupSize) {
  let group = array.slice(i, i + groupSize);
  result.push(group);
}
return result;
*/

const a = ["apple", "banana", "cherry", "date"];
const b = ["banana", "date", "fig", "apple"];


function commonElements(a, b) {
  const setA = new Set(a);
  const duplicates = new Set();

  b.forEach((word) => {
    if (setA.has(word)) {
      duplicates.add(word);
    }
  });
  return [...duplicates];
}

console.log(commonElements(a, b));
// ["apple", "banana", "date"]


const nums = [1, 2, 3, 2, 4, 3, 5, 1];

function removeDuplicates(nums) {
  const noDuplicates = [...new Set(nums)];

  return noDuplicates;
}

console.log(removeDuplicates(nums));
// Expected output:
// [1, 2, 3, 4, 5]

const a = [1, 2, 3, 4];
const b = [3, 4, 5, 6];

// Expected output:
// [1, 2, 3, 4, 5, 6]


function uniqueElements(a, b) {
  const combinedArray = a.concat(b);
  // const combinedArray = [...a, ...b]; you can also do this

  const noDuplicates = [...new Set(combinedArray)];

  return noDuplicates;
}

console.log(uniqueElements(a, b));
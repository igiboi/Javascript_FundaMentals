/* 

Count how many times an element appear in the array and return the count of how many times it was found 


countOccurrences([1, 2, 3, 2, 4, 2], 2)      // returns: 3


The function countOccurences receives two arguments one for array and second part is what we use to track how many times we see it
  we will need a variable to keep the count 
  we will need to loop through the array

*/


function countOccurrences(arr, value) {
  let count = 0;

  for (let element of arr) {
    if (element === value) {
      count++;
    }
  }
  return count;
}

console.log(countOccurrences([1, 2, 3, 2, 4, 2], 2));
console.log(countOccurrences(["a", "b", "a", "c"], "a"));
console.log(countOccurrences([1, 2, 3], 5));
console.log(countOccurrences([], 1));
console.log(countOccurrences([5, 5, 5, 5], 5));




function getProductNames(products) {
  // ← Parameter name matches what it is
  let productNames = []; // ← More descriptive than "result"

  for (let product of products) {
    // ← Clearer
    productNames.push(product.name);
  }

  return productNames;
}


console.log(
  getProductNames([
    { name: "Laptop", price: 999 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 },
  ])
);

console.log(getProductNames([{ name: "Apple", price: 1.5 }]));

console.log(getProductNames([]));



let arr = ["I", "study", "JavaScript"];

function mySplice(arr, start, deleteCount, ...itemsToAdd) {
let deleted = [];

// Step 1: Collect deleted
for (let i = start; i < start + deleteCount; i++) {
  deleted.push(arr[i]);
}

// Step 2: Collect items to keep
let kept = [];
    
// loop from zero to the start - before deleted items on array    
for (let i = 0; i < start; i++) {
  kept.push(arr[i]);
    }
// items to add in the array
for (let i = 0; i < itemsToAdd.length; i++) {
   kept.push(itemsToAdd[i]);
}

// loop for after deleted item until end of array. 
for (let i = start + deleteCount; i < arr.length; i++) {
  kept.push(arr[i]);
}

// Step 3: Mutate original array
arr.length = 0;
for (let i = 0; i < kept.length; i++) {
  arr.push(kept[i]);
}

// Step 4: Return deleted
return deleted;

}

console.log(mySplice(arr, 1, 1)); // ["study"]
// Starting from index 1 it removed 1 element.



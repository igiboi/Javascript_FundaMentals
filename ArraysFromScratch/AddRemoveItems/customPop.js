const items = ['a', 'b', 'c'];

function customPop(arr) {
    const lastItem = arr[arr.length - 1]; // store the last value
    
    arr.length = arr.length - 1; // shrink the array
    
   return lastItem; // return removed value
}

console.log(customPop(items));
console.log(items);
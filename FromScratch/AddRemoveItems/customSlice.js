function mySlice(arr, start, end) {
    let sliced = [];

    if (start === undefined) {
        start = 0;
    }

    if (end === undefined) {
        end = arr.length; 
    }

    // Collected sliced items
    for (let i = start; i < end; i++) {
        sliced.push(arr[i]);
    }
    return sliced;
}

let arr = ['a', 'b', 'c', 'd'];

console.log(mySlice(arr, 1));       // ['b', 'c', 'd']
console.log(mySlice(arr, 0, 2));    // ['a', 'b']
console.log(mySlice(arr, 2, 4));    // ['c', 'd']
console.log(arr);                   // ['a', 'b', 'c', 'd'] (unchanged)

let copyArray = mySlice(arr);

console.log(copyArray); // ['a', 'b', 'c', 'd'] (unchanged)

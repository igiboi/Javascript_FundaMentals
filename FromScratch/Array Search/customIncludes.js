function customIncludes(arr, value) {
    // loop through the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false; 
    // outside the loop return false
}

console.log(customIncludes(['a', 'b', 'c'], 'b')); // true

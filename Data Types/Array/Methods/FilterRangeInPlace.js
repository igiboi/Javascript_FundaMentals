// Write a function filterRangeInPlace(arr, a, b);
// that gets an array arr and removes from it all values except those that are between a and b.
// The test is a < arr[i] < b

function filterRangeInPlace(arr, a, b) {
    // Use the filter method to create a new array with elements in the range (a < arr[i] < b)
    arr.length = 0; // Clear the original array
    arr.push(...arr.filter(item => item > a && item < b));
}

// Example usage:
let arr = [5, 3, 8, 1, 2, 7];
filterRangeInPlace(arr, 2, 6);

console.log(arr); // Output will be [5, 3] because only values between 2 and 6 are kept

function filterRangeEx2(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

        // remove if outside of the interval
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}
// Problem 1: Sum of Array Elements
function sumArray(array) {
    return array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
}

console.log(sumArray([1, 2, 3, 4])); // 10


// Problem 2: Multiply All Numbers in Array
function productArray(array) {
    return array.reduce((accumulator, currentValue) => {
    //   console.log('Accumulator:', accumulator + ' CurrentValue:', currentValue )
    return accumulator * currentValue;  // Multiply each element with the accumulator
  }, 1);  // Start with 1, as multiplying by 1 doesn't change the result
}

console.log(productArray([1, 2, 3, 4])); // Output: 24

// Accumulator: 1 CurrentValue: 1
// Accumulator: 1 CurrentValue: 2
// Accumulator: 2 CurrentValue: 3
// Accumulator: 6 CurrentValue: 4

// Problem 3: Sum of Even Numbers
function sumOfEvenNumbers(array) {
    return array.reduce((accumulator, currentValue) => {
        if (currentValue % 2 === 0) {
            return accumulator + currentValue;
        }
        return accumulator;
    }, 0);
}

console.log(sumOfEvenNumbers([1, 2, 3, 4]));
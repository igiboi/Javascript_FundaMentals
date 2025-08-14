// “Take an array and return a new array containing only the elements that pass a test.”
function customFilter(arr, callback) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
         if (callback(arr[i], i, arr)) {
             result.push(arr[i]);
         } 
    }

    return result;
}

let nums = [5, 10, 15, 20];

let evens = customFilter(nums, (num) => num % 2 === 0);
console.log(evens); // [10, 20]
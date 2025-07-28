// arr.push(...items) – adds items to the end,
// arr.pop() – extracts an item from the end,
// arr.shift() – extracts an item from the beginning,
// arr.unshift(...items) – adds items to the beginning.

// The arr.splice method is a Swiss army knife for arrays. It can do everything: insert, remove and replace elements.

// syntax

//arr.splice(start[, deleteCount, elem1, ..., elemN])

let arr = ['I', 'study', 'JavaScript'];

//Starting from the index 1 it removed 1 element.
let removeOneElement = arr.splice(1, 1);

console.log(removeOneElement); // ['study']

console.log(arr); // [('I', 'JavaScript')];


// remove 3 elements and replace them with other two: 
let arrExample = ['I', 'study', 'JavaScript', 'right', 'now'];

arrExample.splice(0, 3, "Let's", "dance");

console.log(arrExample);
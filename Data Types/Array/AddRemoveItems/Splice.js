// full syntax of the splice()
Array.splice(start, removeCount, newItem, newItem, newItem,);

let arr = ['I', 'study', 'JavaScript'];

arr.splice(1, 1); // from index 1 remove 1 element

console.log(arr); // // ["I", "JavaScript"]

let arr1 = ['I', 'study', 'JavaScript', 'right', 'now'];

arr1.splice(0, 3, "Let's", "dance");

console.log(arr1); // [ "Let's", 'dance', 'right', 'now' ]

// You can store the removed items 
let arr2 = ['I', 'study', 'JavaScript', 'right', 'now'];

let removed = arr2.splice(0, 2);

console.log(removed); // [ 'I', 'study' ]
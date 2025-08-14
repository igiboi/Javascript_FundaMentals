let a1 = [1, 2];
// TODO: add 3 to the end
// a1 should become [1, 2, 3]
a1.push(3);

console.log(a1);

let a2 = [1, 2, 3];
// TODO: remove last, store in removed2
let removed2 = a2.pop();
// a2 should become [1, 2]; removed2 should be 3
console.log(a2);

function customPop(arr) {
// The first element is at index 0.
// The last element is at index length - 1.
    
  const lastElement = arr[arr.length - 1];

    arr.length = arr.length - 1;

    return { lastElement, arr };
}

console.log(customPop(a2));
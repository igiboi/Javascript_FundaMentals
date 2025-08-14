function filterRange(arr, a, b) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      result.push(arr[i]);
    }
  }

  return result;
}

let arr = [5, 3, 8, 1];

console.log(filterRange(arr, 1, 4));


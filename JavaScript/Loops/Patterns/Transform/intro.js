function squareAll(numbers) {
  let result = [];

  for (let number of numbers) {
    result.push(number * number);
  }
  return result;
}

console.log(squareAll([1, 2, 3, 4]));  // Expected: [1, 4, 9, 16]

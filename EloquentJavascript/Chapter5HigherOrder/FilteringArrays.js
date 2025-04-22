function filter(array, test) {
  let passed = []; // 1. Start with an empty result array
  for (let element of array) {
    // 2. For each element in the input array...
    if (test(element)) {
      //    — call the `test` function on it
      passed.push(element); //    — if `test` returns true, add it to `passed`
    }
  }
  return passed; // 3. After checking all, return the new array
}

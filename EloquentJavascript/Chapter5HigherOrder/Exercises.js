function loop(startValue, testFn, updateFn, bodyFn) {
  let current = startValue; // 1) seed the loop

  while (testFn(current)) {
    // 2) keep going while testFn is true
    bodyFn(current); // 3) run the body with the current value
    current = updateFn(current); // 4) update to the next value
  }
}

// Usage: should log 3, then 2, then 1
loop(
  3, // startValue
  (n) => n > 0, // testFn: stop when n ≤ 0
  (n) => n - 1, // updateFn: subtract 1 each time
  console.log // bodyFn: log the current value
);


// Everything Exercise
function every(array, test) {
  for (let element of array) {
    if (!test(element)) {
      // If any element fails the test, we can stop immediately
      return false;
    }
  }
  // No failures → everything passed (including the empty array case)
  return true;
}


function everyUsingSome(array, test) {
  // “It is not the case that SOME element fails the test”
  return !array.some((element) => !test(element));
}


console.log(every([1, 3, 5], n => n < 10));            // true
console.log(every([2, 4, 16], n => n < 10));           // false
console.log(every([], n => n < 10));                   // true

console.log(everyUsingSome([1, 3, 5], n => n < 10));   // true
console.log(everyUsingSome([2, 4, 16], n => n < 10));  // false
console.log(everyUsingSome([], n => n < 10));          // true

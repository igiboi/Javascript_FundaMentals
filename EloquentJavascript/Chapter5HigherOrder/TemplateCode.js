function loopHelper(array, callback, startValue) {
    // 1) Initialize your “result” (the accumulator or flag)
    let result = startValue;

    // 2) Visit each element
    for (let element of array) {

    // 3) Update result however this helper needs
    //    (for reduce: result = callback(result, element))
    //    (for map:    result.push(callback(element)))
    //    (for filter: if (callback(element)) result.push(element))
    //    (for every:  if (!callback(element)) return false)
        // result = /* callback-driven update */
        result = callback(result, element);
    }

      // 4) Return the final result
  return result;
}

// 1) REDUCE
function reduce(array, combine, start) {
  let current = start;                          // 1️⃣ seed
  for (let el of array) {                       // 2️⃣ loop
    current = combine(current, el);             // 3️⃣ update by calling combine(acc, el)
  }
  return current;                              // 4️⃣ return
}

// 2) MAP
function map(array, transform) {
  let mapped = [];                            // 1️⃣ seed result array
  for (let element of array) {                // 2️⃣ loop over elements
    mapped.push(transform(element));          // 3️⃣ transform + push
  }
  return mapped;                              // 4️⃣ return new array
}

// 3) FILTER
function filter(array, test) {
  let passed = [];                    // 1️⃣ seed result array
  for (let el of array) {             // 2️⃣ loop over elements
    if (test(el))                     //    only push if test passes
      passed.push(el);
  }
  return passed;                      // 4️⃣ return filtered array
}

// 4) EVERY
function every(array, test) {
  for (let el of array) {             // 1️⃣–2️⃣ loop over elements
    if (!test(el))                    // 3️⃣ if any fail…
      return false;                   //    exit early
  }
  return true;                        // 4️⃣ if none failed
}
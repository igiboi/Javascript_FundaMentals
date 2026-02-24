function uniteUnique(...array) {
  const flattened = array.flat(); // step 1: flatten
  const unique = new Set(flattened); // step 2: remove duplicates
  return Array.from(unique); // step 3: convert back to array
}

// Manual approach

function uniteUnique(...arrays) {
  const result = [];

  for (const array of arrays) {
    // loop through each array
    for (const value of array) {
      // loop through each value
      if (!result.includes(value)) {
        // only add if not already in result
        result.push(value);
      }
    }
  }

  return result;
}

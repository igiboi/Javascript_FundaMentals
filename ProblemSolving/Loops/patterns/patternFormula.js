/*

The Patterns You Now Know:

1. Filter Pattern:

function filterPattern(items) {
  let result = [];
  for (let item of items) {
    if (condition) {
      result.push(item);
  }
}
  return result;
}



2. Count Pattern: (count up total)

function countPattern(items) {
  let count = 0;
  for (let item of items) {
    if (condition) {
      count++;
  }
}
  return count;
}



3. Accumulate Pattern (Build up total)

function accumulatePattern(items) {
  let total = 0;
  for (let item of items) {
    total += value;
  }
  return total;
}


4. Find Maximum Pattern (Track best item)

function maximumPattern(items) {
  let best = initialValue;
  for (let item of items) {
    if (item is better than best) {
      best = item;
    }
  }
  return best;
}

5. Transform Pattern (takes each item and transform into something else)

function transformPattern(items) {
  let result = [];              // 1. Create collection
  
  for (let item of items) {     // 2. Loop through items
    let transformed = ???;      // 3. Change/extract from item
    result.push(transformed);   // 4. Add transformed version
  }
  
  return result;                // 5. Return collection
}

6. Validation pattern
function validationPattern(items, condition) {
  for (let item of items) {
    if (item does NOT meet condition) {
      return false;  // One failure = ALL fail
    }
  }
  return true;  // All passed!
}

- Filter? (collecting matches)
- Transform? (changing structure)
- Accumulate? (building up total)
- Find? (finding best)

*/
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

*/
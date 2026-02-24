function sumAll([n, m]) {
  // a variable to hold the total result
  let result = 0;

  // variable temp to hold the value and not lost it
  let temp = m;
  // if statement to swap which variable should be the smallest
  if (n > m) {
    m = n;
    n = temp;
  }
  for (let i = n; i <= m; i++) {
    result += i;
  }
  return result;
}


// Methods
function sumAll([n, m]) {
  let min = Math.min(n, m);
  let max = Math.max(n, m);

  return Array.from({ length: max - min + 1 }, (_, i) => min + i)
    .reduce((acc, curr) => acc + curr, 0);
}
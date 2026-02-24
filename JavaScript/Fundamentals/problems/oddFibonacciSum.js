function sumFibs(number) {
  let result = 0; // accumulates the sum of odd Fibonacci numbers
  let previous = 0; // tracks the previous Fibonacci number
  let current = 1; // tracks the current Fibonacci number

  while (current <= number) {
    if (current % 2 === 1) {
      result += current;
    }
    let nextFib = previous + current;
    previous = current;
    current = nextFib;
  }
  return result;
}
 
function isPrime(number) {
  // 1. guard clause: number less than 2 → return false
  if (number < 2) {
    return false;
  }
  // 2. loop divisor from 2 up to (number - 1)
  //      if number divides evenly by divisor → return false
  for (let divisor = 2; divisor < number; divisor++) {
    if (number % divisor === 0) {
      return false;
    }
  }
  // 3. loop finished, no divisor found → return true
  return true;
}

// 4. export: same as the greet example, with isPrime in place of greet
module.exports = { isPrime };
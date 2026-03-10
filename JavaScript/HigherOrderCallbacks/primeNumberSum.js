// Example call: sumPrimes(10) → should return 17 (2+3+5+7)

// HELPER FUNCTION: answers one question — "is this number prime?"
function isPrime(n) {
  // try dividing n by every number from 2 up to (but not including) n
  for (let i = 2; i < n; i++) {
    // if n divides evenly by i, it has a divisor other than 1 and itself → not prime
    // e.g. n=4, i=2 → 4 % 2 === 0 → return false
    if (n % i === 0) return false;
  }
  // if no divisor was found, n is prime → return true
  // e.g. n=7 → tried 2,3,4,5,6 → none divided evenly → return true
  return true;
}

// MAIN FUNCTION: finds all primes up to number and sums them
function sumPrimes(number) {
  // edge case: no primes below 2, return 0 immediately
  if (number < 2) return 0;

  // STEP 1: build an array of every number from 2 up to number
  // e.g. number=10 → nums = [2, 3, 4, 5, 6, 7, 8, 9, 10]
  const nums = [];
  for (let i = 2; i <= number; i++) {
    nums.push(i); // add each number to the array one by one
  }

  // STEP 2: filter — pass each number to isPrime
  //         isPrime returns true or false, filter keeps only the trues
  //         [2,3,4,5,6,7,8,9,10] → isPrime filters → [2,3,5,7]
  return nums.filter(isPrime)

  // STEP 3: reduce — collapse [2,3,5,7] into a single sum
  //         sum starts at 0 (the second argument)
  //         pass 1: sum=0,  num=2 → 0+2  = 2
  //         pass 2: sum=2,  num=3 → 2+3  = 5
  //         pass 3: sum=5,  num=5 → 5+5  = 10
  //         pass 4: sum=10, num=7 → 10+7 = 17
  //         final result: 17
  .reduce((sum, num) => sum + num, 0);
}

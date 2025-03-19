function fizzBuzz(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 15 === 0) {
      // i divisible by both 3 and 5
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      // i divisible by 3
      console.log('Fizz');
    } else if (i % 5 === 0) {
      // i divisible by 5
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

// Call the function to execute FizzBuzz
fizzBuzz(1, 30);

function sum(a, b) {
    const total = a + b;

    console.log('total', total);
}

console.log(sum(5, 10));
// prints "total 15" from inside, then "undefined" because there's no return


// Problem 1: Debugging vs Returning
// Write a function that takes two numbers and returns their product. Then, call it inside a console.log.

function multiply(a, b) {
    const product = a * b;
    return product; // return instead of console.log
}

console.log(multiply(5, 10)); 
// prints 50

// ❌ Wrong approach (logging only, no return)
// Problem 2: Reuse in another function
function double(x) {
  console.log(x * 2); // only logs, doesn't return, 10
}

function triple(x) {
  return double(x) + x; // 🚨 broken
}

console.log(triple(5));
// What happens? → NaN (because double(x) is undefined)

// ✅ Correct approach (using return) 
function double(x) {
  return x * 2; // return value, reusable
}

function triple(x) {
  return double(x) + x; // reuse double
}

console.log(triple(5)); // 15
console.log(double(5)); // 10
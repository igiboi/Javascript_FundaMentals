const multiply = (a, b) => a * b;
const calculate = (a, b, action) => action(a, b);

console.log(calculate(2, 3, multiply)); // 6

function greaterThan(n) {
    return m => m > n;
}

let greaterThan10 = greaterThan(10);

console.log(greaterThan10(11));

function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
    }
}

noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1
// The Math.min function returns the smallest number in the list of arguments, which in this case is 1.

// We can even write functions that provide new types of control flow.
function unless(test, then) {
    if (!test) then();
}

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}


repeat(10, n => {
    unless(n % 2 == 1, () => {
        console.log(n, "is even");
    })
})

///  higher-order functions shine is data processing
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));
console.log(add5(3));

/*
What happens when makeAdder(5) is called?
What does add5 have access to?
What gets logged for each console.log?

1. When makeAdder(5) is called, it creates a lexical environment where x = 5.

2.  add5 doesn't have access to the function makeAdder(x) itself. 
  add5 IS the anonymous function that was returned, and that function has access to the lexical environment where x = 5.
Think of it like: add5 = function(y) { return x + y; } with x locked in as 5.

3.
add5(2) → 5 + 2 = 7
add10(2) → 10 + 2 = 12
add5(3) → 5 + 3 = 8

*/

function createCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

// count++ is postfix, so it returns the current value then increments
// First call: returns 0, then increments to 1
// Second call: returns 1, then increments to 2
// Third call: returns 2, then increments to 3

function makeMultiplier(x) {        // x = 5
  return function(y) {              // y = 10
    return function(z) {            // z = 3 (both times)
      x = x * 2;                    // This MODIFIES x permanently!
      return x + y + z;
    };
  };
}

const func = makeMultiplier(5);     // Creates closure with x = 5
const func2 = func(10);             // Creates closure with y = 10

/* 
First call: func2(3)

x = x * 2 → x becomes 5 * 2 = 10
Returns 10 + 10 + 3 = 23
BUT x is now permanently 10!

Second call: func2(3)

x = x * 2 → x becomes 10 * 2 = 20 (using the modified x!)
Returns 20 + 10 + 3 = 33

Why it's tricky:

Three levels of nesting - x, y, and z are in different scopes
x gets modified - most closure examples don't modify the outer variable
The modification persists - x doesn't reset between calls
Easy to lose track - you have to remember x changed after the first call

This tests whether you understand that closures capture references, not values, AND that modifications to those variables persist.

*/
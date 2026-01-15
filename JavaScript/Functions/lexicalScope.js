// const name = "Global";

// function outer() {
//   const name = "Outer";

//   function inner() {
//     console.log(name); // What does this print? Outer
//   }

//   return inner;
// }

// const myFunc = outer();
// myFunc(); // "Outer"

function outer() {
  let value = "outer";        // Step 1
  console.log('outer function ran');
  function inner() {           // Step 2 (definition, NOT execution)
    console.log(value);
  }
  
  value = "modified";          // Step 3
  
  return inner;                // Step 4
}

const func = outer();          // Steps 1-4 happen here
func();                        // Step 5: NOW inner() runs



const functions = [];

for (var i = 0; i < 3; i++) {
  functions.push(function() {
    console.log(i);
  });
}

functions[0](); // ?
functions[1](); // ?
functions[2](); // ?


// Example 1
function test1() {
  return function() {
    return "Hello";
  };
}

const a = test1();
console.log(a);      // [Function (anonymous)]
console.log(a());    // Hello

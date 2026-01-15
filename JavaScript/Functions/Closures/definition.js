// A closure is when an inner function retains access to variables from its outer function's scope, 
// even after the outer function has finished executing. 
// This happens because JavaScript functions maintain a reference to their lexical environment. 
// For example, if I create a counter function that returns an increment function, 
// that increment function can still access and modify the count variable because 
// it 'closes over' that variable. This is useful for creating private variables and data encapsulation.

function parentFunction() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  return increment;
}

const myClosure = parentFunction();
console.log(parentFunction()); // [Function: increment]
myClosure(); // 1
myClosure(); // 2
myClosure(); // 3

/* 

When increment is created inside createCounter, it forms a permanent connection to count. 
Even after createCounter finishes and returns, that connection doesn't break. The increment function is still "holding onto" count, 
so JavaScript keeps count alive in memory.
Think of it like this: increment was born inside createCounter's environment, and it carries a piece of that environment with it wherever it goes.

So when we do:
javascriptconst myCounter = createCounter();
We're not just getting a function. We're getting a function plus its private count variable that only it can access.

*/
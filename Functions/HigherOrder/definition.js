/* 
  A higher order function takes a function as an argument(parameter)

returns a function. Treating functions like values that can be passed around.
*/

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action();
  }
}

repeat(3, function () {
  console.log("Hello!");
})

/*
What if we want the action function to know which iteration it's on?
Challenge: Modify repeat so it passes the current index i to the action function.

*/

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i); // How do we pass i to action?
  }
}

function execute(callback) {
  callback(5); // ← Notice: no return here!
}

const result = execute(function (x) {
  return x * 2;
});

console.log(result);
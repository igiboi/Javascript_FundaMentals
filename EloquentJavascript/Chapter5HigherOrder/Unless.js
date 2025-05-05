function unless(test, then) {
  if (!test) then();
}
// unless is a normal function that accepts two arguments:
// test → a boolean condition (true or false)
// then → a function you want to run only if test is false.
// ✅ It checks:
// If test is false, then run the then() function.

// repeat function
function repeat(times, action) {
  for (let i = 0; i < times; i++) {
    action(i);
  }
}

// Use them
repeat(10, n => {
  unless(n % 3 !== 0, () => {
    console.log(n, "is divisible by 3");
  });
});

// Every time repeat runs, you call unless fresh
// with a new test and a new action.
// unless checks: if test is false, do the action.
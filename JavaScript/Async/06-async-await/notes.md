# async / await (+ try/catch error handling)

> Answer each in your OWN words underneath. Reason it out, don't copy.
> async/await is SYNTAX SUGAR over promises (lesson 05) — same machinery
> underneath, nicer to read/write. This is what you'll write day-to-day.

## async — what it does

**Q1.** When you put `async` before a function, what does that function ALWAYS
return — no matter what you write inside it? (The quiz answer is the concept.)
> A:

**Q2.** So an async function that just does `return 5` — what do you actually get
back when you call it? A plain `5`, or something wrapping it?
> A:

## await — what it does

**Q3.** In your OWN words, what does `await` do to the line it's on? What is it
"waiting" for before moving to the next line?
> A:

**Q4.** WHERE is `await` allowed? (The passage is specific.) And why do you think
it's restricted to those places — what would go wrong if you could `await`
anywhere?
> A:

**Q5.** Trace this from the passage's example. A function awaits a 2-second delay
before printing a greeting, but "First Printed Message!" prints BEFORE the
greeting. Explain why — connect it to lesson 01 (does await FREEZE the whole
program, or just pause THIS function while other code runs?).
> A:

## async/await vs .then() — same thing, cleaner

**Q6.** Here is the SAME operation two ways. Compare them — what did async/await
remove that made the promise version harder to read? (This is your lesson 05 Q12
prediction — did you call it?)
```js
// promise chain
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))

// async/await
async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
}
```
> A:

**Q7.** In the async version, notice `const res = await fetch(url)`. In the promise
version, `res` only existed INSIDE the `.then()` callback. What does await let you
do with the resolved value that .then() made awkward?
> A:

## Error handling — try/catch replaces .catch()

**Q8.** With promise chains you handled errors with `.catch()` at the end. With
async/await, what do you wrap your code in instead? Name the two blocks and what
each is for.
> A:

**Q9.** In this example, the `try` block has TWO awaits. If the FIRST `await fetch()`
fails, does the second `await response.json()` still run? Where does execution
jump?
```js
async function fetchUserData() {
  try {
    let response = await fetch(url);
    let userData = await response.json();
    console.log(userData);
  } catch (error) {
    console.log("Error:", error);
  }
}
```
> A:

**Q10.** Connect it: the `.catch()` at the end of a chain caught errors from ANY
step (lesson 05 Q9). How is a single `try/catch` around multiple awaits the SAME
idea? What do they have in common?
> A:

## The 3 FCC quiz questions (answer + why the wrong ones are wrong)

**Q11.**
  - Primary purpose of the `async` keyword?
  - Where can `await` be used?
  - What happens when an error occurs in an awaited Promise?
> A:

## Connect it forward

**Q12.** You're about to build the Weather App. It'll `await fetch()` the weather
API, then `await res.json()`, wrapped in try/catch. Sketch (plain English or
pseudocode) the shape of that function before you write the real thing.
> A:

## Gotchas / things that tripped me up
> (esp. Q5 — "await pauses THIS function, not the whole program" — and Q2, that an
> async function returns a PROMISE even when you return a plain value)

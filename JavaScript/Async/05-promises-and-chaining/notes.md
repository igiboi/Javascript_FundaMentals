# Promises & promise chaining

> Answer each in your OWN words underneath. Reason it out, don't copy.
> This is THE foundation lesson — async/await, fetch, and error handling are all
> built on this. Worth going slow and getting airtight.

## The three states

**Q1.** A Promise has three states. Name them, and say what triggers each transition:
  - starts as →
  - becomes ______ when →
  - becomes ______ when →

**Q2.** Can a Promise go from fulfilled BACK to pending, or flip from fulfilled to
rejected later? Once it settles, is that final? (Think about the word "eventual"
in the definition.)
> A:

## resolve / reject / .then / .catch

**Q3.** In this code, what exactly are `resolve` and `reject`? Who calls them, and
when?
```js
const aPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Operation successful!"), 1000);
});
```
> A:

**Q4.** Match each method to the state it responds to:
  - `.then()`  → runs when the promise is ______
  - `.catch()` → runs when the promise is ______

**Q5.** Connect to lesson 01: the `setTimeout` inside the promise takes 1 second.
During that second, is JavaScript frozen? Where does that waiting happen, and when
does the `.then()` callback actually run?
> A:

## Promise chaining — the payoff (cashes in the lesson 04 mystery)

**Q6.** Back in lesson 04 you asked why there were TWO `.then()` calls and couldn't
fully explain it. NOW you can. In this chain, explain what each `.then()` receives
and what it passes to the NEXT one:
```js
fetch(url)
  .then(response => response.json())   // then #1
  .then(data => console.log(data))     // then #2
```
> then #1 gets ______ and returns ______
> then #2 gets ______

**Q7.** The key rule of chaining: "Each `.then()` can RETURN a new promise." In the
two-API-call example, the second `.then()` does `return fetch(...)`. Why does
returning a promise matter — what does it let the NEXT `.then()` do?
> A:

**Q8.** Rewrite this in plain English as a sequence of steps ("First... then...
then...  if anything breaks..."):
```js
fetch(url1)
  .then(res => res.json())
  .then(data => { console.log(data); return fetch(url2); })
  .then(res => res.json())
  .then(data2 => console.log(data2))
  .catch(err => console.error(err));
```
> A:

## .catch() placement (the interview favorite)

**Q9.** The passage says one `.catch()` at the END catches errors from ANY previous
step. Why is that better than putting a `.catch()` after every single `.then()`?
What does it say about how errors travel down a chain?
> A:

**Q10.** If the FIRST fetch fails (network down), which `.then()` callbacks run, and
which get skipped? Where does control jump to?
> A:

## The 3 FCC quiz questions (answer + why the wrong ones are wrong)

**Q11.**
  - The three possible states of a Promise?
  - Purpose of .then() in a chain?
  - Where does .catch() typically go, and why?
> A:

## Connect it forward

**Q12.** Next lesson is error handling (.catch/.finally), then async/await. Guess:
async/await is "syntax sugar" over promises. Looking at the chain in Q8 — what do
you think makes it hard to read, that async/await might clean up?
> A:

## Gotchas / things that tripped me up
> (esp. Q6/Q7 — "return a promise to keep the chain going" is THE concept. Note
> anything fuzzy about what flows from one .then to the next.)

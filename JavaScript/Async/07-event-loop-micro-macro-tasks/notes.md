# event loop: microtasks vs macrotasks

> Answer each in your OWN words underneath. Reason it out, don't copy.
> This DEEPENS lesson 01. Back there = "one callback queue." Truth = TWO queues,
> and one always wins. This is senior-level interview polish.

## The two queues

**Q1.** There are two queues, not one. Name what goes in each, and which one has
priority:
  - microtask queue → holds ______ , priority: ______
  - macrotask queue → holds ______ , priority: ______

**Q2.** State the core rule in one sentence: after each chunk of synchronous code
finishes, what does the event loop do with the microtask queue BEFORE it touches
a single macrotask?
> A:

## Predict & explain

**Q3.** Predict the output AND say which queue each callback lands in:
```js
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
```
> Output:
> Why:

**Q4.** `setTimeout(fn, 0)` has a 0ms delay, yet a resolved Promise's `.then()`
still runs before it. Why doesn't the 0ms make setTimeout win? (Which line is it
standing in?)
> A:

## The tricky part (senior interview level)

**Q5.** A microtask can schedule ANOTHER microtask while the queue is draining.
Does that new microtask run before or after a pending `setTimeout` macrotask? Why?
```js
setTimeout(() => console.log("B: macrotask"), 0);
Promise.resolve().then(() => {
  console.log("C: microtask 1");
  Promise.resolve().then(() => console.log("D: microtask 2"));
});
```
> Order of B, C, D:
> Why:

**Q6.** Because of the rule in Q5, there's a dangerous footgun: what happens if a
microtask keeps scheduling a new microtask FOREVER? What gets "starved," and what
does the user experience?
> A:

## Connect it back & forward

**Q7.** `await` continuations are MICROTASKS. So code after an `await` runs as a
microtask. Why does that mean code-after-await beats a pending `setTimeout`?
> A:

**Q8.** The classic interview question: "What logs first — a resolved Promise's
`.then()` or `setTimeout(fn, 0)`?" Give the answer AND the one-sentence reason.
> A:

## Gotchas / things that tripped me up
> (esp. Q5 — microtasks spawned DURING draining still go before macrotasks. The VIP
> line keeps admitting new VIPs until fully empty, THEN the regular line moves.)

# JavaScript engine & runtime

> Answer each in your OWN words underneath. Reason it out, don't copy.
> This is the CAPSTONE for the Async section — it names the machinery you've been
> using since lesson 01. Big idea: ENGINE runs the language, RUNTIME wraps it with
> extra powers (DOM, fetch, timers).

## The engine

**Q1.** In one sentence — what is a JavaScript engine's job? (Name one real engine.)
> A:

**Q2.** The engine runs your code in three steps. Name them in order and say what
each does:
  1. ______ →
  2. ______ →
  3. ______ →

**Q3.** "Parsing" checks for one kind of problem before your code ever runs. What
kind? (Think: what error do you get the instant you have a stray bracket, before
any line executes?)
> A:

## The runtime

**Q4.** What is a JavaScript "runtime"? What TWO things does it contain? (Hint: one
of them is the engine itself.)
> A:

**Q5.** The passage says the runtime gives JS powers "beyond the language itself"
— like the DOM and the Fetch API. Why aren't those part of the core language?
What does it tell you that `fetch` works in a browser but the SAME core JS runs in
Node too? (Different runtime, same engine idea.)
> A:

## The big connection (tie it to lesson 01 & 07)

**Q6.** Back in lesson 01 you learned four pieces: call stack, Web APIs, callback
queue, event loop. Now assign each to its OWNER — engine or runtime:
  - call stack → 
  - Web APIs → 
  - callback queue → 
  - event loop → 

**Q7.** So when you called `fetch()` in lesson 04, the actual network request was
handled by the ______ (engine / runtime), NOT the core language. And `setTimeout`
in lesson 01 — engine or runtime? Why does this explain why they behave
"asynchronously"?
> A:

## The 3 FCC quiz questions (answer + why the wrong ones are wrong)

**Q8.**
  - Primary function of a JS engine?
  - Which is NOT part of the runtime? (engine / Web APIs / event loop / the code YOU write)
  - Difference between engine and runtime?
> A:

## Connect it forward

**Q9.** The passage mentions Node.js as a runtime you'll learn later (your Phase 3
back-end goal). Node has the SAME V8 engine as Chrome but a DIFFERENT runtime — no
DOM, no window, but it has file-system access instead. In your own words: why can
the same JavaScript language do web pages in the browser AND servers in Node?
> A:

## Gotchas / things that tripped me up
> (esp. Q6 — engine owns the call stack; runtime owns Web APIs + queue + event
> loop. This is the sentence that ties the whole Async section together.)

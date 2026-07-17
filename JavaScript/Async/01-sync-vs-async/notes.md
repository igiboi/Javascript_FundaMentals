# sync vs async

> Answer each question in your OWN words, underneath it. If you can answer all of
> these cleanly, you understand the topic. Don't copy definitions — reason it out.

## Core understanding

**Q1.** JavaScript is "single-threaded." What does that actually mean — how many
lines of YOUR code can run at the same instant?
> A:

**Q2.** If JS can only do one thing at a time, how does it manage to fetch data
from a server WITHOUT freezing the whole page? Describe the "hand off" in your
own words.
> A:

**Q3.** Name the three pieces of the machinery and say what each one does:
  - Web APIs →
  - Callback queue →
  - Event loop →

## The tricky part (interview-level)

**Q4.** `setTimeout(fn, 0)` — the delay is 0ms. So why does `fn` NOT run
immediately? What has to happen first?
> A:

**Q5.** Two `setTimeout(..., 0)` callbacks are registered one after the other.
Which one runs first, and what rule decides that? (name the queue behavior)
> A:

**Q6.** Does async make a slow task (like a 2-second network request) FINISH
faster? Yes/No — and explain what async actually improves instead.
> A:

## Connect it forward

**Q7.** When your future React app calls `fetch("/api/users")`, which of the
three machinery pieces is holding the request while your UI stays clickable?
> A:

**Q8.** Async is great for I/O-bound work (network, timers, files) but NOT for
CPU-bound work (heavy math). In your own words — why? What's different about the
two?
> A:

## Gotchas / things that tripped me up
> (write down anything you got wrong in the examples/exercises — this is the most
> valuable section, because it's YOUR specific blind spots)

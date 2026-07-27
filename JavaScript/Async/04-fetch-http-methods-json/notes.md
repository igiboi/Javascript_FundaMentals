# fetch + HTTP methods + res.json()

> Answer each in your OWN words underneath. Reason it out, don't copy.
> You already studied CRUD↔HTTP in July (localStorage test) — this is that same
> knowledge, now in real fetch syntax. Lean on what you already know.

## The four HTTP methods (connect to CRUD)

**Q1.** Fill in the mapping you already learned — method → CRUD action → what it does:
  - GET    →
  - POST   →
  - PUT    →
  - DELETE →

**Q2.** GET is the DEFAULT. So these two lines do the same thing — true or false, and why?
```js
fetch('https://api.example.com/data')
fetch('https://api.example.com/data', { method: 'GET' })
```
> A:

**Q3.** Look at the PUT and DELETE URLs — both end in `/users/45`, but GET and POST
in the passage end in `/users` (no number). WHY do PUT and DELETE need the `45`
but POST does not? (Think about what each operation is acting ON.)
> A:

## res.json() — the two-step unwrap (the key concept)

**Q4.** In lesson 03 I planted this: data over a network arrives as a ______, not a
ready-to-use JS object. Now — what does `response.json()` actually DO to fix that?
(The quiz word is "parses" — say it in your own words.)
> A:

**Q5.** Here's the pattern from the passage:
```js
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
```
Why are there TWO `.then` calls? What is available after the FIRST one that is NOT
available yet, and what do you finally have after the SECOND? (Don't worry about
HOW chaining works — that's lesson 05. Just WHAT each step gives you.)
> A:

## The POST body — connect to serialization

**Q6.** In a POST, the passage wraps the data in `JSON.stringify({...})` before
putting it in `body`. You saw this EXACT rule in your July localStorage study.
What was that rule, and why must the body be a string and not a raw object?
> A:

**Q7.** Notice the symmetry: SENDING data you use `JSON.stringify()`, RECEIVING data
you use `response.json()`. In one sentence — what's the relationship between those
two operations? (One does the opposite of the other.)
> A:

**Q8.** What is the `'Content-Type': 'application/json'` header telling the server,
and why does the server need to be told?
> A:

## The 3 FCC quiz questions (answer + why the wrong ones are wrong)

**Q9.**
  - Default HTTP method of fetch()?
  - Before putting data in a POST body, what must you do to it?
  - What does response.json() do?
> A:

## Gotchas / things that tripped me up
> (esp. the two-.then thing and the stringify/parse symmetry — note what felt fuzzy)

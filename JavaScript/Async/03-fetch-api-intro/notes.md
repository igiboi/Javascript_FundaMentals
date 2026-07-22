# fetch api intro

> Answer each question in your OWN words, underneath it. If you can answer all of
> these cleanly, you understand the topic. Don't copy definitions — reason it out.
> NOTE: this lesson is the "WHAT & WHY" of fetch. The "HOW" (.then / async-await)
> is the NEXT lesson — don't stress if the syntax isn't clear yet.

## Core understanding

**Q1.** In one sentence — what is the Fetch API *for*? What does it let your web
app do?
> A:

**Q2.** By default (no options passed), which HTTP method does `fetch()` use, and
what does that method do — send data or retrieve data?
> A:

**Q3.** Name four different *kinds of resources* you can fetch from the network
(the passage listed several).
> A:

## The part the passage glossed over (plant this now)

**Q4.** The passage said the response "must be converted to JSON format before it
can be used." In your own words: when the data comes back from the server, is it
already a usable JavaScript object, or does it need a conversion step first? Why
do you think a conversion is needed at all? (Hint: think back to the localStorage
rule — data traveling over a network is sent as ______.)
> A:

**Q5.** `fetch()` doesn't hand you the data instantly — the server is somewhere
else and takes time to respond. Connect this back to lesson 01: what does `fetch`
do while it waits, so the page doesn't freeze? (Which of the four pieces is
holding the request?)
> A:

## Connect it forward

**Q6.** You're building a weather app. Walk through, in plain English, the journey:
user clicks "Get Weather" → ??? → temperature shows on screen. Where does `fetch`
sit in that journey?
> A:

**Q7.** The 3 FCC quiz questions — answer each and say why the wrong ones are wrong:
  - Primary purpose of the Fetch API?
  - What data type is commonly received from an API?
  - Which is NOT a commonly fetched resource? (JSON / HTML / JavaScript functions / images)
> A:

## Gotchas / things that tripped me up
> (this lesson is conceptual — note anything that felt fuzzy, especially the
> "convert to JSON" step, so we tackle it head-on in lesson 04)

# Geolocation API — getCurrentPosition

> Answer each in your OWN words underneath. Reason it out, don't copy.
> This is the FIRST real Web API you'll actually USE — it plugs straight into the
> Weather App ("get weather for MY location"). Aim your answers at real usage.

## Core mechanics

**Q1.** What object do you go through to reach the Geolocation API? (Not window,
not document — the passage is specific.)
> A:

**Q2.** `getCurrentPosition` takes TWO functions as arguments. What is each one
for, and when does each get called?
  - 1st function (success callback) → runs when ______, receives ______
  - 2nd function (error callback)   → runs when ______, receives ______

**Q3.** Inside the success callback, how do you dig out the actual latitude and
longitude? Write the two property paths (start from `position`).
> A:

## Connect it back (you've seen this shape before)

**Q4.** This "success function + error function" pair is the SAME idea as something
from lesson 05 (Promises). Which two Promise concepts do the success and error
callbacks map to?
  - success callback ≈ ______ (the fulfilled path)
  - error callback   ≈ ______ (the rejected path)

**Q5.** Geolocation is a Web API. From lesson 08 — is it part of the core language
(the engine) or the runtime? What does that tell you about WHY it can be missing
in some environments (like Node)?
> A:

## Privacy — the thing that makes this different

**Q6.** Before a site can read the user's location, what MUST happen first? Why
does the browser force this, and what does it mean for your code (i.e. the user
can say NO)?
> A:

**Q7.** Because the user can deny permission (or GPS can fail), which of the two
callbacks becomes ESSENTIAL to handle — and what should your app do when it fires?
(Think UX: what does the user see if you ignore the error callback?)
> A:

## The 3 FCC quiz questions (answer + why the wrong ones are wrong)

**Q8.**
  - Primary purpose of getCurrentPosition?
  - Which object accesses the Geolocation API? (window.location / document.geolocation / navigator.geolocation / browser.location)
  - Key privacy consideration?
> A:

## Connect it forward — the Weather App

**Q9.** Sketch (plain English or pseudocode) the Weather App flow using this:
user clicks "Use my location" → getCurrentPosition → ??? → weather on screen.
Where do lat/lng go next, and which async tool (fetch + async/await) takes over?
> A:

## Gotchas / things that tripped me up
> (esp. Q7 — the error callback isn't optional in real apps; users DO deny
> location, and your app must handle it gracefully, not silently break.)

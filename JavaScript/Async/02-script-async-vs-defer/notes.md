# script async vs defer

> Answer each question in your OWN words, underneath it. If you can answer all of
> these cleanly, you understand the topic. Don't copy definitions — reason it out.
> NOTE: this "async" is about how the BROWSER loads <script> files — it is NOT the
> event loop from 01. Same word, different topic. Don't mix them up.

## Core understanding

**Q1.** A plain `<script src="app.js"></script>` with no attribute — what does the
browser do to the HTML parsing when it hits this tag? Walk through the three
things that happen in order.
> A: HTML parsing pauses and downloads script until its done then continues finishing HTML parsing

**Q2.** What problem does that plain behavior cause for page load, especially with
a large script? Why does the user feel it?
> A: The user feels it because if the script is big what the user will experience
is half rendered page or maybe just staring at a blank screen

**Q3.** Both `async` and `defer` let the browser keep doing ONE thing while the
script downloads. What is that one thing they both allow to continue?
> A: They both allow the HTML parsing continue while downloading the script

## async vs defer — the real difference

**Q4.** `async` — once the script finishes downloading, WHEN does it execute, and
what does it do to HTML parsing at that moment?
> A: It executes AS SOON AS its download finishes, and at that moment it pauses
> HTML parsing (if parsing is still going) to run, then resumes.

**Q5.** `defer` — once the script finishes downloading, WHEN does it execute
instead? What is it waiting for?
> A:it will wait for HTML to be done parsing then load the script

**Q6.** Multiple `defer` scripts vs multiple `async` scripts — which one guarantees
execution ORDER, and which one does not? Why does that difference exist? (Think
about what each one is waiting on.)
> A:defer guarantees because it will wait for HTML parsing to be fully done 
if multiple `async` it will be a wild card it has many factors like network, caching, file size. etc. 

## The FCC questions (answer, then say WHY)

**Q7.** In what order do these run, and why?
```html
<script src="1.js" defer></script>
<script src="2.js" async></script>
<script src="3.js" defer></script>
```
> A: un predictable for async because it has many factors 
> Why:

**Q8.** Which is true, and why are the others wrong?
  - async scripts execute in the order they appear
  - defer scripts execute as soon as they're downloaded
  - async scripts can execute before the HTML is fully parsed
  - defer scripts execute before any async scripts
> A:
> Why the others are wrong:

## Connect it forward

**Q9.** You're loading two scripts: an analytics tracker (self-contained, doesn't
touch your app) and your main app bundle (must run after the page is built, in
order). Which attribute goes on which — and why?
> A: is defer for the app bundle (order matters), async for analytics (order doesn't).

**Q10.** Why is `defer` the safe default for most app scripts you'll write in
React/Vue land, over both plain scripts and `async`?
> A:because we know the behavior with defer 

## Gotchas / things that tripped me up
> (write down anything the browser demo did that surprised you — especially the
> order of 🟩 defer vs ⬛ "parsing FINISHED". This section is YOUR blind spots.)


# Notes from FCC reading
When the browser fidns this script tag, it stops parsing the HTML
downloads the script, executes it, and then continues parsing the HTML
This can slow down the loading of your web page, especially if you have
large scripts. 

`async` and `defer`prvoide ways to load scripts more efficiently 


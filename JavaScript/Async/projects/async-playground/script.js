/* ============================================================
   ASYNC PLAYGROUND
   ------------------------------------------------------------
   Nine drills. You write every line of JS in this file.

   Endpoints you can use (all real, all public, no API key):
     https://jsonplaceholder.typicode.com/users/1
     https://jsonplaceholder.typicode.com/posts/1
     https://jsonplaceholder.typicode.com/posts?userId=1
     https://jsonplaceholder.typicode.com/comments?postId=1
     https://jsonplaceholder.typicode.com/posts/999999   <- returns 404 + {}
     https://this-domain-does-not-exist-xyz.com/data     <- network failure

   Rules:
     - No copying from a finished version. Get stuck, then reason it out.
     - Read the QUESTIONS in each drill before writing code.
     - Every drill prints to the page via print() — not console.log.
       (console.log is fine for your own debugging.)
   ============================================================ */

/* ------------------------------------------------------------
   SETUP  (write this first — every drill depends on it)
   ------------------------------------------------------------
   You need two helpers before any drill will work.

   1. print(drillNumber, message)
      - Find the <pre> whose id is `output-<drillNumber>`
      - APPEND the message plus a newline to its textContent
      - Appending, not replacing: drills print several lines over time,
        and seeing them arrive in order is the whole point.

   2. clear(drillNumber)
      - Set that same <pre>'s textContent to an empty string
      - Call this at the start of each drill so re-running is clean

   Then wire up the buttons:
      - Every button has class "run" and a data-drill attribute
      - Select them all, loop, and attach a click listener
      - Read which drill was clicked from the element's dataset
      - Call the matching drill function

   QUESTIONS before you write it:
      - Which method selects ALL elements with a class, and what does it
        return — an array, or something array-like?
      - How do you read a data-drill="3" attribute off an element in JS?
      - What type does that give you back — number or string?
      - You have nine functions named drill1..drill9. How do you go from
        the string "3" to calling the right one WITHOUT a nine-branch
        if/else or switch? (Hint: an object whose keys are the numbers.)
*/

// your setup code here
function print(drillNumber, message) {
  const output = document.getElementById(`output-${drillNumber}`);
  output.textContent += `${message}\n`;
}

function clear(drillNumber) {
  const output = document.getElementById(`output-${drillNumber}`);
  output.textContent = '';
}

const buttonRun = document.querySelectorAll('.run');

const drills = {
  1: drill1,
};

buttonRun.forEach((button) => {
  button.addEventListener("click", () => {
    const drillData = button.dataset.drill;
    const drillFn = drills[drillData]; // the function itself
    drillFn(); // now run it
  });
});
/* ------------------------------------------------------------
   DRILL 1 — Callback vs Promise
   ------------------------------------------------------------
   Write two helpers, then one drill function.

   HELPER 1 — delayCallback(ms, cb)
     One line: setTimeout(cb, ms);
     You pass a function IN. Nothing comes out.

   HELPER 2 — delayPromise(ms)
     Return a new Promise. Inside it, setTimeout(resolve, ms);
     Nothing goes in. A Promise comes OUT.

   That's the difference:
     callback  -> function goes in, nothing comes out
     promise   -> nothing goes in, object comes out

   The Promise is better because you get an object back — so you can
   .then() it, await it, or drop it in Promise.all().

   ------------------------------------------------------------
   drill1() — five steps, in this order:
     1. clear(1)
     2. print(1, "A — start")
     3. delayCallback(1000, ...)   -> callback prints "B — callback fired"
     4. delayPromise(1000).then()  -> handler prints "C — promise resolved"
     5. print(1, "D — end")

   ------------------------------------------------------------
   THE ORDER

     Output is:  A, D, B, C

   Why A and D come first: setTimeout and new Promise do NOT pause
   anything. They schedule work and return immediately, so the function
   runs all the way to the end before anything deferred happens.
   This is the main lesson of drill 1.

   Why B comes before C, even though .then() is higher priority:
     - Both timers are 1000ms, and B's timer was registered FIRST
       (its line comes earlier). Equal timers fire in registration order.
     - B's timer prints directly.               -> 1 step
     - C's timer only calls resolve(), and THAT queues the .then().  -> 2 steps
     So B is already done before C's .then() even gets queued.

   The priority rule only decides between callbacks that are ALREADY
   waiting in the two queues. It cannot help C here, because C hasn't
   been queued yet when B runs.

   ------------------------------------------------------------
   NOW SEE THE PRIORITY RULE FOR REAL
   Add this to the bottom of drill1() and run again:

     setTimeout(() => print(1, "macro — setTimeout 0ms"), 0);
     Promise.resolve().then(() => print(1, "micro — .then()"));
     print(1, "sync — plain code");

   Output:  sync, micro, macro

   Here the promise is ALREADY resolved, so its .then() queues right
   away and both callbacks are waiting at the same moment. Now the
   ranking decides: microtask wins. The setTimeout has ZERO delay and
   still loses.

   THE TAKEAWAY
     Higher priority only matters when both are already waiting.
     A microtask that hasn't been queued yet cannot jump anything.
*/
// your drill 1 code here
function delayCallback(ms, cb) {
  // one line: call setTimeout, pass it cb and ms
  setTimeout(cb, ms);
}

function delayPromise(ms) {
  return new Promise((resolve) => {
    // one line: call setTimeout, pass it resolve and ms
    setTimeout(resolve, ms);
  });
}

function drill1() {
  clear(1);
  print(1, "A — start");

  delayCallback(1000, () => {
    print(1, "B — callback fired");
  });

  delayPromise(1000).then(() => {
    print(1, "C — promise resolved");
  });

  print(1, "D — end");

  setTimeout(() => print(1, "macro — setTimeout 0ms"), 0);
  Promise.resolve().then(() => print(1, "micro — .then()"));
  print(1, "sync — plain code");
}



/* ------------------------------------------------------------
   DRILL 2 — Build a Promise by hand
   ------------------------------------------------------------
   Goal: understand that resolve and reject are just functions you call.

   Write coinFlip(ms):
     - returns a new Promise
     - after ms, randomly either:
         resolve("heads") or reject(new Error("tails"))
     - use Math.random() < 0.5 to pick

   Then in drill2():
     - clear the output
     - print "flipping..."
     - await coinFlip(800) inside a try/catch
     - print the resolved value in the try
     - print the error's .message in the catch
     - run it 5 times in a row so you see both outcomes

   QUESTIONS:
     - Why reject(new Error("tails")) instead of reject("tails")?
       What do you get in catch that you would not get from a string?
     - What happens if you call resolve() TWICE in the same Promise?
       Try it. Does it throw, or is the second call ignored?
     - After a Promise settles, can it ever change state again?
*/

// your drill 2 code here

/* ------------------------------------------------------------
   DRILL 3 — Promise chaining, .then() only
   ------------------------------------------------------------
   Goal: fluency in the syntax you'll read in older codebases.

   Constraint: NO async/await in this drill. Only .then() and .catch().

   Three DEPENDENT steps — each needs the previous result:
     1. fetch user 1                     -> get their id
     2. fetch posts for that user id     -> get the first post's id
     3. fetch comments for that post id  -> print how many comments

   Print a line after each step so you watch the chain progress.

   QUESTIONS:
     - Inside .then(response => ...), why must you return response.json()
       rather than just calling it?
     - What happens to the chain if you forget that return? Try it.
     - You have one .catch() at the end. If step 2 fails, do steps 3 runs?
       Why or why not?
     - Where does .finally() go, and when would you actually want it?
*/

// your drill 3 code here

/* ------------------------------------------------------------
   DRILL 4 — The same chain with async/await
   ------------------------------------------------------------
   Goal: prove to yourself these are the same machinery, different syntax.

   Rewrite drill 3 exactly — same three steps, same printed lines —
   using async/await and try/catch.

   QUESTIONS:
     - Count the lines. Which version is shorter? Which reads better?
     - In drill 3 the result of step 1 was only available inside a .then()
       callback. In drill 4 it's a plain const. Why does that matter once
       you need step 1's value again down at step 3?
     - These three awaits are sequential and that is CORRECT here.
       Explain why — what makes this different from drill 5?
*/

// your drill 4 code here

/* ------------------------------------------------------------
   DRILL 5 — Sequential vs Promise.all  (the performance one)
   ------------------------------------------------------------
   Goal: feel the cost of an await you did not need.

   Four INDEPENDENT requests — no one depends on another:
     /users/1   /users/2   /users/3   /users/4

   Write two functions:
     - fetchSequential()  awaits each one, one after another
     - fetchParallel()    fires all four, then awaits Promise.all

   Time both. Use performance.now() before and after, subtract,
   and Math.round() the result. Print both timings and the difference.

   QUESTIONS:
     - Predict the ratio before running. Did the real numbers match?
     - In fetchParallel, WHERE do the four fetch() calls happen relative
       to the await? Why must they all start before you await anything?
     - This is wrong — explain why it is still sequential:
           const a = await fetch(url1);
           const b = await fetch(url2);
           await Promise.all([a, b]);
     - What is the rule for when a sequential await is justified?
*/

// your drill 5 code here

/* ------------------------------------------------------------
   DRILL 6 — Errors: fetch lies about 404
   ------------------------------------------------------------
   Goal: learn the single most common fetch bug in production code.

   Three separate attempts, each in its own try/catch, each printing
   whether catch fired:

     A. fetch("https://this-domain-does-not-exist-xyz.com/data")
     B. fetch("https://jsonplaceholder.typicode.com/posts/999999")
        then read res.status and res.ok, then call res.json()
     C. fetch a URL that returns HTML, then call res.json() on it
        (use "https://example.com" — it returns HTML, not JSON)

   For each, print: the status if you got one, and whether catch ran.

   QUESTIONS:
     - Which of A, B, C reached the catch block? Which did not? Why?
     - A 404 came back from the server. Was the fetch "successful"?
       Answer from fetch's point of view, not the user's.
     - Write a guard clause that makes B behave like a real error.
       Where exactly does it go, and what do you throw?
     - Why is `if (!res.ok) throw new Error(...)` in basically every
       production fetch wrapper ever written?
*/

// your drill 6 code here

/* ------------------------------------------------------------
   DRILL 7 — all vs allSettled vs race
   ------------------------------------------------------------
   Goal: pick the right combinator instead of always reaching for .all.

   Build three promises with your coinFlip-style helper:
     fast   — resolves after 300ms with "fast done"
     slow   — resolves after 1500ms with "slow done"
     broken — REJECTS after 600ms with new Error("broken failed")

   Run the SAME three through all three combinators, printing results:
     - Promise.all([...])        in a try/catch
     - Promise.allSettled([...]) loop the results array and print
                                 each .status and .value/.reason
     - Promise.race([...])       in a try/catch

   QUESTIONS:
     - Promise.all rejected. Did `slow` still run to completion?
       Does rejecting CANCEL the other promises? (Important.)
     - allSettled gave you objects with a .status. What are the two
       possible values, and which key holds the payload in each case?
     - race settled at 300ms with `fast`. If you moved broken to 100ms,
       what would race do?
     - Real scenario for each:
         * loading a dashboard where any missing widget breaks the page
         * loading a dashboard where each widget can fail independently
         * a fetch you want to abandon after a 5s timeout
       Which combinator for which, and why?
*/

// your drill 7 code here

/* ------------------------------------------------------------
   DRILL 8 — The .map() async trap
   ------------------------------------------------------------
   Goal: internalise that array methods are not async-aware.

   Step 1 — write the broken version on purpose:
     const ids = [1, 2, 3, 4, 5];
     - .map() with an ASYNC callback that fetches /users/<id>
       and returns the user's name
     - print the raw result of the .map() call — do NOT await it
     - print typeof and the array's contents

   Step 2 — print what you actually see. It is not five names.

   Step 3 — fix it with Promise.all so you get the five names.

   Step 4 — now do the same thing with a for...of loop and await
     inside the loop body. Time both versions.

   QUESTIONS:
     - What exactly is in the array from the broken version? Why?
     - Does .map() know or care that its callback is async?
     - The for...of version works but is slower. Why?
     - When would you WANT the slow for...of version? (Think about
       rate limits and APIs that reject bursts of requests.)
     - Same question for .filter() with an async callback — does it
       work? What does an async callback always return, and what does
       .filter() do with that value?
*/

// your drill 8 code here

/* ------------------------------------------------------------
   DRILL 9 — Geolocation: callbacks -> Promise ("promisifying")
   ------------------------------------------------------------
   Goal: convert a callback API into one that works with await.
         This is a real interview exercise.

   navigator.geolocation.getCurrentPosition(onSuccess, onError) is
   callback-based. It does not return a Promise.

   Step 1 — use it raw. Print latitude and longitude from the success
     callback, and print error.message from the error callback.

   Step 2 — write getPosition() that returns a Promise wrapping it:
     - new Promise((resolve, reject) => { ... })
     - pass resolve as the success callback
     - pass reject as the error callback

   Step 3 — use it: `const pos = await getPosition();` inside try/catch.
     Print the coords. Then DENY the browser permission prompt and
     confirm your catch block fires.

   QUESTIONS:
     - Why can you pass `resolve` directly as the success callback
       instead of writing `(position) => resolve(position)`?
       When would that shortcut NOT be safe?
     - This wrapper pattern has a name. What is it?
     - Node's util.promisify does this automatically. What convention
       must a callback follow for that to work? (Look up "error-first
       callback".)
     - Bonus: getCurrentPosition takes a third options argument with a
       `timeout` key. Add a 5000ms timeout and trigger it.
*/

// your drill 9 code here

/* ============================================================
   WHEN ALL NINE RUN
   ------------------------------------------------------------
   Answer these without looking anything up. If one is shaky, that
   drill needs another pass.

   1. Why does `await` only work inside an `async` function?
   2. What does an async function return if you `return 5` from it?
   3. Why does fetch need TWO awaits to get JSON?
   4. Name the one case where fetch does NOT reject on failure.
   5. Sequential awaits vs Promise.all — what is the rule?
   6. all vs allSettled — when does the difference matter?
   7. Why does .map() with an async callback give you Promises?
   8. How do you make a callback-based API awaitable?
   9. setTimeout(fn, 0) vs Promise.resolve().then(fn) — which runs
      first, and what are the two queues called?
   ============================================================ */

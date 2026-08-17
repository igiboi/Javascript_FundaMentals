# Building Mini React

Goal: implement enough of React from scratch that `useState` stops being magic.

No build tools, no JSX, no libraries. Open `index.html` in a browser and use the
console. Everything goes in `mini-react.js`.

Rule: type every line yourself. Reading is not learning.

---

## Step 1 — The root and a first paint

React needs somewhere to put things. `index.html` has `<div id="root"></div>`.

Before any framework machinery, do it the vanilla way so you can see what React
will eventually automate.

In `mini-react.js`, grab the root element and set its `textContent` to `"Hello"`.

Open `index.html` in the browser. You should see `Hello`.

**Q:** Nothing here is React. What did you have to state explicitly that React
would normally figure out for you?

---

## Step 2 — A component is just a function

In React, a component is a function that returns a description of UI.

Delete the code from Step 1.

Write a function called `App` that takes no parameters and returns the string
`"Hello"`. Then write a function called `render` that takes no parameters, calls
`App()`, and puts the result into the root element's `textContent`.

Call `render()` at the bottom of the file.

Same output as Step 1. But the structure is different now.

**Q:** Why is it useful that `App` returns a value instead of touching the DOM
itself? Name one thing that becomes possible.

---

## Step 3 — State that does not persist

Now the problem `useState` exists to solve. Try it the naive way first.

Inside `App`, declare `let count = 0` at the top. Return the string
`` `Count: ${count}` `` instead of `"Hello"`.

Below that, still inside `App`, write a function called `increment` that does
`count = count + 1` and then calls `render()`.

To trigger it from the console, assign it to the window at the end of `App`,
just before the return:

```js
window.increment = increment;
```

Save, reload, then in the browser console run:

```js
increment()
```

**Q1.** What number is on screen after running `increment()` three times?

**Q2.** Trace it. `count = count + 1` really does run. So why does the screen not
reflect it? Say what happens to `count` when `render()` calls `App()` again.

**Q3.** Name the two separate problems a real `useState` has to solve. One is
visible here. The other you already know from the console-log lesson.

---

*(further steps added as you go)*

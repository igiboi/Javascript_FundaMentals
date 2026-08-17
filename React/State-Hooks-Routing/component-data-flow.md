# How Data Moves Between Components

Reference for the expense tracker's structure. Questions at the bottom — answer them
without scrolling up.

---

## The tree

```
App                    ← owns ALL state
├── ExpenseForm        ← owns nothing
└── ExpenseList        ← owns nothing
    └── (the <li> rows)
```

`App` holds six `useState` slots on its fiber:

```
slot 0  description   ""
slot 1  amount        ""
slot 2  expenses      [...]
slot 3  error         null
slot 4  editingId     null
slot 5  editText      ""
```

`ExpenseForm` and `ExpenseList` have NO slots. They call no hooks. Everything they
render comes from props.

---

## Why a child can't change state directly

`setExpenses` is created inside `App`, by `useState`, closing over slot 2's index.
It exists only in `App`'s scope.

`ExpenseList` is a separate function in a separate file. It has no access to `App`'s
scope — two function calls, two scopes, no shared variables.

So the only way a child can cause a state change is to call a function `App` gave it.

---

## Data down

```jsx
<ExpenseList expenses={expenses} />
```

Plain function arguments. React collects the JSX attributes into one object and calls
`ExpenseList({ expenses: [...], editingId: null, ... })`.

`{ expenses, editingId }` in the parameter list is destructuring that object.

---

## Events up — NOT bubbling

Important: nothing "travels up." There is no event propagating to `App`.

Think of it like a doorbell.

`App` installs a doorbell button outside and keeps the bell inside its own house.
`ExpenseList` can press the button. It cannot walk in and ring the bell itself.
Pressing the button rings the bell **inside App's house** — which is the only place
`setExpenses` exists.

The button is the function `App` passed down. Pressing it is the child calling it.

```
        APP'S HOUSE
   ┌─────────────────────────┐
   │                         │
   │   setExpenses  🔔       │   ← the bell. Only exists in here.
   │        ▲                │
   │        │ rings          │
   │   handleDeleteExpense   │   ← written in here, so it can reach the bell
   │        ▲                │
   └────────┼────────────────┘
            │ passed down as a prop
            │
   ┌────────┼────────────────┐
   │        │                │
   │      [ 🔘 ]             │   ← the button. ExpenseList can press it,
   │                         │     but cannot see inside the house.
   │     EXPENSELIST         │
   └─────────────────────────┘
              ▲
              │ you click
```

Step by step:

1. `App` writes `handleDeleteExpense`. Because it is written inside `App`, it can see
   `setExpenses`.
2. `App` passes that function down as a prop. It is not called — just handed over.
3. `ExpenseList` puts it on a click: `onClick={() => handleDeleteExpense(expense.id)}`
4. You click. React runs the arrow function, which calls `handleDeleteExpense("aaa")`.
5. The function runs where it was **written** (in `App`), not where it was **called**
   (in `ExpenseList`). So `setExpenses` is available.
6. Slot 2 is updated. `App` re-renders, and its children re-render with new props.

Step 5 is the whole trick. A function always uses the scope it was written in. That is
what a closure is.

So the child never reaches into the parent. It just calls a function it was given.

**Note on the word "bubbling":** DOM event bubbling is a different thing — a click on a
`<button>` travels up through the HTML elements around it. That is unrelated to how props
and handlers work here. Nothing bubbles up to `App`.

---

## One full cycle — clicking Delete

```
CLICK on Delete in a row
   │
   ▼
() => handleDeleteExpense("aaa")        ← arrow fn created during render, in ExpenseList
   │
   ▼
handleDeleteExpense("aaa")              ← body runs in App's scope
   │
   ▼
setExpenses(prev => prev.filter(...))   ← writes slot 2, queues a re-render
   │
   ▼
React re-renders App
   │
   ├── useState reads slot 2 → new array
   ├── total recalculates from it (derived — cannot go stale)
   │
   ▼
App returns JSX with NEW props for its children
   │
   ▼
ExpenseList re-renders with the new expenses array
   │
   ▼
React diffs old vs new element trees, patches only the changed DOM nodes
```

---

## Why state lives in App

`expenses` is needed by `ExpenseList` (to render) and by `total` (to sum). Two consumers,
so it must live in their closest common ancestor. That is `App`.

The rule: **state belongs in the lowest component that contains everything needing it.**

`editText` breaks this rule on purpose — only the row being edited uses it, so it should
live in an `ExpenseItem`. It sits in `App` because everything started in `App`.

---

## Prop drilling

When state lives high and is needed low, it passes through every level between — including
components that don't use it, just forward it.

```
App → Layout → Sidebar → Filters → FilterItem      (needs `user`)
```

Three components take a `user` prop only to hand it on. That is prop drilling, and it is
what Context / Zustand / Redux exist to avoid.

Not a problem at this size. It becomes one around 3+ levels of pass-through.

---

## Questions

**Q1.** `setExpenses` is defined in `App`. `ExpenseList` renders the Delete button.
Explain, in terms of scope, why `ExpenseList` cannot call `setExpenses` itself.

**Q2.** When you click Delete, does an event travel up to `App`? Say what actually happens.

**Q3.** `handleDeleteExpense` runs. Which component's scope does its body execute in, and
why does that matter for `setExpenses`?

**Q4.** Why does `expenses` live in `App` rather than in `ExpenseList`?

**Q5.** `ExpenseForm` and `ExpenseList` call no hooks and have no slots. Where does
everything they render come from?

**Q6.** `<ExpenseList expenses={expenses} />` — what does React actually do with that
attribute? What does the component receive?

**Q7.** State changes in `App`. Trace what happens to `ExpenseList` and why.

**Q8.** What is prop drilling, and at roughly what depth does it start to hurt?

**Q9.** `total` is derived, not stored. When `expenses` changes, what makes `total` correct
without anyone updating it?

**Q10.** If `editText` were moved into an `ExpenseItem` component, which props would
disappear from `ExpenseList`? Which state variables would disappear from `App`?

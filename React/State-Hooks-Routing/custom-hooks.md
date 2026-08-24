# Custom Hooks

## What a custom hook actually is

Strip away the word "hook":

```jsx
function useDebounce(value, delay) { /* ... */ }
```

That's **a function**. Regular JavaScript. Takes arguments, returns a value.

The only thing that makes it a hook is that it **calls other hooks inside it**
(`useState`, `useEffect`). That's the whole definition.

```
   Regular function          Custom hook
   ────────────────          ───────────
   function add(a, b)        function useDebounce(value, delay)
   no hooks inside           calls useState / useEffect inside
   call it anywhere          same Rules of Hooks as built-ins
```

You already know how to extract a repeated calculation into a function.
This is that — for **stateful logic**.

---

## The problem it solves

Debounce logic duplicated across four components means four places to fix a bug.

```
   BEFORE                          AFTER
   ──────                          ─────
   SearchBox   ─ timeout logic     SearchBox  ─┐
   NoteEditor  ─ timeout logic     NoteEditor ─┼─► useDebounce
   FilterPanel ─ timeout logic     FilterPanel─┘
        duplicated 3x                   written once
```

Same reason you extract any function. Nothing React-specific about the motivation.

---

## The three rules

```
   1. Name it after what it DOES, not what it holds.
        useToggle  ✅   (behavior)
        useBoolean ❌   (type)

   2. The `use` prefix is REQUIRED — not style.
        eslint-plugin-react-hooks identifies hooks BY that prefix.
        Name it getDebounce and the linter goes blind:
        no exhaustive-deps warnings, no Rules-of-Hooks checks.

   3. A custom hook shares LOGIC, never STATE.
```

### Rule 3 is the big misconception

```
   SearchBox     calls useDebounce  →  its own debouncedValue
   NoteEditor    calls useDebounce  →  a completely separate one
   FilterPanel   calls useDebounce  →  another separate one
```

The `useState` inside runs fresh for each caller. The hook is a **recipe**,
not a shared bowl — everyone who follows it gets their own dish.

To genuinely share state between components you need Context or a store
(MobX / Zustand / Redux). That's a different tool for a different problem.

---

## useDebounce, line by line

```jsx
import { useState, useEffect } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

export { useDebounce };
```

**Two values now exist.** `value` is what the user is typing right now.
`debouncedValue` is a **lagging shadow** of it. That's the core trick.

```
   value:          i → ip → iph → ipho → iphon → iphone
   debouncedValue: ''  ''    ''    ''      ''      ''  ... then "iphone"
                   └──────── lags behind ────────┘
```

The effect is Exercise 1 from useEffect-exercises.md, unchanged in structure:

```
   type "i"       → timer A scheduled
   type "ip"      → cleanup kills A → timer B scheduled
   type "iph"     → cleanup kills B → timer C scheduled
   type "ipho"    → cleanup kills C → timer D scheduled
   type "iphon"   → cleanup kills D → timer E scheduled
   type "iphone"  → cleanup kills E → timer F scheduled

   user stops. 1 second passes untouched.
   → F fires → setDebouncedValue("iphone")
```

Only the last timer survives. **Cleanup is what creates the behavior** —
it isn't a leak fix here, it's the actual mechanism.

---

## The pattern: two clocks

```jsx
const [query, setQuery] = useState("");
const debouncedQuery = useDebounce(query, 1000);
```

Two variables tracking the same idea at different speeds:

```
   query          ──► drives the <input>. Updates instantly.
                      Typing must FEEL responsive.

   debouncedQuery ──► drives the search. Updates 1s after they stop.
                      Searching must NOT run per keystroke.
```

```
   ┌─────────────────────────────────────────────┐
   │  user types                                 │
   │      │                                      │
   │      ▼                                      │
   │  setQuery ──► query ──► <input value={} >   │  ← instant
   │      │                                      │
   │      ▼                                      │
   │  useDebounce ──► (waits 1s) ──►             │
   │                  debouncedQuery             │
   │                       │                     │
   │                       ▼                     │
   │                  useEffect ──► search       │  ← delayed
   └─────────────────────────────────────────────┘
```

**The payoff is the dependency array:**

```jsx
useEffect(() => {
  // run the search
}, [debouncedQuery]);   // ◄── the SLOW value, not `query`
```

Six keystrokes produce ONE search instead of six.

> **The takeaway:** keep a fast value for the UI and a slow value for
> expensive work, and depend on the slow one.

---

## Self-test questions

**Q1.** What is the only thing that makes a function a "custom hook"?

**Q2.** Two components both call `useDebounce`. Do they share `debouncedValue`? Why or why not?

**Q3.** Why is the `use` prefix a functional requirement and not a naming convention?

**Q4.** Why is `useToggle` a better name than `useBoolean`?

**Q5.** In `useDebounce`, what are the TWO values and which one drives the `<input>`?

**Q6.** Remove the `return () => clearTimeout(handler)` line. Type 6 characters. How many times does `debouncedValue` change, and what does it end up as?

**Q7.** Why does the consuming component depend on `[debouncedQuery]` instead of `[query]`? What breaks if you use `[query]`?

**Q8.** A custom hook shares logic but not state. What tool do you reach for when you genuinely need shared state?

**Q9.** Write `useToggle` from scratch. It should return the current boolean and a function that flips it. (Which form of the setter avoids a stale closure?)

**Q10.** What would `useFetch(url)` need to return, and which two problems from useEffect-exercises.md Exercise 2 would it have to handle internally?

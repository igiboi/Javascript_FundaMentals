# useEffect — Dependency Arrays, Cleanup & Stale Closures

## Core rules

```
1. A callback holds a PHOTO of the values it used, taken when the
   callback was created.

2. The dependency array controls WHEN a new callback (and a new
   photo) is created.
```

---

## The decision tree

```
   Is there a stale value?
     │
     ├─ NO → is the effect just computing state from state?
     │        └─ YES → delete the effect, compute during render
     │
     └─ YES → do you WANT a re-run when it changes?
                │
                ├─ YES → add it to the dependency array
                │
                └─ NO → stop reading it in the body:
                          state you're setting → updater fn
                          a prop you call      → move it out,
                                                  or ref (last resort)
```

**The array is never the escape hatch.** Ask whether re-running is what you want.

---

## Red flags to scan for

| Signal | Likely problem |
| --- | --- |
| `[]` + a prop or state read inside | stale closure |
| `setX(x + 1)` inside `setInterval`/`setTimeout` | stale closure → updater fn |
| a function or object in the array | reference changes every render |
| `eslint-disable exhaustive-deps` | fixing the symptom, not the cause |
| `useEffect` + `setState`, no API/DOM/timer | shouldn't be an effect at all |

---

## Concept questions

**Q1.** Why is `count` a dependency? What is the mechanical test that decides it?

**Q2.** In `setCount(count + 1)` vs `setCount(c => c + 1)` — what is `count`, and what is `c`? Use the terms *captured variable* and *parameter*.

**Q3.** Why does a stale closure barely matter in a click handler, but break a `setInterval` callback?

**Q4.** Why is the dependency array a *correctness* feature and not an optimization? Give an example where a wrong array produces wrong behavior, not slow behavior.

**Q5.** Why does `removeEventListener` fail if you pass an inline arrow function? What concept is that the same as when a function appears in a dependency array?

**Q6.** In what order do cleanup and the effect run when a dependency changes? When else does cleanup run?

---

## Trace exercises

Predict the output before running anything.

**T1.** Counter goes `0 → 1 → 2 → 3`. What does this log each second?
```jsx
useEffect(() => {
  setInterval(() => console.log(count), 1000)
}, [])
``` 

**T2.** Same component, deps changed to `[count]`. What is logged now, and what *second* bug appears?

**T3.** User clicks 4 times in the first second, so `count` reaches 4. Five seconds later, what is logged?
```jsx
useEffect(() => {
  setTimeout(() => console.log(count), 5000)
}, [])
```

**T4.** Same as T3 but deps are `[count]`. How many logs appear, and what values?

**T5.** Same as T4 but with `return () => clearTimeout(id)` added. How many logs now, and what value? What is this pattern called?

**T6.** `likes` is `0`. After ONE click, what is `likes`? Why?
```jsx
const handleClick = () => {
  setLikes(likes + 1)
  setLikes(likes + 1)
}
```

---

## Scenario drills

For each: is it broken? If so, which fix — **add to the array**, **updater function**, **move the call out**, **ref**, or **delete the effect**?

**S1.**
```jsx
<button onClick={() => setLikes(likes + 1)}>♥ {likes}</button>
```

**S2.**
```jsx
useEffect(() => {
  const id = setInterval(() => setSeconds(seconds + 1), 1000)
  return () => clearInterval(id)
}, [])
```

**S3.**
```jsx
function Search({ query }) {
  useEffect(() => {
    fetch(`/api/search?q=${query}`).then(/* ... */)
  }, [])
}
```

**S4.** S2 and S3 both have a stale value but take *different* fixes. What is the question that separates them?

**S5.** Parent renders `<Chat onMessage={(m) => setMessages(...)} />`
```jsx
function Chat({ roomId, onMessage }) {
  useEffect(() => {
    const socket = connect(roomId)
    socket.on('message', (msg) => onMessage(msg))
    return () => socket.disconnect()
  }, [roomId, onMessage])
}
```

**S6.**
```jsx
useEffect(() => {
  setTotal(expenses.reduce((sum, e) => sum + e.amount, 0))
}, [expenses])
```

---

## Exercise 1 — Autosave (DONE ✅)

Save to the API 2 seconds after the user **stops** typing.

```jsx
function NoteEditor({ noteId }) {
  const [text, setText] = useState('')
  const [saveCount, setSaveCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      saveNote(noteId, text)
      setSaveCount(saveCount + 1)
    }, 2000)
  }, [])

  return (
    <>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <p>Saved {saveCount} times</p>
    </>
  )
}
```

Three problems: one stale closure, one missing cleanup, one value that shouldn't be a dependency even though it's read.

<details>
<summary>Solution</summary>

```jsx
useEffect(() => {
  const timeout = setTimeout(() => {
    saveNote(noteId, text)
    setSaveCount(c => c + 1)
  }, 2000)

  return () => clearTimeout(timeout)
}, [text, noteId])
```

| Problem | Fix | Why that one |
| --- | --- | --- |
| `saveCount` read in a long-lived callback | updater fn `c => c + 1` | you don't want a re-run per save |
| `text` read with `[]` | add `text` to the array | you *do* want a re-run per keystroke |
| no cleanup | `return () => clearTimeout(timeout)` | cancels the stale save |

**Both fixes in one effect.** The question is per-value: *do I want a re-run when THIS changes?*

Without cleanup, typing 11 characters schedules 11 saves and all 11 fire.
With cleanup, each keystroke cancels the previous one — only the last survives.
That is **debouncing**: cleanup isn't just leak prevention, it *creates* the behavior.

`noteId` is read in the body too, so it belongs in the array as well.
</details>

---

## Exercise 2 — Live search with result count (DONE ✅)

**Symptoms:** switching category doesn't refresh results; typing fast sometimes shows the wrong list.

```jsx
function ProductSearch({ category }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [resultCount, setResultCount] = useState(0)

  useEffect(() => {
    fetch(`/api/products?q=${query}&cat=${category}`)
      .then((r) => r.json())
      .then((data) => setResults(data.items))
  }, [query])

  useEffect(() => {
    setResultCount(results.length)
  }, [results])

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <p>{resultCount} results</p>
      {results.map((p) => <div key={p.id}>{p.name}</div>)}
    </>
  )
}
```

Three problems:
- one missing dependency
- one race condition (fast typing → wrong results)
- one effect that shouldn't exist at all

Write the fixed component.

<details>
<summary>Solution</summary>

```jsx
function ProductSearch({ category }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    let ignore = false

    fetch(`/api/products?q=${query}&cat=${category}`)
      .then((r) => r.json())
      .then((data) => {
        if (ignore) return
        setResults(data.items)
      })

    return () => { ignore = true }
  }, [query, category])

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <p>{results.length} results</p>
      {results.map((p) => <div key={p.id}>{p.name}</div>)}
    </>
  )
}
```

| Problem | Fix |
| --- | --- |
| `category` read in the body, missing from the array | add it → `[query, category]` |
| out-of-order responses overwrite newer ones | `ignore` flag + cleanup |
| `resultCount` stored instead of computed | delete the state AND the effect, use `results.length` |

**The race, traced.** Typing `i → ip → iph → ipho → iphon → iphone` fires six
requests. They return out of order — if `iph` resolves after `iphone`, the list
shows results for `iph` while the input says `iphone`.

Each effect run creates its OWN `ignore` variable, and its cleanup closes over
that same one:

```
   cleanup for "iph" runs  →  sets ITS ignore = true
   effect for "ipho" runs  →  creates a NEW ignore = false

   "iph"  response arrives → checks its flag → true  → skip ✅
   "ipho" response arrives → checks its flag → false → setResults ✅
```

That's the photo mechanism used deliberately.

Production version uses `AbortController` — actually cancels the request instead
of ignoring the response:
```jsx
const controller = new AbortController()
fetch(url, { signal: controller.signal })
return () => controller.abort()
```

**Trap hit:** cleanup must be `ignore = true` (assignment), not `ignore === true`
(comparison). Both are legal syntax, so nothing errors — the code just silently
does nothing.
</details>

---

## Derived state — the most common React mistake

```
   useEffect + setState, with no API / DOM / timer / subscription
        └──►  that's a calculation wearing an effect costume
```

**The rule:** if you can calculate it from props or state, don't store it.

**Q1.** What are the two costs of `useEffect` + `setResultCount` versus just writing `results.length` in the JSX?

**Q2.** Why can a derived value stored in state "drift", while a computed expression cannot?

**Q3.** What is the one-sentence definition of what effects are actually FOR?

**Q4.** Where else have you seen this? (Hint: `total` in the expense tracker, `rowsWithChildren` at work.)

---

## Real-world case — AccountsTable (work code)

An `eslint-disable react-hooks/exhaustive-deps` was used to stop a duplicate API call.

**Q1.** If suppressing the rule stops a duplicate call, what does that usually mean about *ownership* of the fetch?

**Q2.** What makes a suppressed dependency array a *lie* rather than an optimization?

**Q3.** `expandedRows` and `childrenData` were keyed by `accountId` and never cleared when the page changed. What bug does that produce?

**Q4.** Why is "invalidate the cache when the dataset changes" a better fix than "refresh each expanded key"?

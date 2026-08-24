# Expense Tracker — React Notes

## Reference: Mutating vs Non-Mutating Array Methods

| Mutates original | Returns new array |
| ---------------- | ----------------- |
| `push`           | `map`             |
| `pop`            | `filter`          |
| `shift`          | `slice`           |
| `unshift`        | `concat`          |
| `splice`         | `flat`            |
| `sort`           | `flatMap`         |
| `reverse`        | `toSorted`        |
| `fill`           | `toReversed`      |

Traps:
- `slice` (safe) vs `splice` (mutates) — one letter apart, opposite behavior
- `sort` and `reverse` look like transformations but mutate in place
- To sort safely in React: `[...items].sort(...)` — copy first

---

## Why immutability matters in React

**Q1.** When you call a setter, what does React compare to decide whether to re-render?

**Q2.** Why does `items.push(x); setItems(items)` fail to update the UI, even though the array really did change?

**Q3.** What does `[...prevItems, newItem]` create that `push` does not?

**Q4.** Explain this result:
```js
const a = [1, 2, 3];
const b = a;
b.push(4);
console.log(a === b);
```

---

## Objects in state

**Q1.** What is a computed property name, and why does `[name]: value` let one handler update any key?

**Q2.** In `{ ...prevUser, [name]: value }` — why must the spread come first?

**Q3.** What happens if you drop the spread entirely: `setUser({ [name]: value })`?

**Q4.** Why do the parentheses in `(prev) => ({ ...prev })` exist? What does the parser do without them?

---

## Nested state

**Q1.** Why does spread only copy one level deep?

**Q2.** Given `{ name: "John", address: { city: "LA" } }` — why isn't
`setUser(prev => ({ ...prev, address: prev.address }))` enough to change the city?

**Q3.** What is a "shallow copy" vs a "deep copy"?

---

## Keys

**Q1.** What does React use `key` for?

**Q2.** Why is `id: items.length + 1` a bug? Give a sequence of actions that produces a duplicate id.

**Q3.** Why is the array index a bad key when items can be deleted or reordered?

---

## Type coercion at the boundary

**Q1.** What type is `e.target.value` — always?

**Q2.** Why does that break a running total, and which operator is the culprit?

**Q3.** Where is the right place to convert — on input, or when calculating?

---

## Stale closures

**Q1.** What is a closure?

**Q2.** Why does a `setTimeout` callback inside a handler log the old state value?

**Q3.** Why does the updater form `setCount(prev => prev + 1)` avoid the problem?

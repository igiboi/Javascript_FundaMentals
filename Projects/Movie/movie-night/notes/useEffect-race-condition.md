# useEffect race condition — cleanup + ignore flag

Movie Night, rung 1. Search-as-you-type fires one fetch per keystroke.
Responses can arrive out of order, so an older search can overwrite a newer one.

## The bug, in one fence

```diff
  you type "b"   → fetch B sent
  you type "a"   → fetch BA sent

+ BA lands first → setMovies(ba results)   correct, this is what you typed
- B lands second → setMovies(b results)    WRONG, overwrites with older data
```

B was sent first but arrived last. Last write wins, so stale results sit on screen.

## The fix

Each effect run gets its own `ignore` flag. The cleanup flips the old run's flag
before the next run starts. A stale response checks its own flag and writes nothing.

```diff
+ BA lands → ignore_BA is false → setMovies RUNS
- B lands  → ignore_B is true   → SKIPPED
```

## Full timeline

```yaml
YOU TYPE "b"
│
├─ setQuery("b")  →  re-render  →  React sees query changed  →  runs effect
│
│  ┌─ effect body, top to bottom ──────────────────────────┐
│  │ line 12  let ignore = false        # ← call it ignore_B
│  │ line 14  setLoading(true)                             │
│  │ line 15  setError(null)                               │
│  │ line 17  searchMovies("b")   ──────► fetch B sent ════╪═══╗
│  │ line 32  return cleanup      # stored, NOT run yet    │   ║
│  └───────────────────────────────────────────────────────┘   ║
│                                                              ║
│  screen: loading = true, spinner showing                     ║
│                                                              ║
YOU TYPE "a"   (fetch B still in flight)                       ║
│                                                              ║
├─ setQuery("ba")  →  re-render  →  query changed              ║
│                                                              ║
│  ┌─ React runs the STORED cleanup from the "b" run ──────┐   ║
│  │ line 34  ignore_B = true       # B is now stale       │   ║
│  └───────────────────────────────────────────────────────┘   ║
│                                                              ║
│  ┌─ then runs the effect again ──────────────────────────┐   ║
│  │ line 12  let ignore = false    # NEW variable: ignore_BA  ║
│  │ line 17  searchMovies("ba")  ──────► fetch BA sent ═══╪═╗ ║
│  │ line 32  return cleanup                               │ ║ ║
│  └───────────────────────────────────────────────────────┘ ║ ║
│                                                            ║ ║
│  ── network delay ──                                       ║ ║
│                                                            ║ ║
├─ BA response lands ◄───────────────────────────────────────╝ ║
│  │ line 19  .then(result)                                    ║
│  │ line 21  if (!ignore_BA)  →  false is not ignored  →  RUN ║
│  │ line 22  setMovies(ba results)  →  re-render              ║
│  │                                                           ║
│  screen: BA's movies                                         ║
│                                                              ║
├─ B response lands ◄──────────────────────────────────────────╝
│  │ line 19  .then(result)
│  │ line 21  if (!ignore_B)   →  true is ignored  →  SKIP
│  │          nothing happens
│  │
│  screen: still BA's movies   # correct
```

## The three things that are easy to get wrong

```diff
- "a new keystroke cancels the old fetch"
+ nothing is cancelled. All six requests complete. You discard the result.

- "cleanup runs when the fetch comes back"
+ cleanup runs when the dependency changes, whether or not the fetch finished.

- "useEffect causes a re-render"
+ state change → re-render → THEN effects run. Effects are the passenger.
```

## Vocabulary

| Term | What it means here |
|---|---|
| race condition | responses arrive out of order, last write wins |
| stale response | an old fetch's result, no longer wanted |
| cleanup function | what you return from `useEffect` |
| ignore flag | the per-run boolean the cleanup flips |
| closure | why each run's `.then` sees its own `ignore` |

## What this does NOT fix

Six keystrokes still means six network requests. `ignore` only stops the wrong
results from rendering — it does not reduce calls.

- **Debounce** fixes the wasted requests: `setTimeout` in the effect,
  `clearTimeout` in the cleanup. One request instead of six.
- **`AbortController`** actually cancels the in-flight request, rather than
  discarding its result.

## Reading

1. [State as a Snapshot](https://react.dev/learn/state-as-a-snapshot) — why each render has its own variables
2. [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects) — see "Fetching data", this exact pattern
3. [Lifecycle of Reactive Effects](https://react.dev/learn/lifecycle-of-reactive-effects) — effects as start/stop synchronizing
4. [MDN — Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures)
5. [MDN — AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
6. [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect) — read last

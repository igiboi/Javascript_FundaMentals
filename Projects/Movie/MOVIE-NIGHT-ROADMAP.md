# Movie Night — Roadmap

Decided 2026-09-09. Companion to MOVIE-NIGHT-HANDOFF.md.
Front-end only. Backend parked until rungs 1-10 are done.

## Decisions made

- **Solo-first, two-user shape.** Build as a single-user app. Store reviews
  keyed by user id with a hardcoded `currentUserId`. Auth arrives later and
  the shape already fits — nothing gets rewritten.
- **Collaboration model.** Two lists with an overlap view, not one shared
  list. The overlap is derived state.
- **Rating scale.** 1-5 stars.
- **Voting.** Each person marks "want to watch". Where both did is the
  overlap view. No separate voting mechanic.
- **Landing view.** The watchlist, not search. Search is a route away.
- **Reviews, not just ratings.** Letterboxd-style: stars plus written text.
  A rating is a review with no text.

## Rungs

Each rung is finished before the next starts.

Every rung has two columns: the **product** reason it exists, and the
**capability** it teaches. Both are real. A rung that only serves the
capability column does not get built — the app must not become a museum of
techniques.

0.  Scaffold — Vite + TS, `.env.local`, `.gitignore`, design token block,
    hand-write the `Movie` interface from a real TMDB response.
1.  Search input, TMDB fetch, poster grid.
    CSS Grid, box model, images. Four async states.
    → *Capability:* the race condition is the event loop made visible.
    Poster grid is layout shift made visible. Fix the race with a cleanup
    `ignore` flag; name `AbortController` as the alternative.
2.  Add to watchlist. Array state, keys. Flexbox rows, spacing scale.
    → *Capability:* state boundaries. Where watchlist state lives decides
    how rungs 5 and 9 go. Props typed so they are hard to misuse.
3.  localStorage persistence and hydration.
    → *Capability:* parse at the boundary. Stored JSON is `unknown`, not
    `Movie[]`. Trusting it is the bug.
4.  Reviews — stars, text, edit, delete. Controlled textarea, character
    counter as derived state, validation, confirm on delete.
    → *Capability:* accessibility for real. The star widget needs keyboard
    operation, roles, and focus management. Cannot be bolted on later.
5.  Overlap view — "both want to watch".
    → *Capability:* derived state, and system design — component
    boundaries, state ownership, defending the trade-off. This is also
    where prop-drilling starts to hurt: watchlist and reviews now need to
    reach several levels down. Feel it, do not fix it yet.
6.  Recommendations — TMDB supplies candidates, own code scores them by
    genre frequency from 4-5 star reviews. `.reduce` into a frequency map,
    sort by score, filter out what's already on the list.
    → *Capability:* functional programming doing real work, not drills.
7.  Activity feed — both people's reviews, newest first.
    → *Capability:* data-fetching discipline — caching, dedup, optimistic
    updates. Feel the pain before reaching for React Query. Also where a
    failing fetch must not blank the page: error boundary around the feed,
    Suspense for its loading state.
8.  Filter + sort the watchlist via `useSearchParams`. Survives refresh.
    → *Capability:* URL as state. Routing, and what belongs in the URL.
9.  Stats page — hours watched, top genres, ratings over time. `.reduce`
    doing real work.
    → *Capability:* React Profiler. Find the re-render, prove it, fix it.
10. Polish — dark mode (token swap), keyboard shortcuts (`/` to search),
    random picker, optimistic updates with rollback.
    → *Capability:* CSS depth — container queries, `:has()`, view
    transitions — where the product actually calls for them.
11. State refactor. By now the app is big enough that passing watchlist
    and reviews through the tree is genuinely painful. Fix it properly.
    → *Capability:* state at scale. Context first, and find out where
    Context alone re-renders too much. Only then judge whether a store
    earns its place. The point is the judgement, not the library.

## Cross-cutting passes

Not rungs. They run across the build and get their own dedicated sessions.

- **TypeScript judgment.** Refactor the four render states into a
  discriminated union once rung 1 exposes the impossible-state bug
  (`loading` and `error` true at once). Zero `any`. Every component API
  reviewed for "can this be called wrong?"
- **Testing.** Vitest + React Testing Library, starting after rung 2 and
  growing with the app. Test behaviour, not implementation. Protect the
  flows that would hurt if broken — search, persistence, ratings.
- **Performance.** A measured pass after rung 9: Lighthouse, bundle
  analysis, Core Web Vitals. Before and after numbers written down. No
  guessing, no premature memoisation.
- **Browser fundamentals.** Not a rung — a habit. Whenever something is
  slow, janky, or out of order, open DevTools and find out why before
  changing code. Performance panel over Console. The rendering pipeline
  (style → layout → paint → composite) is what the Performance panel is
  showing; learn to read it on the poster grid, where layout shift is
  already happening.
- **CSS, throughout.** Not saved for rung 10. Every rung has a real CSS
  problem in it, and the rule is: no component library, no utility
  framework, no copied snippets. Hand-written CSS, and the layout method
  chosen on purpose — Grid or Flexbox because of what the content is
  doing, never by habit.

  | Rung | The CSS problem it actually poses |
  |------|-----------------------------------|
  | 1 | Responsive poster grid with no media queries — `auto-fit` + `minmax`. Reserve image space with `aspect-ratio` or the grid jumps as posters load. |
  | 2 | Watchlist rows. Flexbox because the row is one-dimensional — be able to say why it is not Grid. |
  | 3 | Skeleton/loading state that occupies the same box as the real content. |
  | 4 | Star widget built from real inputs, styled with `:checked` and `:focus-visible`. Focus ring visible for keyboard, absent for mouse. |
  | 5 | Overlap badge positioned without breaking the card. Stacking context and `z-index` done deliberately. |
  | 7 | Feed that stays readable from 320px to ultrawide. `clamp()` for type, `ch` units for measure. |
  | 8 | Filter bar that reflows. `:has()` to style the card when a filter is active — no extra class from JS. |
  | 9 | Charts or bars in CSS. Custom properties driving width from data. |
  | 10 | Dark mode as a token swap only. View transitions on the detail modal. Container queries so the card responds to its slot, not the viewport. |

  Named targets to hit somewhere in the build, each because the product
  needs it: cascade layers for token/component/utility ordering, logical
  properties, `prefers-reduced-motion` honoured on every animation,
  `color-mix()` for hover states derived from tokens, and one animation
  written by hand rather than reached for from a library.

## Checkpoints — the part that tests you

Guided building teaches recognition. Recall is a different skill and it
only grows when nothing is there to lean on. So: after certain rungs, the
next thing is built cold.

Cold means no guidance while writing, no pattern reminders, no looking at
the earlier rung's code. MDN and TypeScript errors are allowed — those are
tools, not crutches. Get stuck, sit with it, then ask.

- **After rung 2** — rebuild the search feature from an empty file. Fetch,
  the four states, the grid. If the race condition fix does not come back
  from memory, that concept is not learned yet.
- **After rung 4** — build the star rating widget again from scratch,
  keyboard operation included. Accessibility is only learned when it is
  the first thing written, not the retrofit.
- **After rung 6** — take a plain TMDB endpoint that has not been used
  yet, and ship a working view of it solo. Types, fetch, states, layout.
  No scaffolding provided.
- **After rung 9** — a written design. Pick a feature that is not built
  (trailers, streaming availability, a compare view) and write the plan:
  component boundaries, where state lives, the data-fetching contract,
  what could go wrong. No code. Defending a design in prose is the
  frontend system design round, and it is practised by doing it.

A checkpoint that goes badly is information, not failure. It names the
rung to revisit.

## Working like a professional

The habits below are not front-end topics. They are the difference between
someone who can build and someone a team wants to hire, and self-taught
developers usually miss them because nothing forces them.

**Review every rung.** When a rung is done, it gets read the way a
reviewer would read it — not "does it work", but: can this component be
called wrong, what happens when the API returns nothing, why this
abstraction and not the simpler one, what will be annoying about this in
three rungs' time. Expect pushback, and expect to defend or change the
code. Being reviewed is where calibration comes from, and building alone
never supplies it.

**Commit properly.** Small commits, one logical change each. The message
explains *why* — the diff already shows what. Six months on, the why is
the only part that cannot be reconstructed. Concretely: a subject line
that finishes "this commit will…", then a body covering the reason, any
alternative rejected and why, and anything non-obvious a reviewer would
otherwise try to "fix".

Current history — "search movies", "Accessibility added" — is session
narration. It records that work happened, not what was decided.

**Branch per rung.** `rung-3-localstorage`, not everything on `main`.
Costs nothing solo, and it makes the workflow automatic by the time
someone else's code is involved.

**Write the decision down when it was hard.** Not a diary — a short note
at the point a real trade-off was made, in the roadmap or a `DECISIONS.md`.
Two lists rather than one shared list was that kind of decision. Those
notes are what "documented technical decisions" means on a senior
checklist, and they cost two minutes at the time and are unrecoverable
later.

**Read one library's source during this build.** Pick something already in
use — React Query when rung 7 makes caching hurt, or Testing Library when
the testing pass starts. Reading real source is the most reliable way to
level up and almost nobody does it.

## After Movie Night

Next.js gets its own project rather than a migration of this one. Porting
working Vite code teaches the migration, not the framework.

## Consequences for rung 0

- `Movie` must include `genre_ids` — rung 6 needs it, and retrofitting once
  localStorage holds old data is painful.
- Reviews are a separate collection keyed by `movieId`. Never nest reviews
  inside movie objects, or every review edit rewrites a movie record.

## Explicitly skipped

Follows, comments on reviews, public profiles, social sharing — backend-
dependent, and two people do not need a social graph.

Trailers, streaming availability, cast pages — fine features, low teaching
value. Add later if wanted.

## Still open

- TMDB API key — not yet confirmed. Blocks rung 1. Rung 0 does not need it.
- Which backend, and when. Not decided.

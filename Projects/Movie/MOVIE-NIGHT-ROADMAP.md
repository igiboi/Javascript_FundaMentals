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

0.  Scaffold — Vite + TS, `.env.local`, `.gitignore`, design token block,
    hand-write the `Movie` interface from a real TMDB response.
1.  Search input, TMDB fetch, poster grid.
    CSS Grid, box model, images. Four async states.
2.  Add to watchlist. Array state, keys. Flexbox rows, spacing scale.
3.  localStorage persistence and hydration.
4.  Reviews — stars, text, edit, delete. Controlled textarea, character
    counter as derived state, validation, confirm on delete.
5.  Overlap view — "both want to watch".
6.  Recommendations — TMDB supplies candidates, own code scores them by
    genre frequency from 4-5 star reviews. `.reduce` into a frequency map,
    sort by score, filter out what's already on the list.
7.  Activity feed — both people's reviews, newest first.
8.  Filter + sort the watchlist via `useSearchParams`. Survives refresh.
9.  Stats page — hours watched, top genres, ratings over time. `.reduce`
    doing real work.
10. Polish — dark mode (token swap), keyboard shortcuts (`/` to search),
    random picker, optimistic updates with rollback.

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

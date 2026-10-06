import type { Movie } from "../types/movie";

const SAVED_MOVIE_LIST = "movie-list"

export function saveWatchlist(userId: string, movies: Movie[]) {
  const raw = localStorage.getItem(SAVED_MOVIE_LIST);
  const store = raw ? JSON.parse(raw) : {};
  store[userId] = movies;
  localStorage.setItem(SAVED_MOVIE_LIST, JSON.stringify(store));
}

function isMovie(value: unknown): value is Movie {

  if (typeof value !== "object" || value === null) {
    return false;
  }
  const movie = value as Record<string, unknown>;

  return (
    typeof movie.id === "number"
    && typeof movie.title === "string"
    && Array.isArray(movie.genreIds)
  )
}

export function loadWatchlist(userId: string): Movie[] {
  // 1. read raw; if null → return []
  const raw = localStorage.getItem(SAVED_MOVIE_LIST);
  if (!raw) return [];

  try {
    const store = JSON.parse(raw);
    const list = store[userId];
    
    if (!Array.isArray(list)) return [];
    return list.filter(isMovie);

  } catch (error) {
    return [];
  }
}

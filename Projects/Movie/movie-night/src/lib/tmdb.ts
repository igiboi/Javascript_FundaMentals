import type { Movie } from "../types/movie"

const TMDB_KEY = import.meta.env.VITE_TMDB_API_KEY

interface TMDBMovie {
  id: number;       
  title: string;
  poster_path: string | null;
  release_date: string | null;
  genre_ids: number[];
}

interface TMDBSearchResponse {
  results: TMDBMovie[];
}

export async function searchMovies(query: string): Promise<Movie[]> {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&query=${encodeURIComponent(query)}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`TMDB request failed ${res.status}`)
const data = (await res.json()) as TMDBSearchResponse;

  if (!Array.isArray(data.results)) {
    throw new Error("Unexpected response from TMDB");
  }
  
  return data.results.map((movie) => ({
    id: movie.id,
    title: movie.title,
    posterPath: movie.poster_path,
    releaseDate: movie.release_date,
    genreIds: movie.genre_ids,
  }))
}
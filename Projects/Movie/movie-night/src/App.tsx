import { useEffect, useState } from "react";
import type { Movie } from "./types/movie";
import { searchMovies } from "./lib/tmdb";
import "./App.css";


function App() {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;

    // Empty box means no search — don't hit TMDB for "" or whitespace.
    const emptyQuery = query.trim() === "";
    if (emptyQuery) {
      setMovies([]);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    const timer = setTimeout(() => {
      searchMovies(query)
        .then((result) => {
          if (!ignore) {
            setMovies(result);
          }
        })
        .catch((err) => {
          if (!ignore) {
            setError(err.message);
          }
        })
        .finally(() => {
          if (!ignore) {
            setLoading(false);
          }
        });
    }, 300);
    // Cancel the pending timer and discard any in-flight response
    return () => {
      clearTimeout(timer);
      ignore = true;
    };
  }, [query])


  return (
    <div className="page">
      <label htmlFor="search">Search movies</label>
      <input
        id="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      {movies.length > 0 && (
        <ul className="poster-grid">
          {movies.map((movie) => (
            <li key={movie.id} className="poster-card">
              {movie.posterPath ? (
                <img
                  src={`https://image.tmdb.org/t/p/w342${movie.posterPath}`}
                  alt=""
                />
              ) : (
                <div className="poster-fallback">{movie.title}</div>
              )}
              <p className="poster-title">{movie.title}</p>
              <p className="poster-year">{movie.releaseDate.slice(0, 4)}</p>
            </li>
          ))}
        </ul>
      )}
      {!error &&
        !loading &&
        movies.length === 0 &&
        (query === "" ? <p>Search for a movie</p> : <p>No results found</p>)}
    </div>
  );
}

export default App;
import { useEffect, useState } from "react";
import type { Movie } from "./types/movie";
import { searchMovies } from "./lib/tmdb";

function App() {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log(`START  "${query}"`);
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

    searchMovies(query)
      .then((result) => {
        console.log(`BACK   "${query}" — ignore is ${ignore}`);
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

    return () => {
      console.log(`CLEANUP for "${query}" - ignore is ${ignore}`);
      ignore = true;
    };
  }, [query])


  return (
    <>
      <label htmlFor="search">Search movies</label>
        <input
          id="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
    </>
  );
}

export default App;
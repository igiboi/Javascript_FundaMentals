import { useEffect, useState } from "react";
import { searchMovies } from "./lib/tmdb";
import type { SearchState } from "./types/searchState";
import "./App.css";


function App() {
  const [query, setQuery] = useState<string>("");
  const [search, setSearch] = useState<SearchState>({ status: "idle" });

  useEffect(() => {
    let ignore = false;

    // Empty box means no search — don't hit TMDB for "" or whitespace.
    const emptyQuery = query.trim() === "";
    if (emptyQuery) {
      setSearch({ status: "idle" });
      return;
    }

    const timer = setTimeout(() => {
      // Loading starts when the request does, not while the user is typing.
      setSearch({ status: "loading" });

      searchMovies(query)
        .then((result) => {
          if (!ignore) {
            setSearch({ status: "success", movies: result });
          }
        })
        .catch((err) => {
          if (!ignore) {
            setSearch({ status: "error", message: err.message });
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
      {search.status === "idle" && <p>Search for a movie</p>}

      {search.status === "loading" && <p>Loading...</p>}

      {search.status === "error" && <p>{search.message}</p>}

      {search.status === "success" &&
        (search.movies.length === 0 ? (
          <p>No results found</p>
        ) : (
          <ul className="poster-grid">
            {search.movies.map((movie) => (
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
                <p className="poster-year">
                  {movie.releaseDate?.slice(0, 4) || "-"}
                </p>
              </li>
            ))}
          </ul>
        ))}
    </div>
  );
}

export default App;
import { useState } from "react";
import type { Movie } from "./types/movie";

function App() {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);


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
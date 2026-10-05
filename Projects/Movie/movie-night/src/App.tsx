import SearchPage from "./pages/SearchPage";
import WatchlistPage from "./pages/WatchlistPage";
import "./App.css";
import { useState } from "react";
import type { Movie } from "./types/movie";

function App() {
  const [watchlist, setWatchlist] = useState<Movie[]>([]);

  function addToWatchlist(movie: Movie) {
    if (watchlist.some((existingMovie) => existingMovie.id === movie.id)) {
      return;
    }
    setWatchlist([...watchlist, movie])
  }

  function removeFromWatchlist(movieId: number) {
    setWatchlist(watchlist.filter((movie) => movie.id !== movieId));
  }

  return (
    <div className="page">
      <h1>Movie Night</h1>
      <SearchPage addToWatchlist={addToWatchlist} />
      <WatchlistPage
        watchlist={watchlist}
        removeFromWatchlist={removeFromWatchlist}
      />
    </div>
  );
}

export default App;

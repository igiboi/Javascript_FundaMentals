import type { Movie } from "../types/movie";

type WatchlistPageProps = {
  watchlist: Movie[];
  removeFromWatchlist: (movieId: number) => void;
};

function WatchlistPage({ watchlist, removeFromWatchlist }: WatchlistPageProps) {
  return (
    <section>
      <h2>Watchlist</h2>

      {watchlist.length === 0 ? (
        <p>Add to your watchlist</p>
      ) : (
        <ul className="watchlist">
          {watchlist.map((movie) => (
            <li key={movie.id} className="watchlist-row">
              {movie.posterPath ? (
                <img
                  className="watchlist-poster"
                  src={`https://image.tmdb.org/t/p/w92${movie.posterPath}`}
                  alt=""
                />
              ) : (
                <div className="watchlist-poster watchlist-poster-fallback" />
              )}

              <div className="watchlist-meta">
                <p className="watchlist-title">{movie.title}</p>
                <p className="watchlist-year">
                  {movie.releaseDate?.slice(0, 4) || "-"}
                </p>
                <button onClick={() => removeFromWatchlist(movie.id)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default WatchlistPage;



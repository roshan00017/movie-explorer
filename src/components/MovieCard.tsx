import { useAppDispatch, useAppSelector } from "../store/hooks";
import type { Movie } from "../features/movies/movieType";
import {
  addToWatchlist,
  removeFromWatchlist,
} from "../features/wathlist/watchlistSlice";
type Props = { movie: Movie };

const MovieCard = ({ movie }: Props) => {
  const dispatch = useAppDispatch();
  const watchlist = useAppSelector((state) => state.watchlist.items);
  const inWatchlist = watchlist.some((m) => m.id === movie.id);

  const toggleWatchlist = () => {
    if (inWatchlist) dispatch(removeFromWatchlist(movie.id));
    else dispatch(addToWatchlist(movie));
  };

  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 transform hover:scale-105 transition duration-300 w-60">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="h-80 object-cover w-full"
      />
      <div className="p-4 flex flex-col">
        <h3 className="text-lg font-semibold">{movie.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          ⭐ {movie.vote_average.toFixed(1)}
        </p>
        <button
          onClick={toggleWatchlist}
          className={`mt-3 px-3 py-1 text-sm rounded ${
            inWatchlist ? "bg-red-500" : "bg-green-600"
          } text-white`}
        >
          {inWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;

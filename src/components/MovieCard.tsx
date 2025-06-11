import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import type { Movie } from "../features/movies/movieType";
import {
  addToWatchlist,
  removeFromWatchlist,
} from "../features/wathlist/watchlistSlice";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const dispatch = useAppDispatch();
  const watchlist = useAppSelector((state) => state.watchlist.items);
  const inWatchlist = watchlist.some((m: any) => m.id === movie.id);

  const toggleWatchlist = () => {
    inWatchlist
      ? dispatch(removeFromWatchlist(movie.id))
      : dispatch(addToWatchlist(movie));
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-2 rounded shadow">
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        className="w-full rounded"
      />
      <h3 className="text-sm font-semibold mt-2">{movie.title}</h3>
      <p className="text-xs text-gray-500 dark:text-gray-300">
        ⭐ {movie.vote_average}
      </p>
      <button
        onClick={toggleWatchlist}
        className={`mt-2 px-3 py-1 text-xs rounded ${
          inWatchlist ? "bg-red-500" : "bg-green-500"
        } text-white`}
      >
        {inWatchlist ? "Remove" : "Add"} to Watchlist
      </button>
    </div>
  );
};

export default MovieCard;

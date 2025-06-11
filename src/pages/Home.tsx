import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchPopularMovies, fetchSearchedMovies } from "../features/movies/movieSlice";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const dispatch = useAppDispatch();
  const { movies, loading } = useAppSelector((state) => state.movies);
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchSearchedMovies(query));
    }
  };

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search movies..."
          className="px-4 py-2 border rounded w-full dark:bg-gray-800 dark:text-white"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

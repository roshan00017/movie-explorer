import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  fetchPopularMovies,
  fetchSearchedMovies,
} from "../features/movies/movieSlice";
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
      <div className="w-full flex justify-center mt-6">
        <div className="flex w-full max-w-3xl gap-2">
          <input
            type="text"
            placeholder="Search for movies..."
            className="flex-1 px-4 py-3 rounded-l-full bg-gray-100 dark:bg-gray-700 text-black dark:text-white focus:outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-5 py-3 rounded-r-full"
          >
            Search
          </button>
        </div>
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

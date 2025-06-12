import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  fetchPopularMovies,
  fetchSearchedMovies,
  fetchTopRatedMovies,
} from "../features/movies/movieSlice";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";
import type { Movie } from "../features/movies/movieType";

const Home = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.movies);
  const [query, setQuery] = useState("");
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [popularResult, topRatedResult] = await Promise.all([
          dispatch(fetchPopularMovies()).unwrap(),
          dispatch(fetchTopRatedMovies()).unwrap(),
        ]);

        setPopularMovies(popularResult.results || []);
        setTopRatedMovies(topRatedResult.results || []);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchMovies();
  }, [dispatch]);

  const handleSearch = async () => {
    if (!query.trim()) {
      setIsSearching(false);
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    try {
      const result = await dispatch(fetchSearchedMovies(query)).unwrap();
      setSearchResults(result.results || []);
    } catch (error) {
      console.error("Search failed:", error);
      setSearchResults([]);
    }
  };

  const renderMovieGrid = (movies: Movie[]) => (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
      {movies.length > 0 ? (
        movies
          .slice(0, 4)
          .map((movie) => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <p className="col-span-full text-center text-gray-500">
          No movies available
        </p>
      )}
    </div>
  );

  return (
    <div className="p-4">
      {/* Search Section */}
      <div className="w-full flex justify-center mb-12">
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
            className="bg-blue-600 text-white px-5 py-3 rounded-r-full hover:bg-blue-700 transition-colors"
          >
            Search
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <p>Loading...</p>
        </div>
      ) : (
        <>
          {/* Search Results */}
          {isSearching && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Search Results</h2>
              {renderMovieGrid(searchResults)}
            </section>
          )}

          {/* Show regular sections only when not searching */}
          {!isSearching && (
            <>
              {/* Popular Movies Section */}
              <section className="mb-12">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Popular Movies</h2>
                  <Link
                    to="/popular"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  >
                    View All →
                  </Link>
                </div>
                {renderMovieGrid(popularMovies)}
              </section>

              {/* Top Rated Movies Section */}
              <section className="mb-12">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Top Rated Movies</h2>
                  <Link
                    to="/top-rated"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  >
                    View All →
                  </Link>
                </div>
                {renderMovieGrid(topRatedMovies)}
              </section>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Home;

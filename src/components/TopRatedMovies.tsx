import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchTopRatedMovies } from "../features/movies/movieSlice";
import MovieCard from "../components/MovieCard";
import type { Movie } from "../features/movies/movieType";

const TopRatedMovies = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.movies);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      const result = await dispatch(fetchTopRatedMovies(page)).unwrap();
      setMovies(result.results);
      setTotalPages(result.total_pages);
    };
    loadMovies();
  }, [dispatch, page]);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-8">Top Rated Movies</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="px-4 py-2">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TopRatedMovies;
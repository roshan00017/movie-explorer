import MovieCard from "../components/MovieCard";
import { useAppSelector } from "../store/hooks";

const Watchlist = () => {
  const watchlist = useAppSelector((state) => state.watchlist.items);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Watchlist</h1>
      {watchlist.length === 0 ? (
        <p>No movies in your watchlist.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {watchlist.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;

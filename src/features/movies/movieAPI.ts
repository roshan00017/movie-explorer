const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export async function getPopularMovies(page = 1) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`
  );
  const data = await res.json();
  return data;
}

export async function searchMovies(query: string) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
      )}`
    );

    if (!res.ok) {
      throw new Error("Search failed");
    }

    const data = await res.json();
    return data; // Return the whole response object, not just results
  } catch (error) {
    console.error("Search API error:", error);
    throw error;
  }
}
export async function getTopRatedMovies(page = 1) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${page}`
  );
  const data = await res.json();
  return data;
}

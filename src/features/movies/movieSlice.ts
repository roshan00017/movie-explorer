import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPopularMovies, searchMovies } from "./movieAPI";
import type { Movie } from "./movieType";

interface MovieState {
  movies: Movie[];
  loading: boolean;
  error?: string;
}

const initialState: MovieState = {
  movies: [],
  loading: false,
};

export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopular",
  getPopularMovies
);
export const fetchSearchedMovies = createAsyncThunk(
  "movies/search",
  searchMovies
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchSearchedMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      });
  },
});

export default movieSlice.reducer;

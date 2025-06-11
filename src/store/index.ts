import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movies/movieSlice";
import watchlistReducer from "../features/wathlist/watchlistSlice";

export const store = configureStore({
  reducer: {
    watchlist: watchlistReducer,
    movies: movieReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
